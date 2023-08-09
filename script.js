const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

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

  document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.getElementById("typing-animation");
    const text = "Front-end student";
    const fontSize = "30px"; 
    let index = 0;
  
    typingElement.style.fontSize = fontSize; 
  
    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      } else {
        reset();
      }
    }
  
    function reset() {
      setTimeout(function() {
        typingElement.textContent = "";
        index = 0;
        type();
      }, 2000);
    }
  
    type();
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contatoFormulario");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Envie o formulário usando XMLHttpRequest ou Fetch, se desejar
        // ...

        // Redirecione o usuário após o envio bem-sucedido
        window.location.href = "icavalheiro.github.io/portifolio/";
    });
});

  //TWS9zD_av28wKr2Yy
//service_f45d2f2
//template_wuueft5
  