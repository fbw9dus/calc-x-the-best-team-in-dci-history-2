import {calculateAspectRatio} from './aspect-ratio.js'
import {modulo,percentage,percentageOf,difference} from  './percentage.js'

document.addEventListener("keyup" , CalculateMePlease)

function  CalculateMePlease(){
          
     //1 
           var  FirstModulo = document.querySelector("#modulo_1").value
           FirstModulo = parseInt(FirstModulo)
           var SecondModulo = document.querySelector("#modulo_2").value
           SecondModulo = parseInt(SecondModulo)
           var ResModulo = modulo(FirstModulo,SecondModulo)
           document.querySelector("#modulo_result").value = ResModulo


           var FirstPercentage = document.querySelector("#percentage_1").value
           FirstPercentage = parseInt(FirstPercentage)
           var SecondPercentage = document.querySelector("#percentage_2").value
           SecondPercentage = parseInt(SecondPercentage)
           var ResPercentage = percentage(FirstPercentage,SecondPercentage)
           document.querySelector("#percentage_result").value = ResPercentage


           var FirstPerOf = document.querySelector("#percentageOf_1").value
           FirstPerOf = parseInt(FirstPerOf)
           var SecondPerOf = document.querySelector("#percentageOf_2").value
           SecondPerOf = parseInt(SecondPerOf)
           var ResPerOf = percentageOf(FirstPerOf,SecondPerOf)
           document.querySelector("#percentageOf_result").value = ResPerOf

           var FirstDiff = document.querySelector("#difference_1").value
           FirstDiff = parseInt(FirstDiff)
           var SecondDiff = document.querySelector("#difference_2").value
           SecondDiff = parseInt(SecondDiff)
           var ResDiff = difference(FirstDiff,SecondDiff)
           document.querySelector("#difference_result").value = ResDiff

           
           //2
           
                 
           var originalWidth = document.querySelector('#ratio_1');
           var originalHeight = document.querySelector('#ratio_2');
           var ratioResultWidth = document.querySelector('#ratio_result-width');
           var ratioResultHeight = document.querySelector('#ratio_result-height');
            var newValues =[ratioResultWidth,ratioResultHeight]
            ratioResultWidth.addEventListener("keyup",function(){
               calculateAspectRatio(originalWidth.value,originalHeight.value,newValues)
            ratioResultWidth.value = newValues[0].value;
            ratioResultHeight.value = newValues[1].value;
            })       

      }
