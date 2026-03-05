import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-8 transition-all duration-300 z-50
        ${scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-5 md:mb-0">
            <span className="text-xl font-black text-gray-900 select-none">
              GlobeScope <span className="text-green-500">Explorer</span>
            </span>
          </NavLink>

          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8">
            <NavLink
              to="/"
              end
              className="mr-5 font-medium text-gray-600 hover:text-green-600 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/countries"
              className="mr-5 font-medium text-gray-600 hover:text-green-600 transition"
            >
              Countries
            </NavLink>

            <NavLink
              to="/about"
              className="mr-5 font-medium text-gray-600 hover:text-green-600 transition"
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}