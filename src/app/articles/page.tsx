"use client";
import ListOfArticles from "@/components/ListOfArticles";
import React, { useState } from "react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2 my-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search articles..."
            className="border p-2 rounded w-full text-black"
          />
        </div>
      </div>
      <ListOfArticles />
    </section>
  );
};

export default Articles;
