/*
EJERICICIO

Escribir un programa en JS para imprimir el
área de dos rectángulos que tenga lados (4,5) y (5,8) respectivamente creando
una clase llamada 'CRectángulo' con una función llamada 'CalclarArea' que
devuelve el área. La longitud y la altura se pasan como parámetros a su constructor.
*/

class CRectangulo {
    #l1;
    #l2;

    constructor (a, b) {
        this.#l1 = a;
        this.#l2 = b;
    }   

    CalclarArea = function () {
        return this.#l1 * this.#l2;
    }
}


window.onload = () => {
    const obj = new CRectangulo (2, 3); 
    console.log(obj.CalclarArea())

    document.getElementsByTagName('body')[0].innerHTML = obj.CalclarArea();
}