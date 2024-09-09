document.addEventListener('DOMContentLoaded', function() {
    var datos = document.getElementById('data');
    var contenido = localStorage.getItem('contenido');
    
    if (contenido) {
        datos.textContent = contenido;
    } else {
        datos.textContent = 'No hay datos almacenados.';
    }
});