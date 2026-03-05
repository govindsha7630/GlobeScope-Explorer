'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Country = {
  name: string;
  code: string;
  flag: React.ReactNode;
};

export default function Search2() {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: 'USA',
    code: 'us',
    flag: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const countries: Country[] = [
    { name: 'Australia', code: 'au', flag: null },
    { name: 'United Kingdom', code: 'uk', flag: null },
    { name: 'France', code: 'fr', flag: null },
    { name: 'Canada', code: 'ca', flag: null },
  ];

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?country=${selectedCountry.code}&location=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSearch}>
    <div className="flex shadow-xs rounded-base -space-x-0.5">
        <label htmlFor="search-dropdown-location" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Choose city</label>
        <button 
          id="dropdown-button-location" 
          type="button" 
          onClick={() => setShowDropdown(!showDropdown)}
          className="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none"
        >
            <svg className="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
            {selectedCountry.name}
            <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown-location" className={`z-10 ${showDropdown ? 'block' : 'hidden'} bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button-location">
                {countries.map((country) => (
                <li key={country.code}>
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md text-left"
                    >
                    <svg className="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="7.5" fill="#1A47B8"/>
                    </svg>
                    {country.name}
                    </button>
                </li>
                ))}
            </ul>
        </div>
        <input 
          type="search" 
          id="search-dropdown-location" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" 
          placeholder="Search for city or address" 
          required 
        />
        <button 
          type="submit" 
          className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none"
        >
        <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Search
        </button>
    </div>
    </form>
  );
}
