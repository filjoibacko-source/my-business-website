import Link from "next/link";

export default function ChooseHaircut() {
  const haircuts = [
    { name: "Classic Cut", price: "$25" },
    { name: "Fade", price: "$30" },
    { name: "Beard Trim", price: "$15" },
    { name: "Full Service (Cut + Beard)", price: "$40" },
  ];

  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Step 2: Choose Your Haircut</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
        {haircuts.map((cut) => (
          <Link
            key={cut.name}
            href="/reservation/time"
            className="bg-white border rounded-md shadow p-6 text-center hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{cut.name}</h2>
            <p className="text-gray-600">{cut.price}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/reservation/barber"
        className="mt-8 text-gray-600 hover:text-black underline"
      >
        ← Back to Barbers
      </Link>
    </main>
  );
}