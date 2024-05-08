import CountryCard from './CountryCard';
import { useState } from 'react';
import { useEffect } from 'react';

export default function CountriesList({ query }) {
  const [contriesData, setContriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setContriesData(data);
      });
  }, []);

  const filterdCountries = contriesData.filter((country) =>
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
