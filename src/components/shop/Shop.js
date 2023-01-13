import "./Shop.css";
import product from "./praynotpreyapparelsweater.webp";

export const Shop = () => {
  return (
    <div className="shop-wrapper">
      <div className="shop-heading">
        <h3>Shop The Collection</h3>
      </div>
      <div className="shop-section">
        <h1 style={{ textAlign: "center" }}>Clothing</h1>
        <img src={product} alt="test-product" width="500" />
      </div>
    </div>
  );
};
