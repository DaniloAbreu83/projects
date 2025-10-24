// components/CountryCard.js

function CountryCard(country) {
    return `
        <div id="country-${country.code}" class="bg-white rounded-lg shadow-md p-4 text-center">
            <img src="${country.flag}" alt="Bandeira de ${country.name}" class="w-24 h-16 mx-auto mb-3 border">
            <h3 class="text-lg font-semibold text-gray-700">${country.name}</h3>
            <p class="text-sm text-gray-500">${country.continent}</p>
        </div>
    `;
}

export { CountryCard };
