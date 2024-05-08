import { Link } from 'react-router-dom';

export default function CountryCard({
  name,
  flagImg,
  population,
  region,
  capital,
}) {
  return (
    <div>
      <Link className="country-card" to={`/country?name= ${name}`}>
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
            <b className="truncate">Capital: </b>
            {capital ? capital : 'N/A'}
          </p>
        </div>
      </Link>
    </div>
  );
}
