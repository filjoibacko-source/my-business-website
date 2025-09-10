import Link from "next/link";

export default function Barber() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Step 1: Choose Your Barber</h1>

      <div className="flex flex-col gap-4">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700">
          Barber John
        </button>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700">
          Barber Mike
        </button>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700">
          Barber Sarah
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          href="/reservation/haircut"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
        >
          Next: Choose Haircut
        </Link>
        <Link
          href="/reservation"
          className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-400"
        >
          Back
        </Link>
      </div>
    </main>
  );
}