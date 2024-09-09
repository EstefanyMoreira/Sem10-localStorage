document.addEventListener('DOMContentLoaded', function(){

    var btn = document.getElementById('buttonText');
    var contenido = document.getElementById('inputText');

    btn.addEventListener('click', function(){
localStorage.setItem("contenido", contenido.value);
    });
});