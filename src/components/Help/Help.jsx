import React, { useState } from 'react';
import "./Help.css";
import Partner from '../helpoptions/Partner';
import Legal from '../helpoptions/Legal';
import Faq from '../helpoptions/Faq';

const Help = () => {
  const [select, setSelect] = useState("partner");
  const handleSelect = (option) => {
    setSelect(option);
  };

  return (
    <div className='Help'>
      <h1>Help & Support</h1>
      <h3>Let's take a step ahead and help you better.</h3>
      <div className="mainhelp">
        <div className="options">
          <div
            className={`selectoption ${select === "partner" ? "active" : ""}`}
            onClick={() => handleSelect("partner")}
          >
            <p>Partner Onboarding</p>
          </div>
          <div
            className={`selectoption ${select === "Legal" ? "active" : ""}`}
            onClick={() => handleSelect("Legal")}
          >
            <p>Legal</p>
          </div>
          <div
            className={`selectoption ${select === "faq" ? "active" : ""}`}
            onClick={() => handleSelect("faq")}
          >
            <p>FAQs</p>
          </div>
        </div>
        <div className="optionsdetails">
          {select === "partner" ? <Partner/>:null}
          {select === "Legal"  ? <Legal/>:null }
          {select === "faq" ? <Faq/>:null}
        </div>
      </div>
    </div>
  );
};

export default Help;
