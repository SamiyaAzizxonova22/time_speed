let h2 = document.querySelector('#h2')
let input = document.querySelector('#input')
const scoreEl = document.querySelector('#score')
input.focus()

// global
let randomWord

let score = 0


function generateRandomWord() {
  const randomNumber = Math.trunc(Math.random() * words.length)
  randomWord = words[randomNumber]
  h2.textContent = (words[randomNumber])
}
generateRandomWord()

input.addEventListener('input', ()=> {
  if(randomWord == input.value){
    console.log('other')
    generateRandomWord()
    score++
    scoreEl.innerHTML = `Score : ${score}`
    input.value = ''


  }

})
