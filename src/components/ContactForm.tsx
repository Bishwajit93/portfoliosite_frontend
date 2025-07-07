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
      className="w-full"
    >
      <h2 className="text-3xl font-bold text-cyan-100 mb-6 text-center glow-text">
        Contact Form
      </h2>

      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold">First Name</label>
        <input id="firstName" type="text" name="firstName" required
          className="w-full rounded-lg px-2 py-1.5 text-sm bg-transparent border border-cyan-400
            hover:bg-cyan-200/10 focus:bg-cyan-300/10 outline-none transition" />
        <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold mt-1">Last Name</label>
        <input id="lastName" type="text" name="lastName" required
          className=" w-full rounded-lg bg-transparent border border-cyan-400
          hover:bg-cyan-200/10 focus:bg-cyan-300/10 outline-none transition" />
        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mt-1">Email Address</label>
        <input id="email" type="email" name="email" required
          className=" w-full rounded-lg bg-transparent border border-cyan-400
          hover:bg-cyan-200/10 focus:bg-cyan-300/10 outline-none transition" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mt-1">Message</label>
        <textarea id="message" name="message" rows={3} required
          className=" w-full rounded-lg bg-transparent border border-cyan-400
          hover:bg-cyan-200/10 focus:bg-cyan-300/10 outline-none transition" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="text-center mt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="border border-cyan-400 text-cyan-300 px-8 rounded-lg 
          hover:bg-cyan-200/10 transition"
        >
          Send
        </button>
      </div>
    </form>
  );
}
