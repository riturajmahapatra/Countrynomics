export default function Searchbar({ setquery }) {
  return (
    <div className="search-container">
      <i className="ri-search-line"></i>
      <input
        placeholder="Country search..."
        onChange={(e) => {
          setquery(e.target.value);
        }}
      />
    </div>
  );
}
