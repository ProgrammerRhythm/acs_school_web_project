/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { db } from "./Firebase/firebase"; // Ensure Firebase is configured
import { collection, addDoc } from "firebase/firestore";
import './Style.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "contacts"), formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hide success message after 20 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row rowBox">
         
          <div
            className=" formBox"
            data-aos="fade-up"
          >
            <h4 className="reversestyle" style={{ fontSize: "26px", textAlign: "center" }}>
              Contact With Me<span className="dot">.</span>
            </h4>
            {success && (
              <p style={{ textAlign: "center", color: "green", margin: "10px 0" }}>
                Message sent successfully!
              </p>
            )}
            <form className="contactF" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <br />
              <textarea
                name="message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="off"
              ></textarea>
              <br />
              <button
                className="cBtnC"
                type="submit"
                disabled={isSubmitting}
                style={{ height: "51px" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
