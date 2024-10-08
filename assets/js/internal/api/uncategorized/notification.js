class ApiNotification extends Hasable {
    constructor(info) 
    {
        super()

        this.info = info
    }

    formatCurlyBraces(text) 
    {
        text     = text.replace(/\{date\}/g, Utils.short_date(this.info.date))
        text     = Utils.escape_html(text)
        text     = Utils.singleQuotesToBold(text)
        text     = Utils.format_mentions(text)

        return text
    }

    isMultiple() 
    {
        return this.info.action.type == 'ungroup'
    }

    hasSmallerIcon() 
    {
        return this.has('icon_url')
    }

    getSmallerIcon() 
    {
        return this.info.icon_url
    }

    getIcon() 
    {
        const icon_obj = this.info.main_item

        switch(icon_obj.type) {
            default:
                return ''
            case 'image':
                return `<img src='${icon_obj.image_object[0].url}'>`
            case 'user':
                const user = Utils.find_owner_in_arrays_and_return_entity(icon_obj.object_id, window.main_classes['wall'].profiles, window.main_classes['wall'].groups)
                return `<img class='outliner' src='${user.getAvatar(true)}'>`
            case 'group':
                const group = Utils.find_owner_in_arrays_and_return_entity(icon_obj.object_id * -1, window.main_classes['wall'].profiles, window.main_classes['wall'].groups)
                return `<img class='outliner' src='${group.getAvatar(true)}'>`
        }
    }

    getTitle() 
    {
        return this.formatCurlyBraces(this.info.header)
    }

    getSubtext() 
    {
        return this.formatCurlyBraces(this.info.footer ?? '')
    }
    
    getText() {
        return this.formatCurlyBraces(this.info.text)
    }

    getURL(rooter) 
    {
        const root = rooter ? rooter : this.info.action
        switch(root.type) {
            case 'hide_item':
                return {'url': 'javascript:void(0)', 'blank': false}
            case 'custom':
                const url = root.url

                if(url.indexOf('id.vk.com') == -1 && url.indexOf('m.vk.com') == -1) {
                    return {'url': '#' + Utils.cut_vk(root.url), 'blank': false}
                } else {
                    return {'url': root.url, 'blank': true}
                }
            case 'ungroup':
                return {'url': 'javascript:void(0)', 'blank': false}
        }
    }

    getTemplate() 
    {
        return window.templates.notification(this)
    }

    getId() 
    {
        return this.info.id
    }

    getButtons() 
    {
        const buttons = this.info.buttons
        let buttons_html = ``

        buttons.forEach(btn => {
            if(btn.action.context) {
                console.log(btn)
                //return
            }

            const url = this.getURL(btn.action)
            buttons_html += `
                <object>
                    <a href='${url.url}' ${url.blank ? `target='_blank'` : ''} ${btn.action.context ? `class='btn_with_context'` : ''} id='${this.getId()}'>
                        <input type='button' ${btn.destructive ? `id='_destructive'` : ''} class='button_${btn.style}' value='${Utils.escape_html(btn.label)}'>
                    </a>
                </object>
                `
        })

        return buttons_html
    }

    getActionButtons() 
    {
        const action_buttons = this.info.action_buttons
        let action_html = ``

        if(action_buttons.left) {
            action_buttons.left.forEach(btn => {
                action_html += `
                    <p>${Utils.escape_html(btn.label)}</p>
                `
            })
        }

        if(action_buttons.right) {
            action_buttons.right.forEach(btn => {
                action_html += `
                    <p>${Utils.escape_html(btn.label)}</p>
                `
            })
        }

        return action_html
    }

    getAttachments() 
    {
        return this.info.attachments
    }

    getAttachmentsHTML()
    {
        const attachments = this.getAttachments()
        let compatible_attachments = []

        attachments.forEach(att => {
            if(att.type == 'photo') {
                let photo_id = att.object_id.split('_')
                let photo_obj = window.main_classes['wall'].photos.find(photo => photo.id == Number(photo_id[1]) && photo.owner_id == Number(photo_id[0]))

                compatible_attachments.push({'type': 'photo', 'photo': photo_obj})
            }
        })

        return window.templates.attachments(compatible_attachments, {'no_viewers': 1})
    }
}
