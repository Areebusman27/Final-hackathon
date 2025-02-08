"use client"
import { useState } from "react";


export default function Subscribe(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        plan: "basic",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        agreeToTerms: false,
      });
    
      const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
    
        if (!formData.agreeToTerms) {
          alert("You must agree to the terms and conditions.");
          return;
        }
    
        // Submit form logic (e.g., send data to backend)
        console.log("Form submitted:", formData);
        alert("Subscription successful!");
      };



    return (
        <div className="min-h-screen flex items-center justify-center flex-col ">
             <h1 className="text-3xl mr-40 mb-2 font-bold ">Subscribe Now</h1>
        <form
          className="bg-white p-6 rounded shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
         

          {/* Name */}
          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Email */}
          <label className="block mb-2 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Plan Selection */}
          <label className="block mb-2 font-semibold">Choose Plan</label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="basic">Basic - $10/month</option>
            <option value="pro">Pro - $20/month</option>
            <option value="premium">Premium - $30/month</option>
          </select>

          {/* Payment Details */}
          <label className="block mb-2 font-semibold">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter your card number"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 font-semibold">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mr-2"
              />
              I agree to the <a href="#" className="text-blue-500 underline">terms and conditions</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    )
}