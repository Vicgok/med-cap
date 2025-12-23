interface DrugCardProps {
  id: number;
  name: string;
  price: string;
  mrp?: string;
  discount?: string;
  image?: string;
}

const DrugCard = ({ name, price, image, mrp, discount }: DrugCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        <div className="w-full h-40 bg-[#EEF5F0] flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-[#6B7280] text-xs">No Image</div>
          )}
        </div>
        {discount && (
          <span className="absolute top-2 right-2 bg-[#2E7D32] text-white text-xs px-2 py-1 rounded">
            {discount}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm text-[#1B1F23] font-medium line-clamp-2 mb-2 min-h-[2.5rem]">
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-semibold text-[#1B1F23]">
            {price}
          </span>
          {mrp && (
            <span className="text-xs text-[#6B7280] line-through">{mrp}</span>
          )}
        </div>
        <button className="w-full bg-[#2E7D32] text-white text-sm font-medium py-2 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DrugCard;
