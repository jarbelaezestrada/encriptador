function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent =
      "Texto encriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/green.png";
  } else {
    muñeco.src = "./img/detective-1424831_1280.png";
    parrafo.textContent = "Ingresa el texto que deseas encriptar "
    alert("debes ingresar algun texto");
  }
}

function desencriptar () {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

      if (texto.length ! = 0) {
        document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent =
      "Texto desencriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/green.png";
  } else {
    muñeco.src = "./img/detective-1424831_1280.png";
    parrafo.textContent = "Ingresa el texto que deseas desencriptar "
    alert("debes ingresar algun texto");
  }

      }




