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
            <h4>Languages: ${countryLanguage()}</h4>
            <h3>${landLocked()}</h3>
        </section>
        `;
      
        function countryLanguage(){
            console.log(`${country.name.common}:`);
            var myLanguages=[];
            for (const i in country.languages){
                console.log(country.languages[i]);
                myLanguages.push(country.languages[i]);
            }
            return(myLanguages);   
        }
        
        function landLocked(){
            if(country.landlocked){
                return("I've never seen the sea!")
            } else{
                return("Vamos a la playa!");
            }
        } 
      
        rootElement.insertAdjacentHTML("beforeend", countryHTML);  
    }
    
}

window.addEventListener("load", loadEvent);