// Your code goes here!
import {modulo, percentage, percentageOf,difference} from './percentage.js'
import {calculateAspectRatio} from './aspect-ratio.js'



document.addEventListener("keyup", calculateMe)

function calculateMe(){
    var modulo1 = document.querySelector("#modulo_1").value
        modulo1 = parseInt(modulo1)
    var modulo2 = document.querySelector("#modulo_2").value
        modulo2 = parseInt(modulo2)

    var moduloResult = modulo(modulo1,modulo2)
    document.querySelector("#modulo_result").value = moduloResult
}

