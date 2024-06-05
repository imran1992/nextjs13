import { useState, useEffect, useRef } from "react";
import Style from "./contact-form.module.css";
import Notification from "../ui/notification";

const ContactForm = () => {
  const [reqStatus, setReqStatus] = useState("");
  const [reqError, setReqError] = useState("");
  const formRef = useRef(null);
  const submit = (event) => {
    event.preventDefault();
    const { message, email, name } = event.target;
    const body = {
      message: message.value,
      email: email.value,
      name: name.value,
    };
    console.log("client", body);
    setReqStatus("pending");
    setReqError("");
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body), // Convert to JSON string
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((hhh) => {
        if (hhh.ok) return hhh.json();
        throw hhh.json();
      })
      .then((kk) => {
        console.log("kk", kk);
        setReqStatus("success");
        formRef.current?.reset();
      })
      .catch((error) => {
        setReqError(error.message);
        setReqStatus("error");
      });
  };

  let noti;
  if (reqStatus === "pending") {
    noti = {
      status: reqStatus,
      title: "Sending message...",
      message: "Your message is on its way",
    };
  } else if (reqStatus === "success") {
    noti = {
      status: reqStatus,
      title: "Success!",
      message: "message sent successfully",
    };
  } else if (reqStatus === "error") {
    noti = {
      status: reqStatus,
      title: "Error!",
      message: reqError,
    };
  }

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus("");
        setReqError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  return (
    <section className={Style.contact}>
      <h1>How can I help you?</h1>
      <form className={Style.form} onSubmit={submit} ref={formRef}>
        <div className={Style.controls}>
          <div className={Style.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={Style.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={Style.controls}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" row="5" />
        </div>
        <div className={Style.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {noti && <Notification {...noti} />}
    </section>
  );
};

export default ContactForm;
