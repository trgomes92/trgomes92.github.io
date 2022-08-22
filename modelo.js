var msg = document.getElementById("msg");
var img = document.getElementById("imagem");
var fundo = document.getElementById("bg");
var data = new Date();
var h = data.getHours();
var m = data.getMinutes();
var s = data.getSeconds();

var hora = `${h}:${m}:${s}`;
msg.innerHTML = `${hora}`;


if (h >= 6 && h < 12) {
  img.id = "manha";
  fundo.id = "bg-manha";
  mensagem.innerHTML = `Bom dia`;
} else if (h >= 12 && h < 16) {
  img.id = "dia";
  fundo.id = "bg-dia";
  mensagem.innerHTML = `Boa tarde`;
} else if (h >= 16 && h < 18) {
  img.id = "tarde";
  fundo.id = "bg-tarde";
  mensagem.innerHTML = `Por do Sol`;
} else if (h >= 18 || h < 24) {
  img.id = "noite";
  fundo.id = "bg-noite";
  mensagem.innerHTML = `Boa Noite`;
} else {
  img.id = "noite";
  fundo.id = "bg-noite";
  mensagem.innerHTML = `Boa Madrugada`;
}
