// function CountryCard(CountryName, FlagImg, population,region,capital) {
//   return (
//     <div>
//       <a className="country-card" href="">
//         <img src={FlagImg} alt={CountryName + 'flag'} />
//         <div className="card-text">
//           <h3>{CountryName}</h3>
//           <p>
//             <b>Population: </b>
//             {population.toLocaleString('en-IN')}
//           </p>
//           <p>
//             <b>Region: </b>
//             {region}
//           </p>
//           <p>
//             <b>Capital: </b>
//             {capital}
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// }

// export default CountryCard;

export default function CountryCard() {
  return (
    <div>
      <a className="country-card" href="/country.html?name=Barbados">
        <img src="https://flagcdn.com/in.svg" alt="barb" />
        <div className="card-text">
          <h2>Bharat</h2>
          <p>
            <b>Population: </b>
            246651355
          </p>
          <p>
            <b>Region: </b>
            Asia
          </p>
          <p>
            <b>Capital: </b>
            New Delhi
          </p>
        </div>
      </a>
    </div>
  );
}
