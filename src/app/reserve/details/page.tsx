import Link from "next/link";

export default function Details() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Final Step: Enter Your Details</h1>

      <form className="flex flex-col gap-4 max-w-md w-full">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="p-3 rounded-md border"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="p-3 rounded-md border"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="p-3 rounded-md border"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 rounded-md border"
        />

        <button
          type="submit"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 mt-4"
        >
          Confirm Reservation
        </button>
      </form>

      <div className="flex gap-4 mt-6">
        <Link
          href="/reservation/time"
          className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-400"
        >
          Back
        </Link>
      </div>
    </main>
  );
}