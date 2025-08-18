export function DropdownFooter({ content }) {
  return (
    <footer className="bg-[#eaf2f8] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Play icon */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#007bff] rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={content.playIcon.path} />
              </svg>
            </div>
            <span className="text-[#007bff] font-bold text-sm sm:text-lg">
              {content.title}
            </span>
          </div>

          {/* Right arrow icon */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#007bff] rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={content.arrowIcon.path} />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
