import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3"
  );
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();

    const matchesSearch =
      !search ||
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="px-6 py-28 max-w-7xl mx-auto">

      {/* 🔥 New Headline */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
         Discover Countries Around  <span className="text-green-500">The World 🌍</span> 
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse through detailed country information including population,
          regions, and more. Use the filters below to explore by continent
          or quickly search for a specific country.
        </p>
      </div>

      {/* 🔽 Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">

        {/* 🌎 Continent Dropdown */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 sm:w-1/3 focus:ring-2 focus:ring-green-400 outline-none"
        >
          <option value="">All Continents</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>

        {/* 🔍 Search Input */}
        <input
          type="text"
          placeholder="Search by country name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-400 outline-none"
        />
      </div>

      {/* 📊 Results Counter */}
      <div className="mb-6 text-gray-600">
        Showing{" "}
        <span className="font-semibold text-gray-900">
          {filteredCountries.length}
        </span>{" "}
        countries
      </div>

      {/* 🌐 Country Grid */}
      {filteredCountries.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">
            No countries match your current filters.
          </p>
          <p className="text-gray-400 mt-2">
            Try changing the continent or search keyword.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCountries.map((country: any) => (
            <li
              key={country.cca3}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-green-600 hover:text-green-700 text-lg font-bold"
              >
                {country.name.common}
              </Link>

              <div className="text-gray-600 text-sm mt-3 space-y-1">
                <p>
                  Region:{" "}
                  <span className="font-semibold text-gray-800">
                    {country.region}
                  </span>
                </p>
                <p>
                  Population:{" "}
                  <span className="font-semibold text-gray-800">
                    {country.population.toLocaleString()}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
}