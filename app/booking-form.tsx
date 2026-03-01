"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type ServiceOption = {
  title: string;
};

type BookingFormProps = {
  services: readonly ServiceOption[];
};

export default function BookingForm({ services }: BookingFormProps) {
  const [thankYouName, setThankYouName] = useState("");
  const earliestDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookingForm = event.currentTarget;
    const formData = new FormData(bookingForm);
    const fullName = formData.get("name")?.toString().trim() ?? "";
    setThankYouName(fullName.split(" ")[0] || "there");
    bookingForm.reset();
  };

  return (
    <form onSubmit={handleBookingSubmit} className="rounded-[1.7rem] border border-[rgba(208,175,146,0.45)] bg-[rgba(255,252,248,0.84)] p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-[#4d3c34]">Name</span>
          <input name="name" type="text" required autoComplete="name" className="field" />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-[#4d3c34]">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className="field" />
        </label>

        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          <span className="font-medium text-[#4d3c34]">Email</span>
          <input name="email" type="email" required autoComplete="email" className="field" />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-[#4d3c34]">Service</span>
          <select name="service" required defaultValue="" className="field">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-[#4d3c34]">Preferred Date</span>
          <input name="date" type="date" required min={earliestDate} className="field" />
        </label>

        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          <span className="font-medium text-[#4d3c34]">Notes</span>
          <textarea
            name="notes"
            rows={3}
            className="field"
            placeholder="Share your colour goals, current tone or any preferences."
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-4 w-full">
        Send Booking Request
      </button>

      {thankYouName ? (
        <p className="mt-3 text-sm text-[#5d493f]" aria-live="polite">
          Thanks {thankYouName}, your request is in. We will confirm shortly.
        </p>
      ) : null}
    </form>
  );
}
