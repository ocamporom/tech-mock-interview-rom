import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../components/InputField";
import styles from "./FamilyRelationsPage.module.css";
import SubmitButton from "../components/SubmitButton";

function FamilyRelationsPage() {
  const [addMember, setAddMember] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const handleClosePopUp = () => {
    setShowMessage(false);
  };

  const handleAddMemberChange = () => {
    setAddMember(!addMember);
  };

  return (
    <>
      <header className="text-center text-4xl font-bold">
                <h1>FAMILY COMPOSITIONS</h1>
      </header>
      <br />

      <div className={styles.InputFields}>
        <div className={styles.SubInputFields}>
          <h6>Please fill up all fields!</h6>
          <InputField label={"Other Source of Income"} />
          <InputField type="number" label={"Birth Order"} />
          <InputField type="number" label={"Total House Population"} />
          <InputField type="number" label={"# of Married Siblings"} />
          <InputField label={"Contributions"} />
        </div>
      </div>

      <div className={styles.optionalForm}>
        <button onClick={handleAddMemberChange} className="p-2 border border-gray-500 rounded-md">
          Want to add Family Member/s?
        </button >
        {addMember && (
          <div className={styles.AddMemberForm}>
            <header className="text-center text-2xl font-bold">
                      <h1>SCHOLAR MANAGEMENT</h1>
            </header>
            <br />

            <InputField label={"Family Member Name"} />
            <InputField
              type="date"
              // value="2024-07-01"
              label={"Date of Birth"}
            />
            <InputField label={"Relationship"} />
            <InputField label={"Civil Status"} />
            <button className="p-2 border border-gray-300 rounded-md">Add</button> 
            <button className="p-2 border border-gray-300 rounded-md">Delete</button>


          </div>

          
        )}
        <br />
        <br />
        <br />
        <br />
        <Link to="/medicalhistory">
          <SubmitButton submitName={"Back to Medical History Page"} />
        </Link>
         
        <Link to="/confirmationpage">
          <SubmitButton submitName={"SUBMIT"} />
        </Link>
        {/* <Link to="/">Basic Info Page</Link>
        <br />
        <Link to="/medicalhistory">Medical History Page</Link>
        <br />
        <Link to="/confirmationpage">SUBMIT!</Link> */}
        {/* <button onClick={handleSubmit}> SUBMIT </button> */}
      </div>

      {/* {showMessage && (
        <div className={styles.showMessage}>
          <h1>Success!</h1>
          <p>Your information has been submitted successfully.</p>
          <button onClick={handleClosePopUp}>Close</button>
        </div>
      )} */}
    </>
  );
}

export default FamilyRelationsPage;
