import React from 'react';

export default function AboutPage() {
    const teamMembers = [
        { name: "Raj Kamal Raj", role: "Founder", image: "/images/team/rkr.jpg" },
        { name: "Raj Hansh Raj", role: "Co - Founder", image: "/images/team/rhr.jpg" },
        { name: "Akshay", role: "Videographer", image: "/images/michael.jpg" },
        { name: "Pramod", role: "Makeup Artist", image: "/images/sarah.jpg" },
        { name: "Shubham", role: "Coordinator", image: "/images/chris.jpg" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 bg-primary">
            {/* First Horizontal Rule */}
            <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />

            {/* Section Title */}
            <h2 className="text-3xl text-gray-700 text-center py-8 font-thin tracking-[.25em]">
                OUR TEAM
            </h2>

            {/* Second Horizontal Rule */}
            <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />

            {/* Adding a gap between the second <hr> and the cards */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
                {/* Lead Photographer card - takes full row on large screens */}
                <div className="lg:col-span-5 flex justify-center">
                    <div className="w-80 h-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                        <img src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-56 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{teamMembers[0].name}</h3>
                            <p className="text-gray-500">{teamMembers[0].role}</p>
                        </div>
                    </div>
                </div>

                {/* Other team members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-5">
                    {teamMembers.slice(1).map((member, index) => (
                        <div key={index} className="w-80 h-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
                            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
