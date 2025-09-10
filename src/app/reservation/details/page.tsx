import Link from "next/link";

export default function ReservationDetails() {
  return (
    <main className="font-sans min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Final Step: Your Details</h1>
      <p className="mb-6 text-gray-600">Please enter your contact information to confirm your booking.</p>

      <form className="w-full max-w-md flex flex-col gap-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="p-3 border rounded-md"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="p-3 border rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="p-3 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="p-3 border rounded-md"
        />

        <button
          type="submit"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Confirm Reservation
        </button>
      </form>

      <Link
        href="/reservation/time"
        className="mt-6 text-gray-600 hover:text-black underline"
      >
        ← Back to Time Selection
      </Link>
    </main>
  );
}