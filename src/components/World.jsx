import { useEffect, useState } from 'react';
export default function World() {
  const countryName = new URLSearchParams(location.search).get('name');

  const [countryData, setCountryData] = useState({}); // iam making the first varibael as empty object

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          name: data.name.common,
          native: data.name.official,
          population: data.population.toLocaleString('en-IN'),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currency: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(','),
          language: Object.values(data.languages)
            .map((language) => language)
            .join(','),
          border: data.border,
          img: data.flags.svg,
        });
      });
  }, []);

  return (
    <div>
      <main>
        <div className="container ">
          <span className="pointer text-xl font-semibold">
            <i className="ri-corner-up-left-line pointer"></i>&nbsp; Back
          </span>

          <div className="container mt-10 max-w-[1200px] m-auto flex justify-evenly items-center sm:max-xl:grid ">
            <div>
              <img src={countryData.img} alt="" />
              <h1 className="font-semibold text-2xl underline md:mb-6">
                {countryData.name}
              </h1>
            </div>
            <div className=" grid  grid-cols-2 gap-[41px] sm:grid-cols-1">
              <p>
                <b>Official Name: {countryData.native} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld} </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currency}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.language} </b>
                <span className="languages"></span>
              </p>
            </div>
            {/* <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
