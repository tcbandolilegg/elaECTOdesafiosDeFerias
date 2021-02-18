// <!--
//   1- Crie um site que exiba um carrossel de imagens baseado em um vetor com a URL das mesmas.
//   O carrossel deve mudar automaticamente a cada 2 segundos.



//   2- Adicione dois botões para controle manual do carrossel: avançar e retroceder

//   3- Faça com que os botões de controle do carrossel também parem o funcionamento automático dele.
// -->
// // 



// const colors = require('./scr/modal/colors.json');
// const fs = require('fs');


totColors = colors.length

min = 0
max = totColors - 1


const randomSelectColor = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

selectColor = randomSelectColor(min, max)



const backGroundTextColor = (min, max) => {

  newBackGroundText = randomSelectColor(min, max)

}

backGroundTextColor(min, max)



// selectColor = color[//randomico do color.length].hexaColor

const createContainner = (containner) => {

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


  divColor.style.backgroundColor = `${colors[selectColor].nameColor}`;
  divColor.classList.add('color-frame')
  divColor.style.height = "400px"
  divColor.style.width = "400px"
  divColor.style.border = "solid 5px black"
  divColor.style.textAlign = "center"
  divContainer.style.alignItems = "center"
  divContainer.style.justifyContent = "center"

  // backGroundTextColor(min, max)

  const colorName = document.createElement(`h1`)
  colorName.classList.add("textColorName")
  colorName.innerHTML = `${colors[selectColor].nameColor}`
  colorName.style.fontSize = "25px"
  colorName.style.background = "antiquewhite"
  // colorName.style.background = `${colors[newBackGroundText].hexaColor}`

  const colorHexa = document.createElement(`h1`)
  colorHexa.classList.add("hexaColorName")
  colorHexa.innerHTML = `${colors[selectColor].hexaColor}`
  colorHexa.style.fontSize = "20px"
  colorHexa.style.background = "antiquewhite"
  // colorHexa.style.background = `${colors[newBackGroundText].hexaColor}`

  const divButtons = document.createElement("div")
  divButtons.classList.add('divButtons');
  divButtons.style.justifyContent = "space-around"
  divButtons.style.display = "flex"
  divButtons.style.marginTop = "50px"

  const advanceButton = document.createElement("button")
  advanceButton.classList.add('advanceButton');
  advanceButton.style.backgroundColor = "#ffffff"
  advanceButton.style.color = "#000000"
  advanceButton.style.height = "50px"
  advanceButton.style.width = "150px"
  advanceButton.style.fontSize = "20px"
  advanceButton.style.border = "solid 5px black"
  advanceButton.innerText = "Próxima Cor"

  const backButton = document.createElement("button")
  backButton.classList.add('backButton');
  backButton.style.backgroundColor = "#ffffff"
  advanceButton.style.color = "#000000"
  backButton.style.height = "50px"
  backButton.style.width = "150px"
  backButton.style.fontSize = "20px"
  backButton.style.border = "solid 5px black"
  backButton.innerHTML = "Cor anterior"

  divColor.appendChild(colorName)
  divColor.appendChild(colorHexa)

  divButtons.appendChild(backButton)
  divButtons.appendChild(advanceButton)

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
    cursorPointer = event.target.classList;
    //COMO MUDAR O PONTEIRO DO MOUE?
    changePointer(cursorPointer)
  })
}

const changePointer = (cursorPointer) => {
  if (cursorPointer == "advanceButton") {
    const mouseCursor = document.querySelector(".advanceButton")
    mouseCursor.style.cursor = "pointer"
  } else {
    const mouseCursor = document.querySelector(".backButton")
    mouseCursor.style.cursor = "pointer"
  }
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
      alert("Primeira cor")
    }
    divChange.style.backgroundColor = `${colors[selectColor].hexaColor}`
    nameChange.innerHTML = `${colors[selectColor].nameColor}`
    hexaChange.innerHTML = `${colors[selectColor].hexaColor}`
  }
}
