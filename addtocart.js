let carts = document.getElementsByClassName("addToCardBtn");

const containerEle = document.getElementById("cardContainer");

containerEle.addEventListener("click", (event) => {
  const targetElement = event.target.id;
  const [action, card] = targetElement.split("_");
  let cards = JSON.parse(localStorage.getItem("productsInCart"));
  const currentCard = cards?.[card];

  const currentProduct = Data.find((el) => el.name === card);
  const buttonEle = document.getElementById(`button-${card}`);
  const currentCardCartValue = currentCard?.inCart || 0;
  let totalCartValue = +localStorage.getItem("totalCartValue") || 0;

  if (action === "remove" && currentCardCartValue > 0) {
    cards = {
      ...cards,
      [card]: {
        ...currentProduct,
        inCart: currentCardCartValue - 1,
      },
    };

    totalCartValue = totalCartValue - 1;

    buttonEle.textContent = currentCardCartValue - 1;
  } else if (action === "add") {
    cards = {
      ...cards,
      [card]: {
        ...currentProduct,
        inCart: currentCardCartValue + 1,
      },
    };
    totalCartValue = totalCartValue + 1;
    buttonEle.textContent = currentCardCartValue + 1;
  }

  document.querySelector(".cart span").textContent = totalCartValue;

  localStorage.setItem("productsInCart", JSON.stringify(cards));
  localStorage.setItem("totalCartValue", totalCartValue);
});



 function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('totalCartValue');
        if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
        }
    }
    onLoadCartNumbers();
