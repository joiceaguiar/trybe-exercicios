 // Exercício 1
function changeText () {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerText = "Feliz com meu trabalho, recebendo alto salário e viajando bastante!";
}
changeText();

 // Exercício 2
function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();

 // Exercício 3
function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();

 // Exercício 4
function correctTitle() {
  let incorretText = document.getElementsByTagName('h1')[0];
  incorretText.innerText = "Exercício 5.1 - JavaScript";
}
correctTitle();

 // Exercício 5
function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerText = paragraph.innerText.toUpperCase();
}
paragraphUpperCase();

 // Exercício 6
function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerText);
  }
}
showParagraphs();
