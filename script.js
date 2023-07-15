//JIMENA MONSERRAT SOBERANIS ACOSTA
//ejercicio 1
document.getElementById("verificacion").addEventListener("click", function(){
    var edad = document.getElementById("edad").value;

    if(Number(edad) == edad) {
        if(edad >= 18) {
            document.getElementById("resultado").textContent = "¡Ya puedes conducir!";
        }
        else{
            document.getElementById("resultado").textContent = "¡Aún no puedes conducir!";
        }
    }
    else{
        alert("Introduce un número válido");
    }
});

//ejercicio 2

document.getElementById("verificacionNota").addEventListener("click", function() {
    var grade = document.getElementById("grade").value;

    grade = parseFloat(grade);

    if(Number(grade)==grade) {
        if(grade>-1 && grade<=10) {
            if(grade >= 0 && grade <=3) {
                document.getElementById("resultadoNota").textContent = "Muy insuficiente";
            }
            else if (grade>3&&grade<=5){
                document.getElementById("resultadoNota").textContent = "Insuficiente";
            }
            else if(grade>5&&grade<=6){
                document.getElementById("resultadoNota").textContent = "Suficiente";
            }
            else if(grade>6&&grade<=7){
                document.getElementById("resultadoNota").textContent = "Bien";
            }
            else if(grade>7&&grade<=9){
                document.getElementById("resultadoNota").textContent = "Notable";
            }
            else if(grade>9&&grade<=10){
                document.getElementById("resultadoNota").textContent = "Sobresaliente";
            }
        }
        else{
            alert("Introduce una calificación entre el 1 al 10");
        }
    }
    else {
        alert("Introduce una calificación válida");
    }
    
});

//ejercicio 3

var cadenas = [];

document.getElementById("concatenar").addEventListener("click", function(){
    var texto = document.getElementById("texto").value;

    if (texto !=="") {
        cadenas.push(texto);
        document.getElementById("texto").value="";
    }

    mostrarCadenas();
});

document.getElementById("cancelar").addEventListener("click", function(){
    mostrarResultado();
});

function mostrarCadenas() {
    var resultado = cadenas.join(" - ");
    document.getElementById("resultadoConcatenacion").textContent = resultado;
}

function mostrarResultado() {
    mostrarCadenas();

    document.getElementById("concatenar").disabled = true;
    document.getElementById("cancelar").disabled = true;
    document.getElementById("texto").disabled = true;
}

//ejercicio 4

document.getElementById("enviarLetra").addEventListener("click", function() {
    var numero = document.getElementById("numero").value;
  
    if (numero !== "" && !isNaN(numero)) {
      var letra = calcularLetraDNI(numero);
      document.getElementById("resultadoLetra").textContent = "Letra del DNI: " + letra;
    } else {
      alert("Ingrese un número válido.");
    }
  });
  
  document.getElementById("cancelarLetra").addEventListener("click", function() {
    document.getElementById("resultadoLetra").textContent = "";
    document.getElementById("numero").value = "";
  });
  
  function calcularLetraDNI(numero) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var resto = numero % 23;
    return letras.charAt(resto);
  }
  