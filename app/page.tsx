import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="p-4 bg-black flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl font-bold">Audio/Video & Film Portfolio</h2>
        <p className="mt-2 text-gray-400">Showcasing my best work in film production and audio editing</p>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-10">
        <h3 className="text-3xl font-bold mb-6">My Work</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <video controls className="w-full rounded-lg">
              <source src="https://media-hosting.imagekit.io//5f5ff3865e944455/Backyard%20Boy.mp4?Expires=1837177317&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CY5oWKJJXORmvb2Lx2O5LEHv6lel721iB55cVl80c6acRojBVSK8WebLjyF06E7dLs2wmVXuKNgQtUemBeBOxjnFlWIxOge2HWail2bz1~6MPWS8XpEvcLSApL5MwrT7eWkGiz9ZP4A~jYZatePtyxQtcL0Z-Cqc-I2TaAscPtg6uUkCTEmEPP~A8zLilwo1bNt6LbaSHAHrWSZtasr6iD7YksZ4YG5cYcOkLPNMOzD6mXslEV65qr1-341yfXx1X7NOYExhs3ZUNSBHz-EaEXeFTyi6oj3oEeXpU8CU2UqBHlwTM9FmaMi4ogin0dbsOTzxTLsDrjnuI48vtDgHAQ__" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4 className="text-xl font-semibold mt-2">Backyard Boy</h4>
            <p className="text-gray-400">A short film showcasing creative cinematography and editing.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-gray-400">I am passionate about film production, video editing, and audio design. This portfolio showcases my journey and work in this field.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <form action="https://formsubmit.co/tjstudios476@gmail.com" method="POST" className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/thank-you" />
          
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded bg-gray-700 text-white" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded bg-gray-700 text-white" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
          
          <button type="submit" className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600">Send</button>
        </form>
      </section>
    </div>
  );
}
