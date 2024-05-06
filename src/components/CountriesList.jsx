import CountryCard from './CountryCard';
import CountriesData from '../../CountriesData';

export default function CountriesList() {
  const arr = CountriesData.map((country) => {
    console.log(country);
    return (
      <CountryCard
        name={country.name.common}
        flagImg={country.flags.png}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    ); // common name is the key for each country object in CountriesData array
  });
  return <div className="countries-container">{arr}</div>;
}
