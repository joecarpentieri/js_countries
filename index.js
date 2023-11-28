// console.log("hello");

const getCountryByName = async (countryName) => {
    const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonCountryResponseData = await countryResponse.json();
    const foundCountryName = jsonCountryResponseData[0].name.common
    document.querySelector("#countryName").innerText = foundCountryName;
    // console.log(foundCountryName);
    const foundCountryCapital = jsonCountryResponseData[0].capital;
    // console.log(foundCountryCapital);
    document.querySelector("#countryCapital").innerText = foundCountryCapital;
    const foundLanguages = jsonCountryResponseData[0].languages;
    document.querySelector("#countryLanguages").innerText = Object.values(foundLanguages);
    // console.log(foundLanguages.toString())
    const foundPopulation = jsonCountryResponseData[0].population;
    document.querySelector("#countryPopulation").innerText = foundPopulation;

    console.log(Object.values(foundLanguages))

}
getCountryByName("spain")