const Search = () => {
  return (
    <div style={{ display: "block" }}>
      <input classname="form-control" type="text" placeholder="Search..." />
      <br />
      <input classname="form-check-input" type="checkbox" id="dropdownCheck" />
      <label classname="form-check-label">Only show products in stock</label>
    </div>
  );
};
export default Search;
