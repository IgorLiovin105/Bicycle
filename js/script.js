const menuBody = document.querySelector('.menu__body'),
      menuIcon = document.querySelector('.menu__icon')

if(menuIcon) {
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        document.body.classList.toggle('_lock')
    })
}