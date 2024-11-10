"use client"; // Marking this file as a Client Component

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from next/image

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestCount: '',
    weddingDetails: '',
    weddingLocation: '',
    eventDates: '',
    services: [],
  });

  const [formErrors, setFormErrors] = useState({});
  const [isClient, setIsClient] = useState(false); // State to track if we are on the client-side

  // Ensure we are on the client side before rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox input
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const newServices = checked
      ? [...formData.services, value]
      : formData.services.filter((service) => service !== value);
    setFormData({
      ...formData,
      services: newServices,
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation check (customized as needed)
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.guestCount) errors.guestCount = "Guest count is required.";
    if (!formData.weddingDetails) errors.weddingDetails = "Wedding details are required.";
    if (!formData.weddingLocation) errors.weddingLocation = "Wedding location is required.";
    if (!formData.eventDates) errors.eventDates = "Event date is required.";
    if (formData.services.length === 0) errors.services = "Please select at least one service.";

    setFormErrors(errors);

    // If no errors, show success alert (for now, just display a success message)
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        guestCount: '',
        weddingDetails: '',
        weddingLocation: '',
        eventDates: '',
        services: [],
      });
    }
  };

  if (!isClient) {
    // Return null or loading spinner while waiting for client-side rendering
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-primary px-4 py-8">
      <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
      {/* Contact Us Section */}
      <h2 className="text-3xl text-gray-700 text-center py-8 font-thin tracking-[.25em]">
        CONTACT US
      </h2>
      <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />

      {/* Image Section */}
      <div className="my-8 flex justify-center">
        <Image
          src="/images/WeddingImg.jpg"
          alt="Wedding Image"
          width={900}
          height={500}
          className="object-cover rounded-lg max-h-[500px]"
        />
      </div>

      {/* Text Content */}
      <p className="text-lg text-center mb-4 max-w-3xl mx-auto leading-relaxed text-gray-800">
        <strong className="text-xl text-gray-900 font-semibold">
          “Harpreet Bachher”
        </strong>
        <div className="text-sm text-gray-600 mt-2">
          <span className="block">— FOUNDER,</span>
          <span className="text-primary block">THE WEDDING STORY</span>
        </div>
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2 leading-relaxed">
        We’d love to hear your story!
      </h3>

      <p className="text-base text-gray-700 text-center mb-4 max-w-3xl mx-auto tracking-wide">
        Please fill out the form below to get in touch with us. We’re excited to
        learn more about your wedding journey and how we can be a part of it.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your full name"
          />
          {formErrors.name && <span className="text-red-500 text-xs mt-1">{formErrors.name}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your email address"
          />
          {formErrors.email && <span className="text-red-500 text-xs mt-1">{formErrors.email}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your phone number"
          />
          {formErrors.phone && <span className="text-red-500 text-xs mt-1">{formErrors.phone}</span>}
        </div>

        {/* Estimated Guest Count */}
        <div className="flex flex-col">
          <label htmlFor="guestCount" className="text-sm font-semibold text-gray-700 mb-2">
            Estimated Guest Count <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter estimated number of guests"
          />
          {formErrors.guestCount && <span className="text-red-500 text-xs mt-1">{formErrors.guestCount}</span>}
        </div>

        {/* Tell Us More About Your Wedding */}
        <div className="flex flex-col">
          <label htmlFor="weddingDetails" className="text-sm font-semibold text-gray-700 mb-2">
            Tell us more about your wedding - event flow, venues. <span className="text-red-500">*</span>
          </label>
          <textarea
            id="weddingDetails"
            name="weddingDetails"
            rows="4"
            value={formData.weddingDetails}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            placeholder="Describe your event details"
          ></textarea>
          {formErrors.weddingDetails && <span className="text-red-500 text-xs mt-1">{formErrors.weddingDetails}</span>}
        </div>

        {/* Location of the Wedding */}
        <div className="flex flex-col">
          <label htmlFor="weddingLocation" className="text-sm font-semibold text-gray-700 mb-2">
            Location of the wedding <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="weddingLocation"
            name="weddingLocation"
            value={formData.weddingLocation}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter the wedding location"
          />
          {formErrors.weddingLocation && <span className="text-red-500 text-xs mt-1">{formErrors.weddingLocation}</span>}
        </div>

        {/* Event Dates */}
        <div className="flex flex-col">
          <label htmlFor="eventDates" className="text-sm font-semibold text-gray-700 mb-2">
            Event Dates <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="eventDates"
            name="eventDates"
            value={formData.eventDates}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your wedding/event dates"
          />
          {formErrors.eventDates && <span className="text-red-500 text-xs mt-1">{formErrors.eventDates}</span>}
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            What services would you like? <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="service1"
                name="services"
                value="Photography"
                checked={formData.services.includes("Photography")}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary-500"
              />
              <label htmlFor="service1" className="ml-2 text-sm">Photography</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="service2"
                name="services"
                value="Videography"
                checked={formData.services.includes("Videography")}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary-500"
              />
              <label htmlFor="service2" className="ml-2 text-sm">Videography</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="service3"
                name="services"
                value="Wedding Planning"
                checked={formData.services.includes("Wedding Planning")}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary-500"
              />
              <label htmlFor="service3" className="ml-2 text-sm">Wedding Planning</label>
            </div>
          </div>
          {formErrors.services && <span className="text-red-500 text-xs mt-1">{formErrors.services}</span>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold bg-gray-700 hover:bg-gray-600 hover:transition rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
