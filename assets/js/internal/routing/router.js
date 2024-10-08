window.router = (function() {
    return {
        resetPage: function() {
            u('.page_content').empty()
            window.temp_scroll = null
        },
        emptyPage: function() {
            window.router.resetPage()

            u('style').remove()
            u('div').remove()
            
            window.black_list = null
        },
        restart: function(add, condition = '') {
            const menu_html = u('.navigation_list').html()
            
            window.router.emptyPage()
            main_class.loadLayout(add)
            main_class.runTriggers()
            
            if(condition != 'ignore_menu') {
                u('.navigation_list').html(menu_html)
            }
        },
        hardRestart: function() {
            location.reload()
        },
        __parseRoute: function(input_url) {
            if(!input_url) {
                input_url = window.consts.DEFAULT_ROUTE
            }

            const url = (input_url.split('?')[0]).removePart('#')
            for(const route of window.routes) {
                const route_formatted = route.url.escapeHtml()
                const route_template  = route_formatted.replace(window.consts.REGEX_ROUTE_PATTERN, '([^/]+)')
                const route_matches   = url.match(route_template)
                
                if(route_matches) {
                    const route_matches_arr = route.url.match(window.consts.REGEX_ROUTE_PATTERN)
                    
                    let route_params = []
                    let route_return_params = []
                    let route_params_matched = {}
                    let _iterator = 0
    
                    if(route_matches_arr && route_matches_arr.length > 0) {
                        route_params = route_matches_arr.map(placeholder => placeholder.slice(1, -1))
                    }
    
                    for(const route_param of route_params) {
                        const splitted_param = route_param.split('|')
                        const param_value = route_matches[_iterator + 1]
                        let param_type = splitted_param[0]
                        let param_name = splitted_param[1]
    
                        if(!param_name) {
                            param_type = 'string'
                            param_name = splitted_param[0]
                        }
                        
                        switch(param_type) {
                            default:
                            case 'int':
                                if(!isNaN(param_value.parseInt())) {
                                    route_return_params.push(param_name)
                                }
    
                                break
                            case 'string':
                                route_return_params.push(param_name)
    
                                break
                        }
                        
                        _iterator += 1
                    }
    
                    if(route_params.length > 0 && route_return_params.length < 1) {
                        continue
                    }

                    route_return_params.forEach((name, index) => {
                        route_params_matched[name] = route_matches[index + 1]
                    })

                    return {'route': route, 'params': route_return_params, 'match': route_matches, 'params_matched': route_params_matched}
                }
            }
    
            return null
        },
        __appendBackButton: function(url) {
            if(window.site_params.get('ux.hide_back_button', '0') == '1' || !url) {
                window.back_button = undefined
                return
            }

            u('#up_panel').addClass('back')
            u('#up_panel').removeClass('hidden')
            u('#up_panel').removeClass('down')

            this.back_button = url
        },
        __actMenu: function(hide) {
            if(hide) {
                u('.navigation').attr('style', `display:none;`)
                u('body').addClass('simple')
            } else {
                u('.navigation').attr('style', `display:flex;`)
                u('body').removeClass('simple')
            }
        },
        pushState: function (url) {
            if(url.indexOf('#') == -1 && window.site_params.get('ux.hash_to_url', '1') == '1') {
                url = '#' + url
            }

            history.pushState({'go': 1}, null, url)
            window.main_url = new BetterURL(location.href)
        },
        replaceState: function (url) {
            if(url.indexOf('#') == -1 && window.site_params.get('ux.hash_to_url', '1') == '1') {
                url = '#' + url
            }

            history.replaceState({'go': 1}, null, url)
            window.main_url = new BetterURL(location.href)
        },
        route: async function(input_url, history_log = true, back_url = null) {
            let url = input_url.removeAll(location.origin).removePart(location.pathname).removePart('#')  

            if(!url || url == '') {
                if(window.active_account) {
                    url = window.consts.DEFAULT_ROUTE
                } else {
                    url = window.consts.DEFAULT_ROUTE_UNLOGGED
                }
            }

            let route_parsed = this.__parseRoute(url)
    
            this.resetPage()
            if(!route_parsed) {
                route_parsed = this.__parseRoute('#errors/404')
            }
            
            if(history_log && location.hash.removePart('#') != url) {
                if(!route_parsed.route.dont_pushstate) {
                    this.pushState(url)
                } else {
                    this.replaceState(url)
                }
            }

            this.currentRoute = route_parsed.route
            main_class['hash_params'] = route_parsed['params_matched']
            this.__actMenu(route_parsed.route.hide_menu)

            const controller = route_parsed['route'].script_name.split('.')
            const controller_name = controller[0]
            const controller_function = controller[1]

            window.page_controller = window.controllers[controller_name]
            if(!window.page_controller) {
                main_class.addErrorWithBackButton(_('errors.broken_controller'))
                return
            }

            if(typeof window.page_controller[controller_function + 'Skeleton'] == 'function') {
                window.scrollTo(0, 0)
                window.page_controller[controller_function + 'Skeleton']()
            }

            await window.page_controller[controller_function]()
            if(typeof window.page_controller[controller_function + 'ExecuteButtons'] == 'function') {
                window.page_class[controller_function + 'ExecuteButtons']()
            }
    
            this.__appendBackButton(back_url)
            main_class.setupObservers()
            main_class.runTriggers()
            window.header.checkHeader()

            // Close messageboxes

            if(window.messagebox_stack && window.messagebox_stack.length > 0) {
                window.messagebox_stack.forEach(msg => {
                    msg.close()
                })
            }


            window.scrollTo(0, 0)
        }
    }
})()

class BetterURL extends URL {
    constructor(url) {
        super(url)
        this.hashParams = new URLSearchParams(this.hash.slice(1).split('?')[1] || '')
    }

    getParam(name, def = null) {
        return this.hashParams.get(name) ?? def
    }

    setParam(name, value) {
        this.hashParams.set(name, value)
        this.updateParams()
    }

    updateParams() {
        let [path, ] = this.hash.slice(1).split('?')
        let newHash = path;
        const params = this.hashParams.toString()

        if(params) {
            newHash += '?' + params;
        }

        this.hashParams = new URLSearchParams(newHash.slice(1).split('?')[1] || '')
        this.hash = newHash;
    }

    hasParam(name) {
        return Boolean(this.hashParams.get(name))
    }

    deleteParam(name) {
        this.hashParams.delete(name)
        this.updateParams()
    }

    getParams() {
        return this.hashParams
    }

    getHash() {
        return this.hash.removePart('#')
    }
}
