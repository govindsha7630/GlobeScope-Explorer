import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GlobeVista | Global Travel & Country Intelligence" },
    {
      name: "description",
      content:
        "Explore global destinations, country insights, travel information, and real-time geographic data in one modern platform.",
    },
  ];
}

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="h-screen flex items-center justify-center py-28 px-6 bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Discover the World with
              <span className="block text-green-600">
                Smart Travel Intelligence
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              GlobeVista provides structured and real-time country data to help
              travelers, researchers, and global professionals explore nations
              with confidence. Access population insights, regions, capitals,
              and geographic intelligence instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/countries"
                className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition"
              >
                Explore Destinations
              </Link>

              <Link
                to="/about"
                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1748073767634-2213c2ce2d1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRvdXIlMjB0cmF2ZWx8ZW58MHwwfDB8fHwy"
              alt="Global Travel"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Travel Smarter with Reliable Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether planning international travel or conducting geographic
              research, access accurate and organized country information in
              one streamlined interface.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From regional classifications to demographic insights, GlobeVista
              ensures you have the data needed to make informed global decisions.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1524467128837-00f6644866d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzbXxlbnwwfDB8MHx8fDI%3D"
              alt="World Travel"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1664302286113-bf2249710849?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
              alt="Technology Platform"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">
              Built with Modern Technology
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              GlobeVista leverages modern frontend technologies and real-time
              API integrations to deliver fast, responsive, and scalable
              experiences across all devices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Designed with performance and usability in mind, the platform
              ensures seamless navigation and intuitive filtering tools.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Designed for Global Exploration
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Easily filter countries by continent and search instantly by
              name. The platform is optimized for clarity, accessibility, and
              efficiency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are exploring travel destinations, comparing regions,
              or studying international trends, GlobeVista provides a powerful
              yet simple solution.
            </p>
          </div>

          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1664300830813-20076dda6185?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 px-6 bg-green-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Start Exploring the World Today
          </h2>
          <p className="text-lg mb-8 text-green-100">
            Access comprehensive country intelligence and travel insights
            in one modern platform.
          </p>

          <Link
            to="/countries"
            className="px-10 py-4 bg-white text-green-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Countries
          </Link>
        </div>
      </section>

    </div>
  );
}