import React from "react";
import Image from "next/image";

export default function Stories() {
  return (
    <div className="bg-primary p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <hr className="border-t-2 border-gray-300 mx-auto w-2/3 my-4" />
        <h2 className="text-3xl text-gray-700 font-thin tracking-widest">
          STORIES
        </h2>
        <p className="text-lg font-thin text-gray-400 italic mt-2">
          Delve deeper into our world of story-telling
        </p>
        <hr className="border-t-2 border-gray-300 mx-auto w-2/3 my-4" />
      </div>

      {/* Card Gallery */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {/* Card 1: TWIN FLAMES */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                TWIN FLAMES
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg"> Bianca & Dev, Jaisalmer</p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                They've been labeled as high school sweethearts, best friends, and soulmates, but these words hardly capture the essence of their connection. To them, their love is akin to that of twin flames, two halves of the same soul, destined to be together.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: LOVE IN BLACK & WHITE */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image4.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                LOVE IN BLACK & WHITE
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg">Natasa & Hardik, Udaipur </p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                Starkly opposite as people, their lives traversed paths they’d never imagined and one evening as they bumped into each other at a night club in Mumbai, the floor lit up to their sparkling chemistry as they gradually found a formidable home in each other.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: A THOUSAND MILES TO YOU */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image8.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                A THOUSAND MILES
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg">Nikita and Philippe's</p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                Nikita and Philippe's love story is truly inspiring, a testament to the power of connection and commitment. Their journey from university classmates to partners who thrived despite the challenges of long-distance is a narrative of resilience, love, and shared exploration.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 4: A Celebration to Remember */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image5.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                A Celebration to Remember
              </h3>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">John and Nikki</p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                The quaint Swiss town of Montreux plays host to folks from London and Dubai and guests from all across the globe as they all come together to celebrate this grand Sindhi-Punjabi wedding where a shy couple revels in the basking glory of love, life, and laughter.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Repeat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: TWIN FLAMES */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image6.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                TWIN FLAMES
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg"> Bianca & Dev, Jaisalmer</p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                They've been labeled as high school sweethearts, best friends, and soulmates, but these words hardly capture the essence of their connection. To them, their love is akin to that of twin flames, two halves of the same soul, destined to be together.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: LOVE IN BLACK & WHITE */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image7.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                LOVE IN BLACK & WHITE
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg">Natasa & Hardik, Udaipur </p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                Starkly opposite as people, their lives traversed paths they’d never imagined and one evening as they bumped into each other at a night club in Mumbai, the floor lit up to their sparkling chemistry as they gradually found a formidable home in each other.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: A THOUSAND MILES TO YOU */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image3.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                A THOUSAND MILES
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg">Nikita and Philippe's</p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                Nikita and Philippe's love story is truly inspiring, a testament to the power of connection and commitment. Their journey from university classmates to partners who thrived despite the challenges of long-distance is a narrative of resilience, love, and shared exploration.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 4: A Celebration to Remember */}
          <div className="overflow-hidden hover:scale-105 hover:rounded-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image
                src="/images/stories/image2.avif"
                layout="fill"
                alt="Card Image"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 hover:text-blue-500 transition-colors duration-300">
                A Celebration to Remember
              </h3>
              <p className="text-gray-500 my-2 text-center text-lg">John and Nikki</p>
              <p className="text-md text-gray-400 mt-2 text-center sm:text-center">
                The quaint Swiss town of Montreux plays host to folks from London and Dubai and guests from all across the globe as they all come together to celebrate this grand Sindhi-Punjabi wedding where a shy couple revels in the basking glory of love, life, and laughter.
              </p>
              <a href="#" className="uppercase text-gray-600 flex items-center justify-center mt-4 py-2 px-4 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300">
                <span className="mr-2">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
