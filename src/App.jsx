import { useState } from 'react';
import CountriesList from './components/CountriesList';
import Searchbar from './components/Searchbar';
import SelectMenu from './components/SelectMenu';

function App() {
  const [query, setquery] = useState(''); // empty string as initial value as it is always true...
  return (
    <>
      <div>
        <div className="flex justify-between max-w-[1200px] m-auto mt-6 items-center mb-10">
          <Searchbar setquery={setquery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </div>
    </>
  );
}

export default App;
