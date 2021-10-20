async function loadEvent() {
  const rootElement = document.getElementById("root");

  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  console.log(countries);

  for (const country of countries) {
    const countryHTML =`
    <section class="independent">
        <img src="${country.flags.png}" alt="flag">
        <h1>${country.name.official}</h1>
        <h2>${country.capital}</h2>
    </section>
    `;

    rootElement.insertAdjacentHTML("beforeend", countryHTML);  
  }

 /* const peruO = peru[0];


  for (const i in peruO.languages){
    console.log(peruO.languages[i]);
  }
  console.log(peruO.landlocked);
  

  console.log(rootElement);
  
  rootElement.insertAdjacentHTML("beforeend", peruHTML); */
}


window.addEventListener("load", loadEvent);