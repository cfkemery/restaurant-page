import {initial} from "./initial.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";
import "./styles.css";

initial();

const menuButton = document.getElementById("menu");
menuButton.addEventListener('click', menu);

const homeButton = document.getElementById("home");
homeButton.addEventListener('click', initial);

const contactButton = document.getElementById("contact");
contactButton.addEventListener('click', contact);