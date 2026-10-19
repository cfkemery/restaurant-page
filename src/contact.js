const contact = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    const header = document.createElement("h1");
    header.textContent = "Italiana Ristorante";
    contentDiv.appendChild(header);

    const contentBot = document.createElement("div");
    contentBot.id = "content-bot";
    contentDiv.appendChild(contentBot);

    const contentWords = document.createElement("div");
    contentWords.id = "content-words";
    contentBot.appendChild(contentWords);

    const title = document.createElement("p");
    title.textContent = "Business hours from 7am - 9pm Monday through Saturday";
    contentWords.appendChild(title);

    const list = document.createElement("ul");
    list.id = "options";
    contentWords.appendChild(list);

    const listOne = document.createElement("li");
    listOne.textContent = "Phone number: 123-456-7890";
    list.appendChild(listOne);

    const listTwo = document.createElement("li");
    listTwo.textContent = "E-mail: ourrestaurantisyummy@delicious.com";
    list.appendChild(listTwo);

    const listThree = document.createElement("li");
    listThree.textContent = "E-mail us for specific catering needs and we will reach out with our options.";
    list.appendChild(listThree);
}

export {contact};