// <!--
//   1- Crie um site que exiba um carrossel de imagens baseado em um vetor com a URL das mesmas.
//   O carrossel deve mudar automaticamente a cada 2 segundos.



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


const backGroundTextColor = (min, max) => {
  console.log("no novo back", min, max)
  newBackGroundText = randomSelectColor(min, max)
  console.log(newBackGroundText)
}

backGroundTextColor(min, max)



// selectColor = color[//randomico do color.length].hexaColor

const createContainner = (containner) => {
  console.log("Criando o containner")
  const sectionColor = document.querySelector("section")
  sectionColor.style.display = "flex"
  sectionColor.style.alignItems = "center"
  sectionColor.style.alignContent = "center"
  sectionColor.style.justifyContent = "center"

  const divContainer = document.createElement('div');
  divContainer.classList.add('objectColor');
  divContainer.style.marginTop = "100px"
  divContainer.style.height = "600px"
  divContainer.style.whidth = "600px"



  const divColor = document.createElement('div');

  console.log("na div color", selectColor)
  divColor.style.backgroundColor = `${colors[selectColor].nameColor}`;
  divColor.classList.add('color-frame')
  divColor.style.height = "400px"
  divColor.style.width = "400px"
  divColor.style.border = "solid 5px black"
  divColor.style.textAlign = "center"
  divContainer.style.alignItems = "center"
  divContainer.style.justifyContent = "center"


  const colorName = document.createElement(`h1`)
  colorName.classList.add("textColorName")
  colorName.innerHTML = `${colors[selectColor].nameColor}`
  colorName.style.fontSize = "25px"
  colorName.style.background = "antiquewhite"
  // backGroundTextColor(min, max)

  // colorName.style.background = `${colors[newBackGroundText].hexaColor}`

  const colorHexa = document.createElement(`h1`)
  colorHexa.classList.add("hexaColorName")
  colorHexa.innerHTML = `${colors[selectColor].hexaColor}`
  colorHexa.style.fontSize = "20px"
  // colorHexa.style.background = `${colors[newBackGroundText].hexaColor}`
  colorHexa.style.background = "antiquewhite"

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
  divColor.appendChild(colorHexa)

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
    buttonClass2 = event.target.classList;
    // COMO MUDAR O PONTEIRO DO MOUE?
    // buttonClass2.style.cursor = "pointer"
  })
}


const changeColor = (buttonClass) => {
  const divChange = document.querySelector(".color-frame")
  const nameChange = document.querySelector(".textColorName")
  const hexaChange = document.querySelector(".hexaColorName")

  if (buttonClass == "advanceButton") {
    if (selectColor < (totColors - 1)) {
      selectColor++
    } else {
      alert("Ultima cor")
    }

    divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
    nameChange.innerHTML = `${colors[selectColor].nameColor}`
    hexaChange.innerHTML = `${colors[selectColor].hexaColor}`
  } else {
    if (selectColor != 0) {
      selectColor--
    } else {
      alert("Ultima cor")
    }
    divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
    nameChange.innerHTML = `${colors[selectColor].nameColor}`
    hexaChange.innerHTML = `${colors[selectColor].hexaColor}`
  }
}
