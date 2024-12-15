import { useState, useEffect } from "react";

export const RightContainer = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const navItems = [
    { id: "about", label: "Introduction", ref: "one" },
    { id: "tech-stack", label: "Tech Stack", ref: "two" },
    { id: "projects", label: "Recent Projects", ref: "three" },
    { id: "code-highlights", label: "Code Highlights", ref: "four" },
    { id: "contact", label: "Contact Info", ref: "five" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrolled / maxScroll) * 100;
      setScrollPercentage(Math.min(100, Math.max(0, Math.round(percentage))));

      // Improved section detection
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 3; // Using 1/3 of viewport as threshold

      // Find all section elements
      const sections = navItems.map((item) => {
        const elements = document.getElementsByClassName(item.id);
        return {
          id: item.id,
          element: elements[0],
        };
      });

      // Find active section
      let currentSection = sections[0].id;

      sections.forEach(({ id, element }) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        // Check if section is in viewport and past the threshold
        if (rect.top <= viewportMiddle) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollToSection = (ref) => {
    const elements = document.getElementsByClassName(ref);
    if (elements[0]) {
      const yOffset = -100; // Offset to account for any fixed headers
      const element = elements[0];
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-10 h-full xmd:flex hidden items-center">
      <div className="relative h-[80%] flex items-center">
        {/* Vertical line with scroll progress */}
        <div className="absolute left-6 h-full w-0.5 bg-gray-700">
          <div
            className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-200"
            style={{ height: `${scrollPercentage}%` }}
          />
        </div>

        {/* Navigation items */}
        <nav className="ml-2">
          <ul className="space-y-16">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className="flex items-center group outline-none focus:outline-none"
                >
                  <div
                    className={`w-3 h-3 ml-m1 rounded-full border-2 transition-all duration-200 z-10 
                      ${
                        activeSection === item.id
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-700 bg-gray-900 group-hover:border-blue-400"
                      }`}
                  />
                  <span
                    className={`ml-4 text-sm transition-all duration-200
                      ${
                        activeSection === item.id
                          ? "text-blue-500 translate-x-1"
                          : "text-gray-500 group-hover:text-gray-400"
                      }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Scroll percentage indicator */}
      <div className="fixed bottom-4 right-4 bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
        {scrollPercentage}% scrolled
      </div>
    </div>
  );
};
