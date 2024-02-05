function display() {
  document.getElementById("no-text").style.display = "none";
  document.getElementById("cripted").style.visibility = "visible";
  const textoOriginal = document.getElementById("text-area").value;
  let textoCript = criptografarTexto(textoOriginal);
  document.getElementById("text-result").textContent = String(textoCript);
}

function criptografarTexto(texto) {
  let encript = "";

  for (let c of texto) {
    switch (c) {
      case "a":
        encript += "ai";
        break;
      case "e":
        encript += "enter";
        break;
      case "i":
        encript += "imes";
        break;
      case "o":
        encript += "ober";
        break;
      case "u":
        encript += "ufat";
        break;
      default:
        encript += c;
    }
  }
  return encript;
}

function decript() {
  document.getElementById("no-text").style.display = "none";
  document.getElementById("cripted").style.visibility = "visible";
  const textoOriginal = document.getElementById("text-area").value;
  let encriptText = String(textoOriginal);
  let descriptText = encriptText
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  document.getElementById("text-result").textContent = String(descriptText);
}
