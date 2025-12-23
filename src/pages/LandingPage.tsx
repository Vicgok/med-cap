import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Upload, ShoppingBag, ArrowRight } from "lucide-react";
import DrugCard from "../components/DrugCard";
import { useMemo } from "react";
import { products as allProducts } from "../data/products";

const LandingPage = () => {
  const navigate = useNavigate();

  const discountedProducts = useMemo(() => {
    const productsWithDiscount = allProducts.filter((p) => p.discount);
    return productsWithDiscount.slice(0, 5);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF5F0]">
      <Header />

      <div className="pt-24 flex flex-col items-center justify-center px-4 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-4xl w-full text-center mb-12">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2E7D32] mb-4">
              MedCap
            </h1>
            <p className="text-xl md:text-2xl text-[#1B1F23] mb-2">
              Your Health, Our Priority
            </p>
            <p className="text-base text-[#6B7280] max-w-2xl mx-auto">
              Browse thousands of genuine medicines, vitamins, and healthcare
              products. Get fast delivery and the best prices at your
              fingertips.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate("/catalogue")}
              className="flex items-center justify-center gap-2 bg-[#2E7D32] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#266329] transition-colors shadow-md"
            >
              <ShoppingBag size={20} />
              <span>Shop Now</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-[#2E7D32] border-2 border-[#2E7D32] px-8 py-3 rounded-full text-base font-semibold hover:bg-[#EEF5F0] transition-colors shadow-md">
              <Upload size={20} />
              <span>Upload Prescription</span>
            </button>
          </div>
        </div>

        {/* Pharma SVG Illustration */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
          <div className="mb-6">
            <svg
              className="w-48 h-48 md:w-64 md:h-64 mx-auto text-[#2E7D32]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F23] mb-4">
            Trusted Healthcare at Your Doorstep
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Order prescription medicines, over-the-counter drugs, and health
            supplements with confidence. We ensure quality, authenticity, and
            timely delivery for all your healthcare needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#EEF5F0] rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-[#2E7D32]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1B1F23] mb-2">
                100% Genuine Products
              </h3>
              <p className="text-sm text-[#6B7280] text-center">
                All medicines sourced directly from certified manufacturers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#EEF5F0] rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-8 h-8 text-[#2E7D32]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1B1F23] mb-2">
                Fast Delivery
              </h3>
              <p className="text-sm text-[#6B7280] text-center">
                Get your medicines delivered within 24-48 hours
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#EEF5F0] rounded-full flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-[#2E7D32]">₹</span>
              </div>
              <h3 className="text-base font-semibold text-[#1B1F23] mb-2">
                Best Prices
              </h3>
              <p className="text-sm text-[#6B7280] text-center">
                Competitive pricing with exclusive discounts and offers
              </p>
            </div>
          </div>
        </div>
        {/* Products on Discount Section */}
        <div className="w-full mb-16">
          <div className="max-w-6xl mx-auto px-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F23] mb-2">
                  Hot Deals 🔥
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Limited time offers on popular products
                </p>
              </div>
              <button
                onClick={() => navigate("/catalogue")}
                className="hidden sm:flex items-center gap-2 text-[#2E7D32] font-semibold hover:gap-3 transition-all"
              >
                <span>View All</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-2 pb-4 max-w-6xl mx-auto">
              {discountedProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-44">
                  <DrugCard {...product} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate("/catalogue")}
            className="sm:hidden flex items-center justify-center gap-2 text-[#2E7D32] font-semibold mx-auto mt-2"
          >
            <span>View All Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
