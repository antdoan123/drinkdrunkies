import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const senderNameRef = useRef();
  const senderEmailRef = useRef();
  const messageRef = useRef();
  const guestCountRef = useRef();
  const eventTypeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailBody = {
      subject: `KingBar - ${eventTypeRef.current.value} Inquiry from ${senderNameRef.current.value}`,
      text: `
        Name: ${senderNameRef.current.value}
        Email: ${senderEmailRef.current.value}
        Event Type: ${eventTypeRef.current.value}
        Guest Count: ${guestCountRef.current.value}
        Message: ${messageRef.current.value}
      `,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailBody),
      });
      setSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-black text-white px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-8 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-lime-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent mb-4"
          >
            Let&apos;s Talk Cocktails 🍸
          </motion.h1>
          <p className="text-gray-400 mb-8">
            Whether you&apos;re planning a chill backyard hangout or a full-blown rager, we&apos;re here to bring the booze and vibes.
          </p>

          {sent && (
            <p className="text-green-400 italic mb-4">
              ✅ Message sent! We&apos;ll be in touch within 24 hours.
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 p-6 rounded-xl shadow-xl max-w-2xl mx-auto space-y-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                ref={senderNameRef}
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-yellow-300 p-3 w-full placeholder-yellow-100 text-white"
              />
              <input
                type="email"
                ref={senderEmailRef}
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-yellow-300 p-3 w-full placeholder-yellow-100 text-white"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="number"
                ref={guestCountRef}
                placeholder="Estimated Guest Count"
                required
                className="bg-transparent border-b border-yellow-300 p-3 w-full placeholder-yellow-100 text-white"
              />
              <select
                ref={eventTypeRef}
                required
                className="bg-transparent border-b border-yellow-300 p-3 w-full text-black"
              >
                <option value="">Select Event Type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
                <option>Private Party</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              ref={messageRef}
              placeholder="Tell us about your event..."
              rows="5"
              required
              className="bg-transparent border-b border-yellow-300 p-3 w-full placeholder-yellow-100 text-white"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-bold text-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Submit ✉️"}
            </button>
          </form>

          <div className="mt-12 text-sm text-yellow-100">
            Or reach out directly at:{" "}
            <a
              href="mailto:drunkies@gmail.com"
              className="underline hover:text-white"
            >
              drunkies@gmail.com
            </a>{" "}
            | (714) 610-1022
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-xl mb-4 font-semibold text-white">
              Want to see what we offer?
            </h3>
            <Link href="/pricing">
              <button className="bg-lime-500 hover:bg-lime-400 text-black font-bold py-2 px-6 rounded-md transition">
                View Packages
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
