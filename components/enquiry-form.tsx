"use client";

import { useState, type FormEvent } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // This demonstration intentionally sends and stores no form data.
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <div className="enquiry-panel">
      <div className="enquiry-panel__heading">
        <p className="eyebrow">Demo form</p>
        <h2>Start a conversation</h2>
        <p>
          This form demonstrates the intended interface. It does not contact a
          school or submit your details anywhere.
        </p>
      </div>

      <div className="demo-warning" role="note">
        Please do not enter real personal or contact information into this
        fictional demo.
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="enquiry-name">Parent or guardian name</label>
          <input
            autoComplete="off"
            id="enquiry-name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-stage">Area of interest</label>
          <select
            defaultValue=""
            id="enquiry-stage"
            name="stage"
            required
          >
            <option disabled value="">
              Choose a learning stage
            </option>
            <option value="early-years">Early Years</option>
            <option value="primary">Primary Learning</option>
            <option value="secondary">Secondary Learning</option>
            <option value="general">General enquiry</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-email">Email address</label>
          <input
            autoComplete="off"
            id="enquiry-email"
            name="email"
            placeholder="name@example.com"
            type="email"
          />
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-message">What would you like to ask?</label>
          <textarea
            id="enquiry-message"
            name="message"
            placeholder="Write a sample enquiry..."
            required
            rows={4}
          />
        </div>

        <button className="button button--full" type="submit">
          Preview form response <span aria-hidden="true">→</span>
        </button>

        {submitted && (
          <p aria-live="polite" className="form-feedback" role="status">
            Demo complete. Nothing was sent or saved. A real website would
            connect this form to an approved school contact workflow.
          </p>
        )}
      </form>
    </div>
  );
}