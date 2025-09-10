"use client";

import { useState } from "react";

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [barber, setBarber] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Reservation submitted:", {
      barber,
      service,
      time,
      ...formData,
    });
    alert("Reservation submitted! (Check console for details)");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Step 1: Select a Barber</h2>
            <div className="grid gap-4">
              {["John", "Mike", "David"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBarber(b)}
                  className={`p-4 rounded-lg border ${
                    barber === b ? "bg-yellow-500 text-black" : "bg-gray-100"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <span></span>
              <button
                onClick={handleNext}
                disabled={!barber}
                className="bg-gray-900 text-white px-6 py-2 rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Step 2: Select a Haircut</h2>
            <div className="grid gap-4">
              {["Classic Cut", "Fade", "Buzz Cut"].map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={`p-4 rounded-lg border ${
                    service === s ? "bg-yellow-500 text-black" : "bg-gray-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                className="bg-gray-300 px-6 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!service}
                className="bg-gray-900 text-white px-6 py-2 rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Step 3: Select a Time</h2>
            <div className="grid gap-4">
              {["10:00 AM", "12:00 PM", "3:00 PM"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`p-4 rounded-lg border ${
                    time === t ? "bg-yellow-500 text-black" : "bg-gray-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                className="bg-gray-300 px-6 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!time}
                className="bg-gray-900 text-white px-6 py-2 rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Step 4: Your Details</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="grid gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Surname"
                value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleBack}
                  type="button"
                  className="bg-gray-300 px-6 py-2 rounded"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
