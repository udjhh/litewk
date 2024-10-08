u(document).on('click', '.photo_viewer_open', (e) => {
    e.preventDefault()
    
    if(u('.messagebox').length > 0) {
        return
    }

    const msg = new MessageBox(!e.target.dataset.type ? _('photos.photo') : _(`photos.${e.target.dataset.type}`), '', null, null, {'as_window': 1, 'no_title': 1})
    msg.getNode().querySelector('.messagebox_body').insertAdjacentHTML('beforeend', `
        <div class='photo_viewer'>
            <img src='${e.target.dataset.full}'>
        </div>
    `)
})
