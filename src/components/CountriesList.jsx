import CountryCard from './CountryCard';
import CountriesData from '../../CountriesData';

export default function CountriesList() {
  const arr = CountriesData.map(() => <CountryCard />);
  console.log(arr);
  return (
    <div className="countries-container">
      <CountryCard CountryName="Barbados" />
    </div>
  );
}
