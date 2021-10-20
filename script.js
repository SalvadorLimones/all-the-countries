async function loadEvent() {
  const rootElement = document.getElementById("root");

  const res = await fetch("https://restcountries.com/v3.1/name/peru");
  const peru = await res.json();

  console.log(peru);

 const peruO = peru[0];

  const peruHTML =`
  <section class="independent">
    <img src="${peruO.flags.png}" alt="flag">
    <h1>${peruO.name.official}</h1>
    <h2>${peruO.capital[0]}</h2>
    <ul>
        <li>First language</li>
    </ul>
    <!-- ha landlocked true <h5>"I've never met the sea</h5> -->
</section>
  `;

  for (const i in peruO.languages){
    console.log(peruO.languages[i]);
  }
  console.log(peruO.landlocked);
  

  console.log(rootElement);

  rootElement.insertAdjacentHTML("beforeend", peruHTML);
}


window.addEventListener("load", loadEvent);