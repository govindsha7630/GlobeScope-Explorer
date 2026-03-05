import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function Country() {
  const { countryName } = useParams();
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!countryName) return;

    setLoading(true);

    fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(
        countryName
      )}?fullText=true&fields=name,capital,population,region,subregion,flags`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [countryName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading country details...
        </p>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <p className="text-2xl font-bold text-red-600">
          Country not found
        </p>
        <Link
          to="/countries"
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Back to Countries
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transition hover:shadow-green-200">

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {country.flags?.png && (
            <div className="h-72 md:h-full overflow-hidden">
              <img
                src={country.flags.png}
                alt={country.name?.common}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}

          <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-green-600 to-emerald-500 text-white">
            <h1 className="text-4xl font-extrabold mb-4">
              {country.name?.common}
            </h1>
            <p className="text-lg opacity-90">
              Explore key insights, demographics, and travel information about{" "}
              {country.name?.common}.
            </p>
          </div>
        </div>

        {/* Information Section */}
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">

          <div className="space-y-6">
            <InfoCard title="Official Name" value={country.name?.official} />
            <InfoCard title="Capital City" value={country.capital?.[0]} />
            <InfoCard
              title="Population"
              value={country.population?.toLocaleString()}
            />
          </div>

          <div className="space-y-6">
            <InfoCard title="Region" value={country.region} />
            <InfoCard title="Subregion" value={country.subregion} />

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:scale-105 transition duration-300">
              <p className="text-sm opacity-90">Travel Insight</p>
              <p className="mt-2 font-semibold">
                {country.name?.common} offers cultural richness, natural
                landscapes, and vibrant travel experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-6">
          <Link
            to="/countries"
            className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Explore More Countries →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Reusable Info Card */
function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-lg font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  );
}