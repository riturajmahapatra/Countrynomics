import CountryCard from './CountryCard';
import CountriesData from '../../CountriesData';

export default function CountriesList({ query }) {
  const filterdCountries = CountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
  // console.log(filterdCountries);

  const arr = filterdCountries.map((country) => {
    return (
      <CountryCard
        name={country.name.common}
        flagImg={country.flags.png}
        population={country.population.toLocaleString('en-IN')}
        region={country.region}
        capital={country.capital}
      />
    ); // common name is the key for each country object in CountriesData array
  });
  return <div className="countries-container">{arr}</div>;
}
