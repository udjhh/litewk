class Note extends Hasable 
{
    getTitle() 
    {
        return this.info.title.escapeHtml()
    }

    getText()
    {
        return this.info.text
    }
    
    getDate()
    {
        return Utils.short_date(this.info.date)
    }

    getCommentsCount()
    {
        return this.info.comments
    }

    canComment()
    {
        return this.info.can_comment
    }

    getTemplate()
    {
        return window.templates.note(this)
    }

    getURL()
    {
        return '#note' + this.info.owner_id + '_' + this.info.id
    }
}
