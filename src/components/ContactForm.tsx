"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to your API, Formspree, or CRM.
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        Phone <span className="optional">(optional)</span>
        <input type="tel" name="phone" autoComplete="tel" />
      </label>
      <label>
        Bike type
        <select name="bike_type" defaultValue="">
          <option value="">Select…</option>
          <option value="road">Road / gravel</option>
          <option value="mtb">Mountain</option>
          <option value="hybrid">Hybrid / commuter</option>
          <option value="ebike">E-bike</option>
          <option value="kids">Kids / BMX</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        What do you need?
        <textarea
          name="message"
          rows={4}
          required
          placeholder="e.g. Rear wheel won’t stay true, squeaky brakes…"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Send request
      </button>
      <p className="form-note">
        This demo form does not send mail — wire it to your CRM, Formspree, or
        shop software.
      </p>
    </form>
  );
}
