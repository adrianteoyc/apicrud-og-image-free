"use client";
import React, { useState, useEffect } from "react";
import { categoryList } from "./data/category";

import Content from "./_components/Content";



const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = categoryList[0].ogImage.flatMap(
    (ogImage) => ogImage.categories
  ); //flatmap is like filter it will combile multiple array in a array
  const categories = Array.from(new Set(allCategories)) || []; // Deduplicate categories

  const filteredOgImages = categoryList[0].ogImage.filter((ogImage) => {
    const categoryMatches =
      !selectedCategory || ogImage.categories.includes(selectedCategory);
    const searchMatches =
      ogImage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ogImage.categories.some((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return categoryMatches && searchMatches;
  });


  return (
    <div className="bg-white text-black">
      <Content
        ogImages={filteredOgImages}
      />
    </div>
  );
};

export default Page;
