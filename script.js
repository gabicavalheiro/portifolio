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

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const panels = document.querySelectorAll(".carousel-panel");
    let currentPanelIndex = 0;
  
    prevButton.addEventListener("click", function() {
      showPanel(currentPanelIndex - 1);
    });
  
    nextButton.addEventListener("click", function() {
      showPanel(currentPanelIndex + 1);
    });
  
    function showPanel(index) {
      panels[currentPanelIndex].classList.remove("active");
      currentPanelIndex = (index + panels.length) % panels.length;
      panels[currentPanelIndex].classList.add("active");
    }
  });
  