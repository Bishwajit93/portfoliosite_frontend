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
      className="w-full max-w-2xl mx-auto p-8 rounded-2xl border border-cyan-400 
       text-slate-100 font-semibold shadow-[0_0_25px_rgba(34,211,238,0.2)] 
       backdrop-blur-lg bg-cyan-400/5 transition-all"
    >
      <h2 className="text-3xl font-bold text-cyan-100 mb-6 text-center glow-text">
        Contact Form
      </h2>

      {/* FIRST NAME */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold mb-1">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          className="mt-1 w-full rounded-xl p-3 bg-transparent border border-cyan-400
           text-slate-100 shadow-inner shadow-cyan-400/10
           hover:bg-cyan-200/10 hover:shadow-cyan-400/20
           focus:bg-cyan-300/10 focus:shadow-cyan-400/30
           outline-none transition-all"
        />
        <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
      </div>

      {/* LAST NAME */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold mb-1">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          className="mt-1 w-full rounded-xl p-3 bg-transparent border border-cyan-400
           text-slate-100 shadow-inner shadow-cyan-400/10
           hover:bg-cyan-200/10 hover:shadow-cyan-400/20
           focus:bg-cyan-300/10 focus:shadow-cyan-400/30
           outline-none transition-all"
        />
        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
      </div>

      {/* EMAIL */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl p-3 bg-transparent border border-cyan-400
           text-slate-100 shadow-inner shadow-cyan-400/10
           hover:bg-cyan-200/10 hover:shadow-cyan-400/20
           focus:bg-cyan-300/10 focus:shadow-cyan-400/30
           outline-none transition-all"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* SUBJECT */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="mt-1 w-full rounded-xl p-3 bg-transparent border border-cyan-400
           text-slate-100 shadow-inner shadow-cyan-400/10
           hover:bg-cyan-200/10 hover:shadow-cyan-400/20
           focus:bg-cyan-300/10 focus:shadow-cyan-400/30
           outline-none transition-all"
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </div>

      {/* MESSAGE */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-xl p-3 bg-transparent border border-cyan-400
           text-slate-100 shadow-inner shadow-cyan-400/10
           hover:bg-cyan-200/10 hover:shadow-cyan-400/20
           focus:bg-cyan-300/10 focus:shadow-cyan-400/30
           outline-none transition-all"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* SUBMIT */}
      <div className="text-center mt-6">
        <button
          type="submit"
          disabled={state.submitting}
          className="border border-cyan-400 text-cyan-300 px-8 py-3 rounded-xl 
           bg-transparent shadow-md shadow-cyan-400/20
           hover:bg-cyan-200/10 hover:shadow-cyan-400/30
           focus:bg-cyan-300/10 focus:shadow-cyan-400/40
           transition-all"
        >
          Send
        </button>
      </div>
    </form>
  );
}
