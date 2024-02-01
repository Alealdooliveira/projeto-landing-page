var Setaesquerda =window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var Setadireita =window.document.getElementById("setadireita")

function Rolarparadireita () {
  
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Setadireita.style= "display:none"
    Setaesquerda.style = "display: flex; margin-top:55px"
}

function Rolarparaesquerda(){
    Bruna.style= "display:none"
    Leonardo.style= "display:flex"
    Setaesquerda.style= "diplay:none"
    Setadireita.style= "display:flex; margin-top:55px"
}