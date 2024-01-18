import React, { useState } from "react";

const InquiryForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="form-background">
      <div className="form-box">
        <h1>
          <strong>Have Questions?</strong>
        </h1>
        <h3>We're here to help you!</h3>
        <h5>
          Please fill out the form below, and we'll get back to you as soon as
          possible.{" "}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="form-firstline">
            <label>
              First Name
              <input
                className="input-fName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Last Name
              <input
                className="input-lName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-secondline">
            <label>
              Email
              <input
                className="input-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Phone
              <input
                className="input-phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <label>
            Topic
            <input
              className="input-topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
          <label>
            Question
            <textarea
              className="input-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>
          <div className="form-submit">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
          <p>
            By submitting this form, you agree to ACMR Services'{" "}
            <a href="policy link">Privacy Policy</a>
            <br /> and acknowledge you've read our{" "}
            <a href="terms of service">Terms of Service</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
