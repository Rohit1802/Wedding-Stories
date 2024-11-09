'use client';  // Marking this file as a Client Component

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    brideFirstName: '',
    brideLastName: '',
    groomFirstName: '',
    groomLastName: '',
    weddingDate: '',
    eventsDetails: '',
    venue: '',
    contactNumber: '',
    email: '',
    howDidYouHear: '',
    yourStory: '',
    yourThoughts: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission logic
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-9 bg-primary">
      <hr />
      {/* Contact Us Section */}
      <h2 className="text-3xl font-semibold text-center mb-4 tracking-wider font-hypatia-sans-pro">
        Contact Us
      </h2>
      <hr />
      
      {/* Combined Paragraph Content with limited width */}
      <p className="font-calluna text-sm text-center mb-9 tracking-normal max-w-3xl mx-auto">
        We love making films and are honoured to be considered by you to document your wedding story for posterity. This website best showcases our work – every film, every image, and every song here represents who we are and what we stand for. If you would like your wedding story to be filmed by us, grab a cup of coffee and write in every detail you can think of. Tell us your story. This helps us gain insight into your personalities and know you better as people. In fact, some of our best films have started off as chronicles on the keyboard right in front of you. Years later, when you see your films & photographs, not only will you begin to relive the priceless moments of these special days but also see how beautifully and gracefully your love has matured. We would love to curate this film for you as nothing gives us greater pleasure than to make these once-in-a-lifetime films from moments that don’t have a second take.
      </p>

      <p className="font-calluna text-sm text-center mb-2 tracking-normal max-w-3xl mx-auto">
        <strong>“Harpreet Bachher”</strong><br />
        — FOUNDER, THE WEDDING STORY
      </p>

      {/* Subtitle */}
      <h3 className="text-lg text-gray-600 text-center mb-4">We'd love to hear your story!</h3>

      <p className="font-calluna text-sm text-center mb-6 tracking-normal max-w-3xl mx-auto">
        Please fill out the form below to get in touch with us.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bride's Name */}
          <div className="flex flex-col">
            <label htmlFor="brideFirstName" className="text-sm font-medium">Bride's First Name</label>
            <input
              type="text"
              id="brideFirstName"
              name="brideFirstName"
              value={formData.brideFirstName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="brideLastName" className="text-sm font-medium">Bride's Last Name</label>
            <input
              type="text"
              id="brideLastName"
              name="brideLastName"
              value={formData.brideLastName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Groom's Name */}
          <div className="flex flex-col">
            <label htmlFor="groomFirstName" className="text-sm font-medium">Groom's First Name</label>
            <input
              type="text"
              id="groomFirstName"
              name="groomFirstName"
              value={formData.groomFirstName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="groomLastName" className="text-sm font-medium">Groom's Last Name</label>
            <input
              type="text"
              id="groomLastName"
              name="groomLastName"
              value={formData.groomLastName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Wedding Date */}
          <div className="flex flex-col">
            <label htmlFor="weddingDate" className="text-sm font-medium">Wedding Date</label>
            <input
              type="date"
              id="weddingDate"
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="flex flex-col">
          <label htmlFor="eventsDetails" className="text-sm font-medium">Event Details</label>
          <textarea
            id="eventsDetails"
            name="eventsDetails"
            value={formData.eventsDetails}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md resize-none h-32"
            rows="4"
          />
        </div>

        {/* Venue */}
        <div className="flex flex-col">
          <label htmlFor="venue" className="text-sm font-medium">Venue</label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="contactNumber" className="text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* How did you hear about us */}
        <div className="flex flex-col">
          <label htmlFor="howDidYouHear" className="text-sm font-medium">How did you hear about us?</label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Instagram">Instagram</option>
            <option value="Friend's Wedding">Friend's Wedding</option>
            <option value="Magazine">Magazine</option>
            <option value="Facebook">Facebook</option>
            <option value="Relative/Friend">Through a relative / friend</option>
          </select>
        </div>

        {/* Story */}
        <div className="flex flex-col">
          <label htmlFor="yourStory" className="text-sm font-medium">Your Story</label>
          <textarea
            id="yourStory"
            name="yourStory"
            value={formData.yourStory}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md resize-none h-32"
            rows="4"
          />
        </div>

        {/* Thoughts */}
        <div className="flex flex-col">
          <label htmlFor="yourThoughts" className="text-sm font-medium">Your Thoughts</label>
          <textarea
            id="yourThoughts"
            name="yourThoughts"
            value={formData.yourThoughts}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md resize-none h-32"
            rows="4"
          />
        </div>

        <button type="submit" className="w-full py-3 bg-gray-700 text-white rounded-md hover:bg-gray-900">Submit</button>
      </form>
    </div>
  );
}
