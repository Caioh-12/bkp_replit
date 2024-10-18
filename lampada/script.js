//identificar os elentos dom (arvore HTML)
const btnTrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseUrl = "https://62985d3a-4b71-4b12-b124-bb6e0d8b3a95-00-3q4au5a8unn7n.riker.replit.dev/"

btnTrocar.addEventListener('click', function() {
  if (lampada.src == baseUrl + "lampada0.png") {
    lampada.src = "lampada2.png"
  } else {
    lampada.src = "lampada0.png"
  }
})




