import CountriesList from './components/CountriesList';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import SelectMenu from './components/SelectMenu';

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="flex justify-between max-w-[1200px] m-auto mt-6 items-center">
          <Searchbar />
          <SelectMenu />
        </div>
        <CountriesList />
      </div>
    </>
  );
}

export default App;
