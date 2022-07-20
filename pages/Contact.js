import React, { useState } from "react";
import contact from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [des, setDes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, email, name, des };

    fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(phone, email, name, des);
        alert("Submitted Successfully!!");
        setName("");
        setEmail("");
        setPhone("");
        setDes("");
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "des") {
      setDes(e.target.value);
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className={contact.container}>
        <form className={contact.form} onSubmit={handleSubmit}>
          <div className={contact.row}>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div className={contact.col - 75}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                name="name"
                placeholder="Your name.."
                className={contact.input}
              />
            </div>
          </div>
          <div className={contact.row}>
            <div>
              <label htmlFor="email" className={contact.label}>
                Email
              </label>
            </div>
            <div>
              <input
                className={contact.input}
                type="text"
                value={email}
                id="email"
                onChange={handleChange}
                name="email"
                placeholder="Your email.."
              />
            </div>
          </div>
          <div className={contact.row}>
            <div>
              <label htmlFor="phone" className={contact.label}>
                Phone
              </label>
            </div>
            <div>
              <input
                className={contact.input}
                type="number"
                id="phone"
                value={phone}
                onChange={handleChange}
                name="phone"
                placeholder="Your Phone.."
              />
            </div>
          </div>

          <div className={contact.row}>
            <div>
              <label htmlFor="subject" className={contact.label}>
                Subject
              </label>
            </div>
            <div>
              <textarea
                id="des"
                value={des}
                onChange={handleChange}
                name="des"
                placeholder="Write something.."
                className={contact.textarea}
              ></textarea>
            </div>
          </div>
          <div className={contact.row}>
            <input type="submit" value="Submit" className={contact.input} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
