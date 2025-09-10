import Link from "next/link";

export default function Time() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Step 3: Choose Your Time</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700">
          10:00 AM
        </button>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700">
          12:00 PM
        </button>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700">
          2:00 PM
        </button>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700">
          4:00 PM
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          href="/reservation/details"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
        >
          Next: Enter Details
        </Link>
        <Link
          href="/reservation/haircut"
          className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-400"
        >
          Back
        </Link>
      </div>
    </main>
  );
}