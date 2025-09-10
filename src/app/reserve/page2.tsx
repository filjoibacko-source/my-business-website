"use client";
import { useState } from "react";

const barbers = [
  { id: 1, name: "John", specialty: "Classic Cuts", img: "/barber1.jpg" },
  { id: 2, name: "Mike", specialty: "Modern Styles", img: "/barber2.jpg" },
  { id: 3, name: "Alex", specialty: "Beard Expert", img: "/barber3.jpg" },
];

const services = [
  { id: 1, name: "Classic Haircut", price: "$25" },
  { id: 2, name: "Beard Trim", price: "$15" },
  { id: 3, name: "Haircut + Beard", price: "$35" },
];

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  // Handle input updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation Data:", {
      barber: barbers.find(b => b.id === selectedBarber),
      service: services.find(s => s.id === selectedService),
      ...formData,
    });
    alert("Reservation submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow max-w-lg w-full">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Step 1: Choose a Barber</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {barbers.map(barber => (
                <div
                  key={barber.id}
                  onClick={() => setSelectedBarber(barber.id)}
                  className={`p-4 rounded-lg shadow cursor-pointer text-center transition 
                    ${selectedBarber === barber.id ? "border-4 border-yellow-500" : "border"}`}
                >
                  <img src={barber.img} alt={barber.name} className="rounded-full w-24 h-24 mx-auto mb-2" />
                  <h4 className="font-bold">{barber.name}</h4>
                  <p className="text-gray-600">{barber.specialty}</p>
                </div>
              ))}
            </div>
            <button
              disabled={!selectedBarber}
              onClick={() => setStep(2)}
              className="mt-6 w-full bg-yellow-500 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 disabled:opacity-50"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Step 2: Choose a Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {services.map(service => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-lg shadow cursor-pointer text-center transition 
                    ${selectedService === service.id ? "border-4 border-yellow-500" : "border"}`}
                >
                  <h4 className="font-bold">{service.name}</h4>
                  <p className="text-gray-600">{service.price}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-300 px-6 py-3 rounded-md font-bold"
              >
                Back
              </button>
              <button
                disabled={!selectedService}
                onClick={() => setStep(3)}
                className="bg-yellow-500 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Step 3: Select Time & Enter Info</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-3 rounded-md border" />
              <input type="time" name="time" value={formData.time} onChange={handleChange} required className="p-3 rounded-md border" />
              <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required className="p-3 rounded-md border" />
              <input type="text" name="surname" placeholder="Last Name" value={formData.surname} onChange={handleChange} required className="p-3 rounded-md border" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="p-3 rounded-md border" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-3 rounded-md border" />
              
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(2)}
                  type="button"
                  className="bg-gray-300 px-6 py-3 rounded-md font-bold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 px-6 py-3 rounded-md font-bold hover:bg-yellow-400"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}