import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">SUCCESS</h1>
        <p className="text-gray-700 mb-2">Your order has been placed.</p>
        <p className="text-gray-700 mb-6">Thank you for shopping with us!</p>
        <Link href="./list">
          <button className="flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            Continue Shopping <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}