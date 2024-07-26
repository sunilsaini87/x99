import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const latestProducts = products.slice(0, 3);

  return (
    <div className="p-4 max-w-[1300px] mx-auto my-16">
      <div className="hero-content text-center mb-24">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-teal-700">base app</span>
          </h1>
          <p className="py-6">
            We offer high-quality online courses for programming and website
            templates you can buy.
          </p>
          <a href="/shop" className="btn btn-accent mt-4">
            Shop
          </a>
        </div>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p>Failed to load products. Please try again later.</p>}
      {!loading && !error && <ProductCard products={latestProducts} />}
    </div>
  );
};

export default Home;
