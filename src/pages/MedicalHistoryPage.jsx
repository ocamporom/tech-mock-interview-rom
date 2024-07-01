import React, { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import style from "../pages/MedicalHistoryPage.module.css";
import Header from "../components/Header";

const MedicalHistoryPage = () => {
  const [drinkAlcohol, setDrinkAlcohol] = useState(false); // not showing by defualt kasi false
  const [smoke, setSmoke] = useState(false);
  const [alcoholFrequency, setAlcoholFrequency] = useState("");
  const [smokingFrequency, setSmokingFrequency] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [otherConditions, setOtherConditions] = useState("");

  const handleAlcoholChange = (e) => {
    setDrinkAlcohol(e.target.value === "yes");
    if (e.target.value === "no") {
      setAlcoholFrequency(""); //if no, wala laman
    }
  };

  const handleSmokingChange = (e) => {
    setSmoke(e.target.value === "yes");
    if (e.target.value === "no") {
      setSmokingFrequency("");
    }
  };

  return (
    <div className={style.medicalInfo}>
      <div className={style.headerName}>
        <Header headerName={"MEDICAL HISTORY PAGE"} />
      </div>
      <div>
        <label>
          Do you drink alcohol?
          <select
            value={drinkAlcohol ? "yes" : "no"}
            onChange={handleAlcoholChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {drinkAlcohol && ( // always remember boolean variable
          <div>
            <label>How often do you drink?</label>
            <br />
            <textarea
              value={alcoholFrequency}
              onChange={(e) => setAlcoholFrequency(e.target.value)}
              rows={4}
              cols={50}
              placeholder="how many cases?"
            />
          </div>
        )}
      </div>

      <div>
        <label>
          Do you smoke?
          <select value={smoke ? "yes" : "no"} onChange={handleSmokingChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {smoke && (
          <div>
            <label>How often do you smoke?</label>
            <br />
            <textarea
              value={smokingFrequency}
              onChange={(e) => setSmokingFrequency(e.target.value)}
              rows={4}
              cols={50}
              placeholder="How many reams?"
            />
          </div>
        )}
      </div>

      <div>
        <label>Blood type:</label>
        <br />
        <select id="bloodType">
          <option value="A+">A positive (A+)</option>
          <option value="A-">A negative (A-)</option>
          <option value="B+">B positive (B+)</option>
          <option value="B-">B negative (B-)</option>
          <option value="AB+">AB positive (AB+)</option>
          <option value="AB-">AB negative (AB-)</option>
          <option value="O+">O positive (O+)</option>
          <option value="O-">O negative (O-)</option>
        </select>

        
      </div>

      <div>
        <label>Other previous conditions:</label>
        <br />
        <textarea
          value={otherConditions}
          onChange={(e) => setOtherConditions(e.target.value)}
          rows={4}
          cols={50}
          placeholder="List any other previous medical conditions"
        />
      </div>
      <SubmitButton />
    </div>
  );
};

export default MedicalHistoryPage;
