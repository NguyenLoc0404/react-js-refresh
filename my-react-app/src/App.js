// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from "./Search";
import Products from "./Product";
import { useState } from "react";
function App() {
    const [showAllProduct, setShowAllProduct] = useState(true);
    const [keyword, setKeyword] = useState('');
    const [flag, setFlag] = useState(0);

    function setButtonShowAll(){
        setShowAllProduct(!showAllProduct)
    }

    function setKeywordSearch(keyword){
        setKeyword(keyword)
    }

    function setFlagPlus(){
        setFlag(flag + 1)
    }

  return (
    <div>
      <Search showAllProduct={showAllProduct} setButtonShowAll={setButtonShowAll} keyword={keyword} setKeywordSearch={setKeywordSearch}/>
      <Products showAllProduct={showAllProduct} flag={flag} setFlagPlus={setFlagPlus}/>
    </div>
  );
}

export default App;
