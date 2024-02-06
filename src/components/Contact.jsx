import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/imgc.png'; // Import your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkxd4jk', 'template_b0txu8y', e.target, 'bSwOm5cz0rI-T_Cos')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Show success toast
        toast.success('Email sent successfully!');
        // Clear form fields after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.error('Error sending email:', error);
        // Show error toast
        toast.error('Error sending email');
      });
  };

  return (
    <div className='p-2 h-screen flex justify-center items-center' id='contact'>
          <div className=" mx-auto relative text-white flex items-center justify-center  bg-neutral-800 rounded-lg p-8 ">
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border rounded px-4 py-2 bg-neutral-700 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border rounded px-4 py-2 bg-neutral-700 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded px-4 py-2 bg-neutral-700 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </form>
        <ToastContainer />
      </div>
      <div className="w-1/2">
        <img src={image} alt="Contact" className="w-full h-auto rounded" />
      </div>
    </div>
    </div>

  );
};

export default Contact;
