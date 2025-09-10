import Link from "next/link";

export default function ChooseBarber() {
  const barbers = ["John", "Mike", "Alex", "Chris"];

  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Step 1: Choose Your Barber</h1>
      <div className="grid grid-cols-2 gap-6">
        {barbers.map((barber) => (
          <Link
            key={barber}
            href="/reservation/haircut"
            className="bg-yellow-500 text-black px-6 py-4 rounded-md font-semibold hover:bg-yellow-400 text-center"
          >
            {barber}
          </Link>
        ))}
      </div>
    </main>
  );
}