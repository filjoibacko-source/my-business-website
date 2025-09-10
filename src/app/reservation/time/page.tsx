import Link from "next/link";

export default function ChooseTime() {
  const times = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Step 3: Choose Your Time</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg w-full">
        {times.map((slot) => (
          <Link
            key={slot}
            href="/reservation/details"
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold text-center hover:bg-yellow-400 transition"
          >
            {slot}
          </Link>
        ))}
      </div>

      <Link
        href="/reservation/haircut"
        className="mt-8 text-gray-600 hover:text-black underline"
      >
        ← Back to Haircuts
      </Link>
    </main>
  );
}