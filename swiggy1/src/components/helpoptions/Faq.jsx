import React from "react";
import "./Faq.css";
import { useState } from "react";
const Section = ({ title, children }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent(!showContent);

  return (
    <div className="section">
      <p className="toggle-text" onClick={toggleContent}>
        {title} {showContent ? "▲" : "▼"}
      </p>
      {showContent && <div className="content">{children}</div>}
      <hr className="divider" />
    </div>
  );
};
const Faq = () => {
  return (
    <div>
      <div className="partner-container">
        <h1>FAQs</h1>

        <Section title="What is Swiggy Customer Care Number?  ">
          <p className="rules">
            We value our customer’s time and hence moved away from a single
            customer care number to a comprehensive chat-based support system
            for quick and easy resolution. You no longer have to go through the
            maze of an IVRS call support. Just search for your issue in the help
            section on this page and initiate a chat with us. A customer care
            executive will be assigned to you shortly. You can also email us
            your issue on support@swiggy.in Note: We value your privacy and your
            information is safe with us. Please do not reveal any personal
            information, bank account number, OTP etc. to another person. A
            Swiggy representative will never ask you for these details. Please
            do not reveal these details to fraudsters and imposters claiming to
            be calling on our behalf. Be vigilant and do not entertain phishing
            calls or emails.
          </p>
          <button className="email-button">SEND AN EMAIL</button>
          <p className="response-time">We will revert within 24-48 hrs</p>
        </Section>

        <Section title="I want to explore career opportunities with Swiggy">
        <p className="link">Join our Team</p>
        <button className="email-button">SEND AN EMAIL</button>
        <p className="response-time">We will revert within 24-48 hrs</p>
        </Section>

        <Section title="I want to provide feedback">
        <button className="email-button">SEND AN EMAIL</button>
        <p className="response-time">We will revert within 24-48 hrs</p>
        </Section>

        <Section title="Can I edit my order?">
          <p className="rules">Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents</p>
        </Section>
        <Section title="I want to cancel my order">
          <p className="rules">We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.
          </p>
        </Section>

        <Section title="Will Swiggy be accountable for quality/quantity?">
        <p className="rules">Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.
        </p></Section>

        <Section title="Is there a minimum order value?">
       <p className="rules"> We have no minimum order value and you can order for any amount. </p>
        </Section>
        <Section title="Do you charge for delivery?">
          <p className="rules">Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. </p>
        </Section>
      </div>
    </div>
  );
};

export default Faq;
