import "./HeroSection.css";
import heroimg from "../assets/b1.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroimg} alt="Bouquet Background" />
      </div>
      <div className="hero-content">
        <h1>Mono Bouquets from Your Favorite Flowers</h1>
        <p className="subtext">Seasonal Discount 20%</p>
        <button className="hero-btn">
          Choose Bouquet <span>➝</span>
        </button>
      </div>
    </section>
  );
}
