const Search = ({showAllProduct, setButtonShowAll, keyword,setKeywordSearch}) => {
  return (
    <div style={{ display: "block" }}>
      <input className="form-control" type="text" placeholder="Search..." onChange={(e) => setKeywordSearch(e.target.value)} />
      <br />
      <input className="form-check-input" type="checkbox" id="dropdownCheck"  onClick={setButtonShowAll}/>
      <label className="form-check-label">Only show products in stock</label>
    </div>
  );
};
export default Search;
