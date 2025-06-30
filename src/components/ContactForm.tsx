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
      className="w-full max-w-2xl mx-auto p-8 rounded-lg border border-cyan-400 text-slate-100 font-semibold"
    >
      <h2 className="text-2xl font-semibold text-cyan-100 mb-4 text-center">
        Contact Form
      </h2>

      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent text-slate-100 
           hover:bg-cyan-200/20 hover:backdrop-blur-sm font-normal
           focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none
           transition"
        />
        <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent text-slate-100 
           hover:bg-cyan-200/20 hover:backdrop-blur-sm font-normal
           focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none
           transition"
        />
        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent text-slate-100 
           hover:bg-cyan-200/20 hover:backdrop-blur-sm font-normal
           focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none
           transition"

        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent text-slate-100 
           hover:bg-cyan-200/20 hover:backdrop-blur-sm font-normal
           focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none
           transition"
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full border border-cyan-400 rounded p-2 bg-transparent text-slate-100 
           hover:bg-cyan-200/20 hover:backdrop-blur-sm font-normal
           focus:bg-cyan-300/20 focus:backdrop-blur-sm focus:outline-none
           transition"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          disabled={state.submitting}
            className="border border-cyan-400 text-cyan-300 px-6 py-2 rounded 
             bg-transparent 
             hover:bg-cyan-200/20 hover:backdrop-blur-sm 
             focus:bg-cyan-500/20 focus:backdrop-blur-sm focus:outline-none 
             transition"
        >
          Send
        </button>
      </div>
    </form>
  );
}
