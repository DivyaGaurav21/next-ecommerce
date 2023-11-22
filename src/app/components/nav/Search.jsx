'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";



const Search = () => {

    const [keyword, setKeyword] = useState('');
    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            router.push(`/productList/?keyword=${keyword}`);
        } else {
            router.push('/');
        }
        setKeyword('');
    }

    return (
        <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
            onSubmit={submitHandler}
        >
            <input
                className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-s-lg py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 text-black"
                type="text"
                placeholder="Search for products..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
            />
            <button
                type="submit"
                className="px-4 py-2 inline-block border border-transparent bg-yellow-600 text-white rounded-e-lg hover:bg-yellow-800"
            >
                Search
            </button>
        </form>
    );
};

export default Search;