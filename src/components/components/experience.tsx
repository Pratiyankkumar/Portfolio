export function Experience() {
  return (
    <div id="exp" className="w-[80%] mt-16 flex flex-col">
      <p className="text-2xl font-bold">Cool places I worked at</p>
      <p className="text-sm mt-2 text-gray-500">
        Where I&apos;ve had the opportunity to learn and contribute.
      </p>

      <div className=" rounded-xl p-6 mt-8 w-full">
        <div className="space-y-6">
          {/* VideoTutor */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-200 p-1 flex items-center justify-center overflow-hidden">
                <img
                  src="/vid.jpeg"
                  alt="VideoTutor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <a
                  href="https://videotutor.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                >
                  VideoTutor
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <p className="text-gray-600 text-sm sm:text-base">
                  Software Engineer Intern
                </p>
              </div>
            </div>
            <span className="text-gray-500 text-sm sm:text-base sm:text-right">
              April 2025 - Present
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
