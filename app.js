fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {
    const coutriesDiv = document.getElementById("country-list");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = country.name;
        const p = document.createElement("p");
        p.innerText = country.capital;

        div.appendChild(h3);
        div.appendChild(p);

        coutriesDiv.appendChild(div);
        
        
    }
}