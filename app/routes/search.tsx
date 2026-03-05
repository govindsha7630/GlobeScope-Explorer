
import { useState } from "react";
import { Form, useNavigate } from "react-router";

export default function Search() {
    const [category, setCategory] = useState("All categories");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const categories = ["Shopping", "Images", "News", "Finance"];

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get("query");

        if (query) {
            navigate(`/search?query=${query}&category=${category}`);
        }
    };

    return (
        <Form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto"
        >
            <div className="flex shadow-xs rounded-base">

                {/* Dropdown Button */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium rounded-s-base text-sm px-4 py-2.5"
                    >
                        {category}
                        <svg
                            className="w-4 h-4 ms-2"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="m19 9-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute z-10 bg-white border rounded shadow w-44 mt-1">
                            <ul className="p-2 text-sm">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setCategory(cat);
                                                setIsOpen(false);
                                            }}
                                            className="block w-full text-left p-2 hover:bg-gray-100 rounded-md"
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Search Input */}
                <input
                    type="search"
                    name="query"
                    className="px-3 py-2.5 border border-default-medium text-sm w-full"
                    placeholder="Search products..."
                    required
                />

                {/* Search Button */}
                <button
                    type="submit"
                    className="text-white bg-blue-600 rounded-e-base text-sm px-4 py-2.5"
                >
                    Search
                </button>
            </div>
        </Form>
    );
}
