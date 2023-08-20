function toggleMode() {
    const html = document.documentElement
    
    //pegar imagem
    const img = document.querySelector('#profile img')
    
    if (html.classList.contains('light')) {
        html.classList.remove('light')
        img.setAttribute('src', './assets/avatar-desktop.png')
        img.setAttribute('alt','Testo da foto trocada')
    } else {
        html.classList.add('light')
        img.setAttribute('src', './assets/avatar-desktop.png')
        img.setAttribute('alt','Testo da foto trocada2')
    }
    
    // html.classList.toggle('light')

}