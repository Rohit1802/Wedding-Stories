'use client';  // Marking this file as a Client Component

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    estimatedGuestCount: '',
    weddingLocation: '',
    eventDates: '',
    eventFlow: '',
    venue: '',
    services: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API request)
    console.log(formData);
  };

  return (
    <div className="text-center container mx-auto p-9 bg-primary">
      <hr />
      {/* Contact Us Section */}
      <h2 className="text-3xl text-gray-700 py-8 font-thin tracking-[.25em]">CONTACT US</h2>
      <hr />

      {/* Paragraph Content */}
      <p className="font-calluna text-sm text-center mb-9 py-3 tracking-normal max-w-3xl mx-auto">
        <strong>“RAJ KAMAL RAJ”</strong>
        <br />
        — FOUNDER, THIRD EYE ILLUSION MEDIA
      </p>

      {/* Subtitle */}
      <h3 className="text-lg text-gray-600 text-center mb-4">We'd love to hear your story!</h3>

      <p className="font-calluna text-sm text-center mb-6 tracking-normal max-w-3xl mx-auto">
        Please fill in the form below and provide as much detail as possible to help us create an accurate quote. We will try to get back to you within 48hrs, or give us a call at the number below if you don’t hear from us or if it's a last-minute enquiry.
      </p>

      <p className="font-calluna text-sm text-center mb-6 font-bold tracking-normal max-w-3xl mx-auto">
        Third-eye-illusion-media <br />
        +91 92637996669 <br />
        Delhi . Mumbai
      </p>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto  py-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <div className="flex flex-col items-start px-12 ">
            <label htmlFor="name" className="text-sm font-normal">Your Full Name</label>
            <input
              type="text"
              id="name"
            contact
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          <div className="flex flex-col items-start px-12">
            <label htmlFor="email" className="text-sm font-normal">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          <div className="flex flex-col items-start px-12">
            <label htmlFor="phone" className="text-sm font-nomal">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          <div className="flex flex-col items-start px-12">
            <label htmlFor="estimatedGuestCount" className="text-sm font-normal">Estimated Guest Count</label>
            <input
              type="number"
              id="estimatedGuestCount"
              name="estimatedGuestCount"
              value={formData.estimatedGuestCount}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          {/* Event Info */}
          <div className="flex flex-col items-start px-12">
            <label htmlFor="weddingLocation" className="text-sm font-normal">Location of the Wedding</label>
            <input
              type="text"
              id="weddingLocation"
              name="weddingLocation"
              value={formData.weddingLocation}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          <div className="flex flex-col items-start px-12">
            <label htmlFor="eventDates" className="text-sm font-normal">Event Dates</label>
            <input
              type="text"
              id="eventDates"
              name="eventDates"
              value={formData.eventDates}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          <div className="flex flex-col items-start px-12">
            <label htmlFor="eventFlow" className="text-sm font-normal">Tell Us More About Your Wedding - Event Flow, Venues</label>
            <textarea
              id="eventFlow"
              name="eventFlow"
              value={formData.eventFlow}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md resize-none h-24 w-full max-w-xl mx-auto bg-gray-100"
              rows="4"
            />
          </div>

          <div className="flex flex-col items-start px-12">
            <label htmlFor="venue" className="text-sm font-normal">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            />
          </div>

          {/* Services */}
          <div className="flex flex-col items-start px-12">
            <label htmlFor="services" className="text-sm font-normal">What Services Are You Looking For?</label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md w-full max-w-xl mx-auto bg-gray-100"
            >
              <option value="">Select</option>
              <option value="Photography">Photography</option>
              <option value="Films">Films</option>
              <option value="Both">Both Photography and Films</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-gray-700 text-white rounded-md hover:bg-gray-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
