'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xyzjjjkp');

  if (state.succeeded) {
    return (
      <p className="text-green-300 font-semibold text-center">
        ✅ Thanks for your message!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl space-y-4 p-6 rounded-lg shadow-md border border-cyan-500 bg-black/30 backdrop-blur-md"
    >
      <h2 className="text-2xl font-semibold text-cyan-100 mb-4 text-center">
        Contact Form
      </h2>

      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-cyan-200">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          className="mt-1 w-full border border-gray-300 rounded p-2 bg-black/20 text-white"
        />
        <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-cyan-200">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          className="mt-1 w-full border border-gray-300 rounded p-2 bg-black/20 text-white"
        />
        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cyan-200">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 rounded p-2 bg-black/20 text-white"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-cyan-200">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="mt-1 w-full border border-gray-300 rounded p-2 bg-black/20 text-white"
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cyan-200">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full border border-gray-300 rounded p-2 bg-black/20 text-white"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded"
        >
          Send
        </button>
      </div>
    </form>
  );
}
