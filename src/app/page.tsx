export default function Home() {
  return (
    <main className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Classic Cuts</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/barbershop-hero.jpg')" }}
      >
        <div className="text-center bg-black/50 p-8 rounded-lg">
          <h2 className="text-5xl font-extrabold mb-6">Your Style, Our Passion</h2>
          <p className="text-lg mb-6">Professional barbers ready to give you the perfect cut.</p>
          <a
  href="/reserve"
  className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
>
  Reserve Now
</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          At Classic Cuts, we’ve been perfecting men’s grooming for over a decade.
          Our skilled barbers combine tradition with modern style to ensure every client looks sharp and confident.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Haircuts</h3>
            <p className="text-gray-600">Classic, modern, and custom cuts tailored to your style.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Beard Trim</h3>
            <p className="text-gray-600">Keep your beard sharp, neat, and perfectly groomed.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Shaves</h3>
            <p className="text-gray-600">A clean, refreshing shave with a traditional touch.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <form
  action="https://formspree.io/f/your-form-id"
  method="POST"
  className="max-w-md mx-auto flex flex-col gap-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="p-3 rounded-md text-black"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="p-3 rounded-md text-black"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={4}
    required
    className="p-3 rounded-md text-black"
  />
  <button
    type="submit"
    className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
  >
    Send Message
  </button>
</form>
      {/* Footer */}
      <footer className="p-6 text-center bg-gray-800 text-gray-400">
        © {new Date().getFullYear()} Classic Cuts. All rights reserved.
      </footer>
    </main>
  );
}