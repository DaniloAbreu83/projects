import { CountryCard } from "./components/CountryCard.js";

console.log("✅ main.js está rodando");

const container = document.getElementById("flags-cards");
const searchInput = document.getElementById("search");

let countries = [];

async function fetchCountries() {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=cca2,name,flags,region"
        );

        if (!response.ok) {
            throw new Error("Erro ao buscar países");
        }

        const data = await response.json();

        console.log("dados da API:", data);

        countries = data.map(country => ({
            code: country.cca2,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.region || "N/A"
        }));

        renderCountries(countries);
    } catch (error) {
        console.error("❌ ERRO NO FETCH:", error);
    }
}

function renderCountries(list) {
    console.log("renderizando", list.length, "países");
    container.innerHTML = list.map(CountryCard).join("");
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(value)
    );

    renderCountries(filtered);
});

fetchCountries();

