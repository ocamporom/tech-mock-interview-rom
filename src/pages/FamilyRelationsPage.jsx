import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import InputField from "../components/InputField";
import styles from "./FamilyRelationsPage.module.css";
import SubmitButton from "../components/SubmitButton";

function FamilyRelationsPage() {
  const [addMember, setAddMember] = useState(false); // State for managing addition of family members
  const [showMessage, setShowMessage] = useState(false); // State for showing success message

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const handleClosePopUp = () => {
    setShowMessage(false);
  };

  const handleAddMemberChange = () => {
    setAddMember(!addMember); // Toggle addMember state
  };

  return (
    <>
         <header className="text-center text-4xl font-bold">
                <h1>FAMILY COMPOSITIONS</h1>
      </header><br/>
         
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
        <button onClick={handleAddMemberChange}>
          Want to add Family Member/s?
        </button>

        {addMember && (
          <div className={styles.AddMemberForm}>
            <InputField label={"Family Member Name"} />
            <InputField
              type="date"
              // value="2024-07-01"
              label={"Date of Birth"}
            />
            <InputField label={"Relationship"} />
            <InputField label={"Civil Status"} />
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

      {showMessage && (
        <div className={styles.showMessage}>
          <h1>Success!</h1>
          <p>Your information has been submitted successfully.</p>
          <button onClick={handleClosePopUp}>Close</button>
        </div>
      )}
    </>
  );
}

export default FamilyRelationsPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import InputFields from "../components/InputFields"; // Assuming this is correctly named InputFields component
// import SubmitButton from "../components/SubmitButton"; // Assuming this is correctly imported
// import styles from "./FamilyRelationsPage.module.css"; // Correct import for CSS module

// function FamilyRelationsPage() {
//   const [addMember, setAddMember] = useState(false); // State for managing addition of family members
//   const [showMessage, setShowMessage] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setShowMessage(true);
//   };

//   const handleClosePopUp = () => {
//     setShowMessage(false);
//   };

//   const handleAddMemberChange = (e) => {
//     // setAddMember(e.target.value === "yes");
//     setAddMember(true)

//   };

//   return (
//     <>
//       <div className={styles.showMessage}>
//         {showMessage && (
//           <>
//                         <h1>Success!</h1>           {" "}
//             <p>Your information has been submitted successfully.</p>
//             <button onClick={handleClosePopUp}>
//                             Close
//             </button>
//
//           </>
//         )}
//       </div>
//       <div className={styles.headerName}>
//         <Header headerName={"FAMILY COMPOSITIONS"} />
//       </div>

//         <div className={styles.InputFields}>
//           <div className={styles.SubInputFields}>
//             <InputFields label={"Other Source of Income"} />
//             <InputFields type="date" label={"Birth Order"} />
//             <InputFields label={"Total House Population"} />
//             <InputFields label={"# of Married Siblings"} />
//             <InputFields label={"Contributions"} />
//           </div>
//         </div>

//         <div className={styles.optionalForm}>
//           <div>
//             <button value={addMember} onClick={handleAddMemberChange}>Want to add Family Member/s?</button>
//             {/* <select
//               // value={addMember ? "yes" : "no"}

//               onChange={handleAddMemberChange}
//             >
//               <option value="yes">Yes</option>
//               <option value="no">No</option>
//             </select> */}
//           </div>

//           {addMember && (
//             <div className={styles.AddMemberForm}>
//               <InputFields label={"Family Member Name"} />
//               <InputFields
//                 type="date"
//                 value="2024-07-01"
//                 label={"Date of Birth"}
//               />
//               <InputFields label={"Relationship"} />
//               <InputFields label={"Civil Status"} />
//             </div>
//           )}

//           <Link to="/">Basic Info Page</Link>
//           <br />
//           <Link to="/medicalhistory">Medical History Page</Link>
//           <br />
//           {/* <Link to="/confirmationpage">Confirm</Link> */}

//           <button onClick={handleSubmit}> SUBMIT </button>
//         </div>

//     </>
//   );
// }

// export default FamilyRelationsPage;

// import Header from "../components/Header";
// import InputField from "../components/InputFields";
// import style from './FamilyRelationsPage.module.css'
// import SubmitButton from "../components/SubmitButton";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function FamilyRelationsPage() {

//   const [addMember, setAddMember] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateFields()) {
//       console.log("Form submitted successfully", state);
//       setAddMember(true);
//     }
//   };

//   const handleClosePopUp = () => {
//     setAddMember(false);
//   };
//   return (

// <>
//     <div className={style.headerName}>
//     <Header headerName={"FAMILY COMPOSITIONS"}/>
//     </div>

//     <div className={style.InputFields}>
//     <div className={style.SubInputFields}>

//     <InputField label={"Other Source of Income"}/>
//     <InputField type="date" label={"Birth Order"}/>
//     <InputField label={"Total House Population"}/>
//     <InputField label={"# of Married Siblings"}/>
//     <InputField label={"Contributions"}/>

//     <Link to = "/">Basic Info Page</Link>
//     <Link to = "/medicalhistory">Medical History Page</Link>

//     </div>
//     </div>

//     <hr />

//     </>

// {addMember && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//
//     <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//                   <h2 className="text-2xl font-bold mb-4">Success!</h2>
//               <p>Your information has been submitted successfully.</p>
//
//       <button
//         onClick={handleClosePopUp}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//                       Close
//       </button>
//
//     </div>
//
//   </div>
// )}

//   );
// }

// export default FamilyRelationsPage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import InputFields from '../components/InputFields';
// import SubmitButton from '../components/SubmitButton';
// import styles from './FamilyRelationsPage.module.css';

// function FamilyRelationsPage() {
//   const [addMember, setAddMember] = useState(false); // Initialize addMember as false

//   const handleAddMemberChange = (e) => {
//     setAddMember(e.target.value === "yes");
//     if (e.target.value === "no") {
//       setAlcoholFrequency(""); //if no, wala laman
//     }
//   };

//   // const handleClosePopUp = () => {
//   //   setAddMember(false);
//   // };

//   return (
//     <>
//       <div className={styles.headerName}>
//         <Header headerName={"FAMILY COMPOSITIONS"} />
//       </div>

//       <div className={styles.InputFields}>
//         <div className={styles.SubInputFields}>
//           <InputFields label={"Other Source of Income"} />
//           <InputFields type="date" label={"Birth Order"} />
//           <InputFields label={"Total House Population"} />
//           <InputFields label={"# of Married Siblings"} />
//           <InputFields label={"Contributions"} />

//           <Link to="/">Basic Info Page</Link><br/>
//           <Link to="/medicalhistory">Medical History Page</Link>

//         </div>
//       </div>

//       <hr />
//       <div>
//         <label>Want to add Family Member/s?
//         <select
//             value={addMember ? "yes" : "no"}
//             onChange={handleAddMemberChange}
//           >
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </label>

//       {addMember && (

//         <input
//           value={addMember}
//           onChange={(e) => setAddMember(e.target.value)}

//         />
//       </div>

//       )};

//             // <button
//             //   onClick={handleClosePopUp}

//             // >
//             //   Close
//             // </button>

//     </>
//   );
// }

// export default FamilyRelationsPage;
