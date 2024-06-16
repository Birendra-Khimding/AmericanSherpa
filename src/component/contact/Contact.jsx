import React, { useState } from 'react'
import faqData from '../faq/FaqData';
import './contact.css'
import User from '../../images/formUser.png'
import Conversation from '../../images/conversation.png'
import Email from '../../images/email.png'
import ScrollTop from '../scrollToTop/ScrollTop'

const Contact = () => {
ScrollTop();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const [submitted, setSubmitted] = useState(false);
  // handleChange function definition
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData({
      ...formData, // Spread the existing formData state
      [name]: value // Update the property that matches the input's name attribute
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true);

    // Prepare data for backend submission
    console.log('Form data submitted:', formData);

    // Reset the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  }

  const handleThankyou = () => {
    setSubmitted(false);
  }

  return (
    <div className='contactUS'>
      <div className="contactTitle">
        <h2>How Can we Help?</h2>
        <h4> Send Us a Message</h4>
      </div>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <div className="formContainer">
            <div className="firstLastContainer">
            <div className='subContainer'>
              <img src={User} alt="User" />
              <input
                type="text"
                name="firstName"
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='subContainer'>
              <img src={User} alt="User" />
              <input
                type="text"
                name="lastName"
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            </div>
               <div className="emailContainer">
            <div className='subContainer'>
              <img src={Email} alt="Email" />
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            </div>
          </div>
          <div className='message'>
            <img src={Conversation} alt="Conversation" />
            <textarea
              name="message"
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {submitted && <div className="thanksMessage">
        <div className="thanksContainer">
          <button onClick={handleThankyou}> x</button>
          <h3>Thank you for your message!</h3>
        </div>
      </div>}
      <div className="faq">
        <h2>Frequently Asked Question</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <div className="faq-question">
                <span>{faq.question}</span>
                <button onClick={() => toggleFAQ(index)}>
                  {faq.isOpen ? '-' : '+'}
                </button>
              </div>
              <div className={`faq-answer ${faq.isOpen ? 'open' : 'closed'}`}>
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact