import { countries } from "./data.js";
import { CountryCard } from "./components/CountryCard.js";

console.log("✅ main.js está rodando (dados locais)");

const container = document.getElementById("flags-cards");
const searchInput = document.getElementById("search");

renderCountries(countries);

function renderCountries(list) {
    container.innerHTML = list.map(CountryCard).join("");
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(value)
    );

    renderCountries(filtered);
});


