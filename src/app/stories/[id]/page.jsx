"use client";

import React, { useEffect, useState } from "react";

// StoryDetail component expects `params` as a prop
const StoryDetail = ({ params }) => {
  const { id } = params; // Access the dynamic `id` from the `params` object
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the story data based on the `id` from the URL
  useEffect(() => {
    if (!id) return; // If `id` is not available, do nothing

    const fetchStory = async () => {
      try {
        const response = await fetch("/data/storiesData.json");
        const data = await response.json();
        const foundStory = data.find((story) => story.id.toString() === id);
        if (foundStory) {
          setStory(foundStory);
        } else {
          console.error("Story not found");
        }
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]); // Dependency array ensures it only runs when `id` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!story) {
    return <div>Story not found!</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">{story.title}</h1>
      <h2 className="text-xl text-gray-500 mt-2">{story.subtitle}</h2>
      <p className="mt-4">{story.description}</p>
      <div className="relative mt-8 w-full h-96">
        <img
          src={story.imageSrc}
          alt={story.title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default StoryDetail;
