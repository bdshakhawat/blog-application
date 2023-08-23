'use client'
import styles from './Contact.module.css';
 
import React, { useState } from 'react';
// import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: '',
   });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send formData to your backend or handle it as required
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.inputField}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input className={styles.inputField}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input  className={styles.inputField}
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />
        <textarea  textAreaField
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br/> <br/>
        <button className={styles.button}  type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;


