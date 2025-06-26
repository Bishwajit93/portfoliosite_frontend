'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyzjjjkp");

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">✅ Thanks for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">📨 Contact Form</h2>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
