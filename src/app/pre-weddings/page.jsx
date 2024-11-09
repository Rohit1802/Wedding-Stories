"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 8; // Number of stories per page

  // Fetch the stories data from the JSON file located in the public folder
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/data/preWeddings.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchStories();
  }, []);

  // Calculate the stories to be displayed on the current page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  // Pagination Logic: Change the page
  const paginateNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    window.scrollTo(0, 0); // Scroll to the top when clicking Next
  };

  const paginatePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo(0, 0); // Scroll to the top when clicking Previous
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(stories.length / storiesPerPage);

  if (loading) {
    return (
      <div className="text-center">
        <p>Loading stories...</p>
      </div>
    );
  }

  return (
    <div className="bg-primary p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
        <div className="my-12">
          <h2 className="text-3xl  text-gray-700 font-thin tracking-[.25em]">
            PRE-WEDDINGS
          </h2>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="relative pb-[35%] w-full max-w-4xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Pm99Nd5NrVQ"
              title="Siddharth &amp; Priyanka Prewedding || Rishikesh Prewedding shoot || Best Prewedding shoot Rishikesh"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            
          </div>
        </div>
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
      </div>

      {/* Card Gallery */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {currentStories.map((story, index) => (
            <div
              key={index}
              className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-full h-60">
                <Image
                  src={story.imageSrc}
                  layout="fill"
                  alt={`Image for ${story.title}`}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-500 my-2 text-center text-lg">
                  {story.subtitle}
                </p>
                <a
                  href={story.link}
                  className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300"
                >
                  <span className="mr-2">Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex items-center space-x-3">
              {/* Previous Button */}
              <li>
                <button
                  onClick={paginatePrev}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  &laquo; Previous
                </button>
              </li>

              {/* Next Button */}
              <li>
                <button
                  onClick={paginateNext}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  Next &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
