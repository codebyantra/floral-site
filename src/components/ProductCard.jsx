import "./ProductCard.css";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{price} UAH</p>
      <div className="icons">
        <span>♡</span>
        <span>🛒</span>
      </div>
    </div>
  );
}
