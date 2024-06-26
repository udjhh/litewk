window.page_class = new class {
    async render_page() {
        document.title = _('bookmarks.bookmarks')
        
        let section = window.s_url.searchParams.get('section') ?? 'all'
        let tabs_html = ``
        let method = 'fave.get'
        let method_params = {'count': 10, 'extended': 1, 'fields': window.typical_fields}

        switch(section) {
            default:
                document.title = _('bookmarks.all_bookmarks')

                break
            case 'pages':
                document.title = _('bookmarks.pages_bookmarks')
    
                method = 'fave.getPages'
                method_params.fields = window.typical_group_fields + ',' + window.typical_fields
                break
            case 'user':
                document.title = _('bookmarks.user_bookmarks_title')

                method = 'fave.getPages'
                method_params.type = 'users'
                break
            case 'group':
                document.title = _('bookmarks.group_bookmarks_title')
    
                method = 'fave.getPages'
                method_params.type = 'groups'
                method_params.fields = window.typical_group_fields
                break
            case 'post':
                document.title = _('bookmarks.post_bookmarks_title')

                method_params.item_type = 'post'
                break
            case 'article':
                document.title = _('bookmarks.article_bookmarks_title')
    
                method_params.item_type = 'article'
                break
            case 'link':
                document.title = _('bookmarks.link_bookmarks_title')
        
                method_params.item_type = 'link'
                break
            case 'video':
                document.title = _('bookmarks.video_bookmarks_title')
            
                method_params.item_type = 'video'
                break
        }

        if(window.s_url.searchParams.has('tag_id')) {
            method_params.tag_id = window.s_url.searchParams.get('tag_id')
        }

        tabs_html = `
            <a href='site_pages/faves.html?section=${section}' data-section='${section}'>${_('bookmarks.bookmarks')}</a>
        `

        let sections_list = ``
        let sections = ['all', 'pages', 'divider', 'user', 'group', 'post', 'article', 'link', 'video']
        sections.forEach(el => {
            if(el == 'divider') {
                sections_list += `
                    <hr>
                `
                
                return
            }
            sections_list += `
                <a href='site_pages/faves.html?section=${el}${window.s_url.searchParams.has('tag_id') ? `&tag_id=${window.s_url.searchParams.get('tag_id')}` : ''}' ${section == el ? 'class=\'selectd\'' : ''}>${_(`bookmarks.${el}_bookmarks`)}</a>
            `
        })

        $('.page_content')[0].insertAdjacentHTML('beforeend', 
            `
                <div class='default_wrapper two_big_blocks_wrapper'>
                    <div>
                        <div class='typical_tabs bordered_block'>
                            <div class='wall_wrapper_upper_panel friend_select_tab' id='insert_paginator_here_bro'>
                                <div class='tabs'>${tabs_html}</div>
                            </div>
                        </div>

                        <div class='friends_search_fuck_block' id='_bookmarks_search' style='margin-bottom: 10px;'>
                            <input type='text' placeholder='${_('bookmarks.search_by_loaded_bookmarks')}'>
                            <input type='button' style='margin-left: 5px;' value='${_('wall.search')}'>
                        </div>

                        <div class='bookmarks_insert bordered_block short_list'></div>
                    </div>
                    <div class='wall_wrapper_tabs bordered_block'>
                        <div>
                            ${sections_list}

                            <div class='wall_wrapper_newsfeed_params' style='display:none;'>
                                <input type='button' id='__markbookmarks' value='${_('bookmarks.mark_as_viewed')}' style='width:100%;margin-bottom: 3px;margin-top: 3px;'>

                                <span>${_('bookmarks.tags')}</span>
                            </div>
                            <div id='__inserttags'></div>
                        </div>
                    </div>
                </div>
            `
        )
        
        let tab_dom = $(`.typical_tabs a[data-section='${section}']`)
        tab_dom.addClass('selectd')

        window.main_classes['wall'] = new Bookmarks('.bookmarks_insert')
        window.main_classes['wall'].setParams(method, method_params)
        window.main_classes['wall'].clear()
            
        if(window.s_url.searchParams.has('page')) {
            window.main_classes['wall'].objects.page = Number(window.s_url.searchParams.get('page')) - 1
        }

        await window.main_classes['wall'].nextPage()
        if(tab_dom[0]) {
            tab_dom[0].innerHTML = tab_dom[0].innerHTML + ` (${window.main_classes['wall'].objects.count})`
        }

        $('#insert_paginator_here_bro')[0].insertAdjacentHTML('beforeend', paginator_template(window.main_classes['wall'].objects.pagesCount, (Number(window.s_url.searchParams.get('page') ?? 1))))
       
        let tags = await window.vk_api.call('fave.getTags', false)
        tags = tags.response

        if(tags.count > 0) {
            $('.wall_wrapper_newsfeed_params')[0].style.display = 'block'

            tags.items.forEach(tag => {
                let is_this = Number(window.s_url.searchParams.get('tag_id')) == tag.id

                $('#__inserttags')[0].insertAdjacentHTML('beforeend', 
                    `
                        <a href='site_pages/faves.html?section=${section}${!is_this ? `&tag_id=${tag.id}` : ''}' class=\'${is_this ? 'selectd' : ''} tag_selector\'>${tag.name}</a>
                    `
                )
            })
        }
    }
}
