'use client'; // Marking this file as a Client Component

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

  // Handle checkbox input for services
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
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

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      try {
        const formPayload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          guestCount: formData.guestCount,
          weddingDetails: formData.weddingDetails,
          weddingLocation: formData.weddingLocation,
          eventDates: formData.eventDates,
          services: formData.services,
        };

        const response = await fetch('https://herbolife.in/rhradmin/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formPayload),
        });

        const result = await response.json();

        if (result.success) {
          alert(result.message); // Show success message
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
        } else {
          alert(result.message); // Show error message
        }
      } catch (error) {
        alert('An error occurred while submitting the form.');
      }
    }
  };

  if (!isClient) {
    return null; // Return null until the component is mounted on the client-side
  }

  return (
    <div className="w-full min-h-screen bg-primary px-4 py-8">
      <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
      <h2 className="text-3xl text-gray-700 text-center py-8 font-thin tracking-[.25em]">
        CONTACT US
      </h2>
      <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />

      <div className="my-8 flex justify-center">
        <Image
          src="/images/WeddingImg.jpg"
          alt="Wedding Image"
          width={900}
          height={500}
          className="object-cover rounded-lg max-h-[500px]"
        />
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
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
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
          {formErrors.name && <span className="text-sm text-red-500">{formErrors.name}</span>}
        </div>

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
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          {formErrors.email && <span className="text-sm text-red-500">{formErrors.email}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
          {formErrors.phone && <span className="text-sm text-red-500">{formErrors.phone}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="guestCount" className="text-sm font-semibold text-gray-700 mb-2">
            Guest Count <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="How many guests will attend?"
          />
          {formErrors.guestCount && <span className="text-sm text-red-500">{formErrors.guestCount}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="weddingDetails" className="text-sm font-semibold text-gray-700 mb-2">
            Wedding Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="weddingDetails"
            name="weddingDetails"
            value={formData.weddingDetails}
            onChange={handleInputChange}
            rows="4"
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Provide any details about your wedding"
          />
          {formErrors.weddingDetails && (
            <span className="text-sm text-red-500">{formErrors.weddingDetails}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="weddingLocation" className="text-sm font-semibold text-gray-700 mb-2">
            Wedding Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="weddingLocation"
            name="weddingLocation"
            value={formData.weddingLocation}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Where will the wedding be held?"
          />
          {formErrors.weddingLocation && (
            <span className="text-sm text-red-500">{formErrors.weddingLocation}</span>
          )}
        </div>

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
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Event dates"
          />
          {formErrors.eventDates && <span className="text-sm text-red-500">{formErrors.eventDates}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="services" className="text-sm font-semibold text-gray-700 mb-2">
            Services (Optional)
          </label>
          <div className="flex gap-4">
            <label>
              <input
                type="checkbox"
                value="Photography"
                checked={formData.services.includes("Photography")}
                onChange={handleCheckboxChange}
              />{" "}
              Photography
            </label>
            <label>
              <input
                type="checkbox"
                value="Catering"
                checked={formData.services.includes("Catering")}
                onChange={handleCheckboxChange}
              />{" "}
              Catering
            </label>
            <label>
              <input
                type="checkbox"
                value="Music"
                checked={formData.services.includes("Music")}
                onChange={handleCheckboxChange}
              />{" "}
              Music
            </label>
            <label>
              <input
                type="checkbox"
                value="Decor"
                checked={formData.services.includes("Decor")}
                onChange={handleCheckboxChange}
              />{" "}
              Decor
            </label>
          </div>
          {formErrors.services && <span className="text-sm text-red-500">{formErrors.services}</span>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-md"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

