export function ProductCard({ title, description, link = "#", isEmpty = false }) {
  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col">
        {/* Empty card placeholder */}
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5] rounded-[2px] shadow-sm sm:p-6 flex flex-col group hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 ease-out hover:-translate-y-1 relative overflow-hidden">
      {/* Subtle hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-sm sm:text-lg font-bold text-[#333333] uppercase mb-3 sm:mb-3 tracking-wider group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#333333] mb-3 sm:mb-4 flex-grow tracking-wider group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        <a
          href={link}
          className="text-[#007bff] text-xs sm:text-sm font-medium hover:underline self-start tracking-wider group/link relative inline-flex items-center transition-all duration-300 hover:text-blue-600"
        >
          <span className="group-hover/link:translate-x-1 transition-transform duration-300">Learn more</span>
          <svg 
            className="ml-1 h-3 w-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
