export function ProductCard({ title, description, link = "#", isEmpty = false, isActive = false }) {
  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col">
        {/* Empty card placeholder */}
      </div>
    );
  }

  return (
    <div className={`rounded-[2px] shadow-sm sm:p-6 flex flex-col justify-between group transition-all duration-300 ease-out hover:-translate-y-1 relative overflow-hidden min-h-[160px] ${
      isActive 
        ? 'bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-400 shadow-lg shadow-blue-200/50' 
        : 'bg-[#F5F5F5] hover:shadow-lg hover:shadow-gray-200/50'
    }`}>
      {/* Subtle hover background effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50' 
          : 'bg-gradient-to-br from-blue-50/30 to-indigo-50/30'
      }`}></div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-3 right-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <h3 className={`text-sm sm:text-lg font-bold uppercase mb-3 sm:mb-3 tracking-wider transition-colors duration-300 ${
            isActive 
              ? 'text-blue-700' 
              : 'text-[#333333] group-hover:text-blue-600'
          }`}>
            {title}
            {isActive && (
              <span className="ml-2 text-xs text-blue-600 font-normal">(Current)</span>
            )}
          </h3>
          <p className={`text-xs sm:text-sm tracking-wider transition-colors duration-300 ${
            isActive 
              ? 'text-blue-800' 
              : 'text-[#333333] group-hover:text-gray-700'
          }`}>
            {description}
          </p>
        </div>
        <div className="mt-4">
          <a
            href={link}
            className={`text-xs sm:text-sm font-medium hover:underline tracking-wider group/link relative inline-flex items-center transition-all duration-300 ${
              isActive 
                ? 'text-blue-600 hover:text-blue-800' 
                : 'text-[#007bff] hover:text-blue-600'
            }`}
          >
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">
              {isActive ? 'View page' : 'Learn more'}
            </span>
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
    </div>
  );
}
