export default function CountryCard({
  name,
  flagImg,
  population,
  region,
  capital,
}) {
  return (
    <div>
      <a className="country-card" href="/country.html?name=Barbados">
        <img
          className=" border border-2  rounded-lg h-40 w-full "
          src={flagImg}
          alt={name + ' flag'}
        />

        <div className="card-text">
          <h1 className="font-bold text-xl mt-2 truncate">{name}</h1>
          <p>
            <b>Population: </b>
            {population ? population : 'N/A'}
          </p>
          <p>
            <b>Region: </b>
            {region ? region : 'N/A'}
          </p>
          <p>
            <b>Capital: </b>
            {capital ? capital : 'N/A'}
          </p>
        </div>
      </a>
    </div>
  );
}
