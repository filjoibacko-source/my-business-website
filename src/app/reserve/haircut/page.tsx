import Link from "next/link";

export default function Haircut() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Step 2: Choose Your Haircut</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button className="p-6 border rounded-md shadow hover:shadow-lg">
          Classic Cut
        </button>
        <button className="p-6 border rounded-md shadow hover:shadow-lg">
          Fade
        </button>
        <button className="p-6 border rounded-md shadow hover:shadow-lg">
          Beard Trim
        </button>
        <button className="p-6 border rounded-md shadow hover:shadow-lg">
          Full Shave
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          href="/reservation/time"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
        >
          Next: Choose Time
        </Link>
        <Link
          href="/reservation/barber"
          className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-400"
        >
          Back
        </Link>
      </div>
    </main>
  );
}