var pantalla = document.getElementById('display')
var primerValor = 0
var segundoValor = 0
var valorFinal = 0
var resultado = 0
var operacion = ""
var teclaIgual = false
var teclaOperacion = false

var Calculadora = {

  inicializar : function(){
    var cero = document.getElementById('0')
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
    var on = document.getElementById('on')
    var signos = document.getElementById('sign')
    var raiz = document.getElementById('raiz')
    var divi = document.getElementById('dividido')
    var multi = document.getElementById('por')
    var resta = document.getElementById('menos')
    var suma = document.getElementById('mas')
    var punto = document.getElementById('punto')
    var igual = document.getElementById('igual')
    alert("hola")

    cero.addEventListener("click",function() {
      if (pantalla.textContent == 0) {

      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=0
        }
      }
    })
    cero.addEventListener("mousedown", function() {
      cero.style.transform = "scale(0.95,0.95)"
    });
    cero.addEventListener("mouseout", function() {
      cero.style.transform = "scale(1,1)"
    });

    uno.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=1
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=1
        }
      }
    });
    uno.addEventListener("mousedown", function() {
      uno.style.transform = "scale(0.95,0.95)"
    });
    uno.addEventListener("mouseout", function() {
      uno.style.transform = "scale(1,1)"
    });

    dos.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=2
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=2
        }
      }
    });
    dos.addEventListener("mousedown", function() {
      dos.style.transform = "scale(0.95,0.95)"
    });
    dos.addEventListener("mouseout", function() {
      dos.style.transform = "scale(1,1)"
    });

    tres.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=3
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=3
        }
      }
    });
    tres.addEventListener("mousedown", function() {
      tres.style.transform = "scale(0.95,0.95)"
    });
    tres.addEventListener("mouseout", function() {
      tres.style.transform = "scale(1,1)"
    });

    cuatro.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=4
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=4
        }
      }
    });
    cuatro.addEventListener("mousedown", function() {
      cuatro.style.transform = "scale(0.95,0.95)"
    });
    cuatro.addEventListener("mouseout", function() {
      cuatro.style.transform = "scale(1,1)"
    });

    cinco.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=5
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=5
        }
      }
    });
    cinco.addEventListener("mousedown", function() {
      cinco.style.transform = "scale(0.95,0.95)"
    });
    cinco.addEventListener("mouseout", function() {
      cinco.style.transform = "scale(1,1)"
    });

    seis.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=6
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=6
        }
      }
    });
    seis.addEventListener("mousedown", function() {
      seis.style.transform = "scale(0.95,0.95)"
    });
    seis.addEventListener("mouseout", function() {
      seis.style.transform = "scale(1,1)"
    });

    siete.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=7
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=7
        }
      }
    })
    siete.addEventListener("mousedown", function() {
      siete.style.transform = "scale(0.95,0.95)"
    });
    siete.addEventListener("mouseout", function() {
      siete.style.transform = "scale(1,1)"
    });

    ocho.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=8
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=8
        }
      }
    })
    ocho.addEventListener("mousedown", function() {
      ocho.style.transform = "scale(0.95,0.95)"
    });
    ocho.addEventListener("mouseout", function() {
      ocho.style.transform = "scale(1,1)"
    });

    nueve.addEventListener("click",function() {
      if (pantalla.textContent == "0") {
        pantalla.textContent=9
      }else {
        if (pantalla.textContent.length < 8) {
          pantalla.textContent+=9
        }
      }
    })
    nueve.addEventListener("mousedown", function() {
      nueve.style.transform = "scale(0.95,0.95)"
    });
    nueve.addEventListener("mouseout", function() {
      nueve.style.transform = "scale(1,1)"
    });

    on.addEventListener("click",function() {
      pantalla.textContent=0
      primerValor = 0
      segundoValor = 0
      valorFinal = 0
      resultado = 0
      operacion = ""
      teclaIgual = false
      teclaOperacion = false

    })
    on.addEventListener("mousedown", function() {
      on.style.transform = "scale(0.95,0.95)"
    });
    on.addEventListener("mouseout", function() {
      on.style.transform = "scale(1,1)"
    });

    punto.addEventListener("click",function() {

      if (pantalla.textContent.length < 8) {
        var n = pantalla.textContent.indexOf(".")
        if (n < 1) {
          pantalla.textContent+="."
        }else {
        }
      }
    })
    punto.addEventListener("mousedown", function() {
      punto.style.transform = "scale(0.95,0.95)"
    });
    punto.addEventListener("mouseout", function() {
      punto.style.transform = "scale(1,1)"
    });

    signos.addEventListener("click",function() {
      var negativo = parseFloat(pantalla.textContent)
      pantalla.textContent = 0
      negativo = negativo - (negativo * 2)
      pantalla.textContent = negativo

      console.log(negativo);
    })

    signos.addEventListener("mousedown", function() {
      signos.style.transform = "scale(0.95,0.95)"
    });
    signos.addEventListener("mouseout", function() {
      signos.style.transform = "scale(1,1)"
    });

    raiz.addEventListener("mousedown", function() {
      raiz.style.transform = "scale(0.95,0.95)"
    });
    raiz.addEventListener("mouseout", function() {
      raiz.style.transform = "scale(1,1)"
    });

    divi.addEventListener("click",function() {
      Calculadora.Operacion("%")
    })

    divi.addEventListener("mousedown", function() {
      divi.style.transform = "scale(0.95,0.95)"
    });
    divi.addEventListener("mouseout", function() {
      divi.style.transform = "scale(1,1)"
    });

    multi.addEventListener("click",function() {
      Calculadora.Operacion("*")
    })

    multi.addEventListener("mousedown", function() {
      multi.style.transform = "scale(0.95,0.95)"
    });
    multi.addEventListener("mouseout", function() {
      multi.style.transform = "scale(1,1)"
    });

    resta.addEventListener("click",function() {
      Calculadora.Operacion("-")
    })

    resta.addEventListener("mousedown", function() {
      resta.style.transform = "scale(0.95,0.95)"
    });
    resta.addEventListener("mouseout", function() {
      resta.style.transform = "scale(1,1)"
    });

    suma.addEventListener("click",function() {
      Calculadora.Operacion("+")
    })

    suma.addEventListener("mousedown", function() {
      suma.style.transform = "scale(0.95,0.95)"
    });
    suma.addEventListener("mouseout", function() {
      suma.style.transform = "scale(1,1)"
    });

    igual.addEventListener("click",function() {
      Calculadora.Resultado()
    })

    igual.addEventListener("mousedown", function() {
      igual.style.transform = "scale(0.95,0.95)"
    });
    igual.addEventListener("mouseout", function() {
      igual.style.transform = "scale(1,1)"
    });

  },

  Operacion: function(oper){
    if (operacion == "") {
      primerValor = parseFloat(pantalla.textContent);
      pantalla.textContent = "";
      console.log(primerValor);
    }else {
      segundoValor = parseFloat(pantalla.textContent);
      teclaOperacion = true;
      console.log(segundoValor);
      Calculadora.Resultado()
    }
    operacion = oper;
    teclaIgual = false;
  },

  Resultado: function(){
    if (!teclaIgual) {
      segundoValor = parseFloat(pantalla.textContent);
      valorFinal = segundoValor;
      Calculadora.realizarOper(primerValor,segundoValor,operacion);
    }else {
      Calculadora.realizarOper(primerValor,valorFinal,operacion);
    }

    primerValor = resultado;
    pantalla.textContent = "";

    if (resultado.toString().length < 9){
			pantalla.textContent = resultado.toString();
		} else {
			pantalla.textContent = resultado.toString().slice(0,8) + "...";
		}
    teclaIgual = true;

  },

  realizarOper: function(primerValor,segundoValor,operacion){
    switch (operacion) {
      case "%":
        resultado = primerValor / segundoValor;
        pantalla.textContent = resultado;
        console.log(resultado);
      break;
      case "*":
        resultado = primerValor * segundoValor;
        pantalla.textContent = resultado;
        console.log(resultado);
      break;
      case "-":
        resultado = primerValor - segundoValor;
        pantalla.textContent = resultado;
        console.log(resultado);
      break;
      case "+":
        resultado = primerValor + segundoValor;
        pantalla.textContent = resultado;
        console.log(resultado);
      break;
      default:

    }
  }
  }


Calculadora.inicializar();
