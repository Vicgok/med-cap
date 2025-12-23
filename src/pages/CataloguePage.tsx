import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import DrugCard from "../components/DrugCard";
import { products } from "../data/products";

const CataloguePage = () => {
  return (
    <div className="min-h-screen bg-[#EEF5F0] pb-14">
      <Header />

      <div className="pt-24">
        <CategoryTabs />{" "}
        <div className="px-4 pb-4">
          <h2 className="text-lg font-semibold text-[#1B1F23] mb-4">
            All Products
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
              <DrugCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CataloguePage;
