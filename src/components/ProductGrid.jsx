import rose from "../assets/rose.jpg";
import tulip from "../assets/tulip.jpg";
import orchid from "../assets/orchid.jpg";
import lily from "../assets/lily.jpg";
import spring from "../assets/spring.jpg";
import bloosam from "../assets/bloosam.jpg";
import dahlia from "../assets/dahlia.jpg";
import sunflower from "../assets/sunflower.png";

import "./ProductGrid.css";

const products = [
  { id: 1, name: "Rose Bouquet", price: "$25", image: rose },
  { id: 2, name: "Tulip Delight", price: "$30", image: tulip },
  { id: 3, name: "Lily Fresh", price: "$20", image: lily },
  { id: 4, name: "Spring Mix", price: "$35", image: spring },
  { id: 5, name: "Orchid Flex", price: "$40", image: orchid },
  { id: 6, name: "Blossom Charm", price: "$40", image: bloosam },
  { id: 7, name: "Dahlia", price: "$40", image: dahlia },
  { id: 8, name: "Sunflower Shine", price: "$40", image:sunflower },
];

const ProductGrid = ({ addToCart }) => {
  return (
    <div className="product-grid">
      {products.map((item) => (
         <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
