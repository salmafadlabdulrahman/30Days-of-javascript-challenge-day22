let divContainer = document.querySelector(".container");

//New
let numbersContainer = document.querySelector(".numbers-container");
let numbersWrapper = document.querySelector(".numbers-wrapper");

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


//New
let cards;
for (let i = 0; i < 102; i++) {
  cards = document.createElement("div");
  cards.textContent = i;
  cards.classList.add("cards-styling");
  divContainer.appendChild(cards);
  numbersWrapper.appendChild(cards);

  if (isPrime(cards.textContent)) {
    //cards.style.backgroundColor = "#F27457";
    cards.style.backgroundColor = "#3D5B81";
  } else if (cards.textContent % 2 === 0) {
    //cards.style.backgroundColor = "#3B8C66";
    cards.style.backgroundColor = "#9BC0D9";
  } else {
    //cards.style.backgroundColor = "#FFEC5C";
    cards.style.backgroundColor = "#EE6B4D";
  }
}
