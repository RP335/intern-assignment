const Data = [
    {
        "id": 1,
        "name": "food card",
        "description": "This card is used for spending on Food merchants",
        "final_price": 21,
        "original_price": 10,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"
    },
    {
        "id": 2,
        "name": "travel card",
        "description": "This card is used for spending on Travel and hotel bookings",
        "final_price": 20,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png"
    },
    {
        "id": 3,
        "name": "epic card",
        "description": "Use this card and get benefits on every transaction",
        "final_price": 30,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png"
    },
    {
        "id": 4,
        "name": "happay premium card",
        "description": "Use this card and get benefits on every transaction",
        "final_price": 40,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png"
    }
];

(
    function() {
        var id = 0;
        for(let item of Data){
            const cardContainer = document.getElementById('cardContainer');
            const itemContainer = document.createElement('div');
            itemContainer.classList.add("itemContainer");
    
            const imgtag = document.createElement('img');
            imgtag.src = item?.img_url;
            imgtag.style.width='100%';
            itemContainer.appendChild(imgtag);
    
            const cardDetails = document.createElement('div');
            cardDetails.classList.add("cardDetails");
    
            const cardName = document.createElement('div');
            cardName.textContent = item?.name;
            cardDetails.appendChild(cardName);
    
            const cardAmt = document.createElement('div');
            cardAmt.textContent = `$${item?.final_price}`;
            cardDetails.appendChild(cardAmt);
    
            itemContainer.appendChild(cardDetails);
    
            const cardDesc = document.createElement('p');
            cardDesc.textContent = item?.description;
            itemContainer.appendChild(cardDesc);
    
            const valueInCart = JSON.parse(localStorage.getItem("productsInCart"))?.[item?.name]?.inCart;

            const buttonContainer  = document.createElement("div");
            const addElement = document.createElement("button");
            const removeElement = document.createElement("button");
            const addToCardBtn = document.createElement("div");
            addElement.setAttribute("id", `add_${item?.name}`);
            removeElement.setAttribute("id", `remove_${item?.name}`);
            addToCardBtn.setAttribute("id", `button-${item?.name}`);
            addToCardBtn.classList.add("addToCardBtn");
            addToCardBtn.textContent = valueInCart || "Add To Cart";

            addElement.textContent = "+";
            removeElement.textContent = "-";
            buttonContainer.setAttribute("class","button-container");
            removeElement.setAttribute("class","border-r");
            addElement.setAttribute("class","border-l");
            buttonContainer.appendChild(removeElement);
            buttonContainer.appendChild(addToCardBtn);
            buttonContainer.appendChild(addElement);


            itemContainer.appendChild(buttonContainer);

            cardContainer.appendChild(itemContainer);
    
        }
    }
    

    )();
    