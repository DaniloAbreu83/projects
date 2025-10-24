// main.js
import { countries } from "./data.js";
import { CountryCard } from "./components/CountryCard.js";

// Seleciona o div onde os cards serão colocados
const div = document.querySelector("#flags-cards");

// Gera todos os cards com base nos dados
const allCards = countries.map(country => CountryCard(country));

// Junta tudo e coloca dentro da div
div.innerHTML = allCards.join("");

// Exemplo: adicionando um novo país dinamicamente
const newCountry = {
    code: "IT",
    name: "Itália",
    flag: "https://flagcdn.com/w320/it.png",
    continent: "Europa"
};

// Adiciona o novo card no início da página
div.insertAdjacentHTML("afterbegin", CountryCard(newCountry));
