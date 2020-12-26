
function Generar() {
    let caracteres = "0123456789ABCDEF";
    let color = '#';

    for (i = 0; i < 6; i++) {

        color += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        //console.log(color);

    }

    let conte = document.getElementById('contenedor');
    conte.style.backgroundColor = color;

    let codigo = document.getElementById('codeHex');

    codigo.innerHTML = (color);  // 'Code: ' + color

    // Libreria clipboardjs.com
    var clipboard = new ClipboardJS('#btn');

    clipboard.on('success', function (e) {
        console.log(e);
    });

    clipboard.on('error', function (e) {
        console.log(e);
    });


}





