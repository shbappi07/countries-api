fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {

    const coutriesDiv = document.getElementById("country-list");
    countries.forEach(country => {
        const div = document.createElement("div");
        div.className = "country";

        countryInfo = `
        
            <img src="${country.flag}">
            <h3>Name: ${country.name}</h3>
            <p>Capital: ${country.capital} </p>
            <p>Area: ${country.area} </p>
            
            
        `;
        div.innerHTML = countryInfo;
        coutriesDiv.appendChild(div);

    });


    //Using For loop 

    //     for (let i = 0; i < countries.length; i++) {
    //         const country = countries[i];

    //         const div = document.createElement("div");
    //         div.className = "country";

    //         // const h3 = document.createElement("h3");
    //         // h3.innerText = country.name;
    //         // const p = document.createElement("p");
    //         // p.innerText = country.capital;

    //         // div.appendChild(h3);
    //         // div.appendChild(p);
    // //alternet of append items below

    //         countryInfo = `
    //             <h3>Name: ${country.name}</h3>
    //             <p>Capital: ${country.capital} </p>
    //             <p>Area: ${country.area} </p>

    //         `;
    //         div.innerHTML = countryInfo;
    //         coutriesDiv.appendChild(div);


    //     }
}