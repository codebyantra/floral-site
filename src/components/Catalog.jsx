import "./Catalog.css";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";

const Catalog = ({ addToCart })=>{
  return (
    <section className="catalog">
      <FilterSidebar />
      <ProductGrid addToCart={addToCart} />
    </section>
  );
}

export default Catalog;
