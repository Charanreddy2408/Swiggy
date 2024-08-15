import React, { useState } from "react";
import "./Partner.css";

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

const Partner = () => {
  return (
    <div className="partner-container">
      <h1>Partner Onboarding</h1>

      <Section title="I want to partner my restaurant with Swiggy">
        <p className="link">Partner with us</p>
        <button className="email-button">SEND AN EMAIL</button>
        <p className="response-time">We will revert within 24-48 hrs</p>
      </Section>

      <Section title="What are the mandatory documents needed to list my restaurant on Swiggy?">
        <p className="rules">
          - Copies of the below documents are mandatory
          <br /> - FSSAI Licence OR FSSAI Acknowledgement
          <br /> - Pan Card
          <br /> - GSTIN Certificate
          <br /> - Cancelled Cheque OR bank Passbook
          <br /> - Menu
        </p>
      </Section>

      <Section title="I want to opt-out from Google reserve">
        <button className="email-button">SEND AN EMAIL</button>
      </Section>

      <Section title="After I submit all documents, how long will it take for my restaurant to go live on Swiggy?">
        <p className="response-time">
          After all mandatory documents have been received and verified it takes
          up to 7-10 working days for the onboarding to be completed and make
          your restaurant live on the platform.
        </p>
      </Section>

      <Section title="Who should I contact if I need help & support in getting onboarded?">
        <p className="rules">
          You can connect with Partner Support on 080-67466777/68179777 or write
          to partnersuport@swiggy.in
        </p>
        <button className="email-button">SEND AN EMAIL</button>
        <p className="response-time">We will revert within 24-48 hrs</p>
      </Section>

      <Section title="I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?">
        <p className="rules">
          FSSAI licence is a mandatory requirement according to the government’s
          policies. However, if you are yet to receive the licence at the time
          of onboarding, you can proceed with the acknowledgement number which
          you will have received from FSSAI for your registration.
        </p>
      </Section>
    </div>
  );
};

export default Partner;
