function toggleMode(){
    const html = document.documentElement
    
    //toggle é um método dessa coleção que adiciona a classe especificada se ela não estiver presente, ou a remove se ela já estiver presente
    html.classList.toggle('light')

    //pega a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if(html.classList.contains('light')){
        // em light mode adiciona a img light
        //modifica atributo
        img.setAttribute('src', './assets/assets/avatar-light.png')
    } else{
        //sem light mode mantém a img
        img.setAttribute('src', './assets/assets/avatar.png')

    }
}