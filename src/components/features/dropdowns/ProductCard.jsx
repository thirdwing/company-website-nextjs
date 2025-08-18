export function ProductCard({ title, description, link = "#", isEmpty = false }) {
  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col">
        {/* Empty card placeholder */}
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5] rounded-[2px] shadow-sm sm:p-6 flex flex-col">
      <h3 className="text-sm sm:text-lg font-bold text-[#333333] uppercase mb-3 sm:mb-3 tracking-wider">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-[#333333] mb-3 sm:mb-4 flex-grow tracking-wider">
        {description}
      </p>
      <a
        href={link}
        className="text-[#007bff] text-xs sm:text-sm font-medium hover:underline self-start tracking-wider"
      >
        Learn more
      </a>
    </div>
  );
}
