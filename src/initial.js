import foodImage from "./food-pic.jpg";

const initial = () => {

const contentDiv = document.getElementById("content");
contentDiv.replaceChildren();

const header = document.createElement("h1");
header.textContent = "Italiana Ristorante";
contentDiv.appendChild(header);

const contentBot = document.createElement("div");
contentBot.id = "content-bot";
contentDiv.appendChild(contentBot);

const image = document.createElement("img");
image.src = foodImage;
contentBot.appendChild(image);

const contentWords = document.createElement("div");
contentWords.id = "content-words";
contentBot.appendChild(contentWords);

const title = document.createElement("p");
title.textContent = "Let our family serve yours!";
contentWords.appendChild(title);

const list = document.createElement("ul");
list.id = "options";
contentWords.appendChild(list);

const listOne = document.createElement("li");
listOne.textContent = "Fine dining with recipes passed down through generations";
list.appendChild(listOne);

const listTwo = document.createElement("li");
listTwo.textContent = "Book a private room for an event";
list.appendChild(listTwo);

const listThree = document.createElement("li");
listThree.textContent = "Wine tasting parties";
list.appendChild(listThree);

const listFour = document.createElement("li");
listFour.textContent = "Stroll through our beautiful fields and gardens";
list.appendChild(listFour);

}

export {initial};