// <!--
//   1- Crie um site que exiba um carrossel de imagens baseado em um vetor com a URL das mesmas.
//   O carrossel deve mudar automaticamente a cada 2 segundos.

const { cursorTo } = require("readline")

//   2- Adicione dois botões para controle manual do carrossel: avançar e retroceder

//   3- Faça com que os botões de controle do carrossel também parem o funcionamento automático dele.
// -->
// // 


// alert("CARROCEL DE CORES")
// frase = "Ei você aí, me dá um dinheiro ai"
// const colors = require('./scr/modal/colors.json');
// const fs = require('fs');


totColors = colors.length
console.log(totColors)
min = 0
max = totColors - 1
console.log("1", min, " ", max)

const randomSelectColor = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log("2", min, " ", max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

selectColor = randomSelectColor(min, max)
console.log(selectColor)

movButton = ""
// selectColor = color[//randomico do color.length].hexaColor

const createContainner = (containner) => {
  console.log("Criando o containner")
  const sectionColor = document.querySelector("section")

  const divContainer = document.createElement('div');
  divContainer.classList.add('objectColor');
  divContainer.style.marginTop = "100px"
  divContainer.style.height = "600px"
  divContainer.style.whidth = "600px"

  const divColor = document.createElement('div');
  divColor.style.marginLeft = "200px"
  console.log("na div color", selectColor)
  divColor.style.backgroundColor = `${colors[selectColor].nameColor}`;
  divColor.classList.add('color-frame')
  divColor.style.height = "400px"
  divColor.style.width = "400px"
  divColor.style.display = "flex"
  divColor.style.border = "solid 5px black"
  divColor.style.align = "center"

  const colorName = document.createElement(`h1`)
  colorName.classList.add("textColorName")
  colorName.innerHTML = `${colors[selectColor].nameColor}`
  colorName.style.fontSize = "25px"

  const divButtons = document.createElement("div")
  divButtons.classList.add('divButtons');
  divButtons.style.justifyContent = "center"
  divButtons.style.display = "flex"
  divButtons.style.marginTop = "50px"

  const advanceButton = document.createElement("button")
  advanceButton.classList.add('advanceButton');
  advanceButton.style.backgroundColor = "#000000"
  advanceButton.style.Color = "white"
  advanceButton.style.height = "50px"
  advanceButton.style.width = "150px"
  advanceButton.style.marginRight = "50px"

  const backButton = document.createElement("button")
  backButton.classList.add('backButton');
  backButton.style.backgroundColor = "#000000"
  backButton.style.Color = "red"
  backButton.style.height = "50px"
  backButton.style.width = "150px"
  backButton.innerHTML = "Cor anterior"

  // const backButtonText = document.createElement("p")
  // backButtonText.classList.add('backButtonText');
  // backButtonText.innerHTML = "Cor Anterior"
  // backButtonText.style.fontSize = "15px"
  // backButtonText.style.color = "withe"

  // const advanceButtonText = document.createElement("p")
  // advanceButtonText.classList.add('advanceButtonText');
  // advanceButtonText.innerHTML = "Próxima Cor"
  // advanceButtonText.style.fontSize = "15px"
  // advanceButtonText.style.color = "withe"

  // advanceButton.appendChild(advanceButtonText)
  // backButton.appendChild(backButtonText)


  divColor.appendChild(colorName)
  divButtons.appendChild(advanceButton)
  divButtons.appendChild(backButton)

  divContainer.appendChild(divColor);
  divContainer.appendChild(divButtons);

  sectionColor.appendChild(divContainer);
}

createContainner()

const buttons = document.querySelectorAll("button")
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {
    buttonClass = event.target.classList;
    changeColor(buttonClass)
  })
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', (event) => {
    buttonClass = event.target.classList;
    cursor.pointer
  })
}


const changeColor = (buttonClass) => {
  const divChange = document.querySelector(".color-frame")
  const nameChange = document.querySelector(".textColorName")

  if (buttonClass == "advanceButton") {
    if (selectColor < (totColors - 1)) {
      selectColor++
    } else {
      alert("Ultima cor")
    }

    divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
    nameChange.innerHTML = `${colors[selectColor].nameColor}`
  } else {
    if (selectColor != 0) {
      selectColor--
    } else {
      alert("Ultima cor")
    }
    divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
    nameChange.innerHTML = `${colors[selectColor].nameColor}`
  }
}
