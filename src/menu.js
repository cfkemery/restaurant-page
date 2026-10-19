import menuImage from "./menu.jpg";

const menu = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    const header = document.createElement("h1");
    header.textContent = "Italiana Ristorante";
    contentDiv.appendChild(header);

    const contentBot = document.createElement("div");
    contentBot.id = "content-bot";
    contentDiv.appendChild(contentBot);

    const image = document.createElement("img");
    image.src = menuImage;
    contentBot.appendChild(image);

    const contentWords = document.createElement("div");
    contentWords.id = "content-words";
    contentBot.appendChild(contentWords);

    const title = document.createElement("p");
    title.textContent = "Authentic Italian Cuisine";
    contentWords.appendChild(title);

    const list = document.createElement("ul");
    list.id = "options";
    contentWords.appendChild(list);

    const listOne = document.createElement("li");
    listOne.textContent = "Ask about our daily specials";
    list.appendChild(listOne);

    const listTwo = document.createElement("li");
    listTwo.textContent = "Special alternatives are available for allergies, gluten-free, or vegetarian needs";
    list.appendChild(listTwo);

    const listThree = document.createElement("li");
    listThree.textContent = "All pastas and sauces are made in house";
    list.appendChild(listThree);

    const listFour = document.createElement("li");
    listFour.textContent = "Contact us for catering options";
    list.appendChild(listFour);
}

export {menu};