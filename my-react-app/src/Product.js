import { useState, useEffect } from "react";
const Products = ({ showAllProduct,flag, setFlagPlus }) => {
  const [products, setProducts] = useState([
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ]);
  console.log('showAllProductcccc',showAllProduct);
  console.log('flag',flag);
  useEffect(() => {
    if (!showAllProduct && flag === 0) {
      // Update products based on conditions
      const fixedProductList = products.filter(
        (product) => product.stocked === true
      );
      setProducts(fixedProductList);

      // Set flagPlus if needed
      setFlagPlus();
    }
  }, [showAllProduct, flag, setFlagPlus]);

  const listFruits = products.filter(
    (product) => product.category === "Fruits"
  );
  const listVegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  const renderList = (list) => {
    return (
      <div>
        <h2>{list[0].category}</h2>
        <table>
          {list.map((item, index) => {
            let body = (
              <tr>
                <td
                  style={{
                    color: item.stocked ? "black" : "red",
                    fontWeight: item.stocked ? "normal" : "bold",
                  }}
                >
                  {item.name}
                </td>
                <td>{item.price}</td>
              </tr>
            );

            if (index === 0) {
              body = (
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: item.stocked ? "black" : "red",
                        fontWeight: item.stocked ? "normal" : "bold",
                      }}
                    >
                      {item.name}
                    </td>
                    <td>{item.price}</td>
                  </tr>
                </tbody>
              );
            }
            return body;
          })}
        </table>
      </div>
    );
  };

  const renderProducts = (list) => {
    return renderList(list);
  };

  return (
    <div>
      {renderProducts(listFruits)}
      {renderProducts(listVegetables)}
    </div>
  );
};

export default Products;
