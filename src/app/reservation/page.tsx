import Link from "next/link";

export default function Reservation() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Book Your Reservation</h1>
      <p className="mb-6 text-gray-600">Start by selecting your barber.</p>

      <div className="flex gap-4">
        <Link
          href="/reservation/barber"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
        >
          Choose Barber
        </Link>

        <Link
          href="/"
          className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}