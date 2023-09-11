import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to send the form data
    console.log(formData);
  };

  return (
    <div id="aboutme" className="bg-gray-900 font-deca font-semibold text-4xl p-3">
      <p className="flex justify-center items-center mt-12 mb-12">
        <span className="text-white">Contact</span>
        <span className="text-yellow-500 ml-3">Me</span>
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-md mx-auto">
        <form
          className="bg-gray-900 bg-opacity-90 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
 <div className="mb-4">
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
    id="email"
    type="email"
    placeholder="Email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    style={{
      backgroundColor: "transparent",
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
    }} // Set specific borders to transparent
  />
</div>

<div className="mb-6">
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
    id="message"
    rows="4"
    placeholder="Message"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    style={{
      backgroundColor: "transparent",
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
    }} // Set specific borders to transparent
  />
</div>
<div className="flex items-center justify-between">
          <button
  className="border-2 border-black bg-black text-gray-500 font-semi-bold py-2 px-4 rounded-8 focus:outline-none focus:shadow-outline text-2xl"
  type="submit"
  style={{ borderRadius: '20px' }} // Inline style for border radius
>
  Contact
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;






