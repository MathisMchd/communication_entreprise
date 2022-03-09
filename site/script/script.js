
var slide = new Array("slide_01.jpg", "slide_02.jpg", "slide_03.jpg", "slide_04.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;

    console.log("pictures/" + slide[numero])
    document.getElementById("slide").src = "pictures/" + slide[numero];
}