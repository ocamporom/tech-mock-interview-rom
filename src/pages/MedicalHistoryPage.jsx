import React, { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

const MedicalHistoryPage = () => {
  const [drinkAlcohol, setDrinkAlcohol] = useState(false);
  const [smoke, setSmoke] = useState(false);
  const [alcoholFrequency, setAlcoholFrequency] = useState("");
  const [smokingFrequency, setSmokingFrequency] = useState("");
  const [otherConditions, setOtherConditions] = useState("");

  const handleAlcoholChange = (e) => {
    setDrinkAlcohol(e.target.value === "yes");
    if (e.target.value === "no") {
      setAlcoholFrequency("");
    }
  };

  const handleSmokingChange = (e) => {
    setSmoke(e.target.value === "yes");
    if (e.target.value === "no") {
      setSmokingFrequency("");
    }
  };

  return (
    <div className="border-solid text-center p-4">
      <header className="text-4xl font-bold mb-4">
        <h1>MEDICAL HISTORY PAGE</h1>
      </header>
      <div className="mb-4">
        <label className="block">
          Do you drink alcohol?
          <select
            value={drinkAlcohol ? "yes" : "no"}
            onChange={handleAlcoholChange}
            className="ml-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {drinkAlcohol && (
          <div className="mt-2">
            <label className="block">How often do you drink?</label>
            <textarea
              value={alcoholFrequency}
              onChange={(e) => setAlcoholFrequency(e.target.value)}
              rows={4}
              cols={50}
              placeholder="Enter frequency"
              className="p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block">
          Do you smoke?
          <select
            value={smoke ? "yes" : "no"}
            onChange={handleSmokingChange}
            className="ml-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {smoke && (
          <div className="mt-2">
            <label className="block">How often do you smoke?</label>
            <textarea
              value={smokingFrequency}
              onChange={(e) => setSmokingFrequency(e.target.value)}
              rows={4}
              cols={50}
              placeholder="Enter frequency"
              className="p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block">Blood type:</label>
        <select id="bloodType" className="p-2 border border-gray-300 rounded-md">
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

      <div className="mb-4">
        <label className="block">Other previous conditions:</label>
        <textarea
          value={otherConditions}
          onChange={(e) => setOtherConditions(e.target.value)}
          rows={4}
          cols={50}
          placeholder="List any other previous medical conditions"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div >
        <Link to="/" className="w-1/2">
          <SubmitButton submitName={"Back to Basic Info Page"} />
        </Link>
        <Link to="/familyrelations" className="w-1/2 ml-2">
          <SubmitButton submitName={"Next Page"} />
        </Link>
      </div>
    </div>
  );
};

export default MedicalHistoryPage;


// import React, { useState } from "react";
// import SubmitButton from "../components/SubmitButton";
// import { Link } from "react-router-dom";

// const MedicalHistoryPage = () => {
//   const [drinkAlcohol, setDrinkAlcohol] = useState(false); // not showing by defualt kasi false
//   const [smoke, setSmoke] = useState(false);
//   const [alcoholFrequency, setAlcoholFrequency] = useState("");
//   const [smokingFrequency, setSmokingFrequency] = useState("");

//   const [otherConditions, setOtherConditions] = useState("");

//   const handleAlcoholChange = (e) => {
//     setDrinkAlcohol(e.target.value === "yes");
//     if (e.target.value === "no") {
//       setAlcoholFrequency(""); //if no, wala laman
//     }
//   };

//   const handleSmokingChange = (e) => {
//     setSmoke(e.target.value === "yes");
//     if (e.target.value === "no") {
//       setSmokingFrequency("");
//     }
//   };

//   return (
//     <div className="border-solid text-center">
//            <header className="text-center text-4xl font-bold">
//                 <h1>MEDICAL HISTORY PAGE</h1>
//       </header>
//       <br/>
//       <div>
//         <label>
//           Do you drink alcohol?
//           <select
//             value={drinkAlcohol ? "yes" : "no"}// ternary operator
//             onChange={handleAlcoholChange}
//           >
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </label>

//         {drinkAlcohol && ( // always remember boolean variable if you want a popup
//           <div>
//             <label>How often do you drink?</label>
//             <br />
//             <textarea className="border-solid"
//               value={alcoholFrequency}
//               onChange={(e) => setAlcoholFrequency(e.target.value)}
//               rows={4}
//               cols={50}
//               placeholder="how many cases?"
//             />
//           </div>
//         )}
//       </div>

//       <div>
//         <label>
//           Do you smoke?
//           <select value={smoke ? "yes" : "no"} onChange={handleSmokingChange}>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </label>
//         {smoke && (
//           <div>
//             <label>How often do you smoke?</label>
//             <br />
//             <textarea
//               value={smokingFrequency}
//               onChange={(e) => setSmokingFrequency(e.target.value)}
//               rows={4}
//               cols={50}
//               placeholder="How many reams?"
//             />
//           </div>
//         )}
//       </div>

//       <div>
//         <label>Blood type:</label>
//         <br />
//         <select id="bloodType">
//           <option value="A+">A positive (A+)</option>
//           <option value="A-">A negative (A-)</option>
//           <option value="B+">B positive (B+)</option>
//           <option value="B-">B negative (B-)</option>
//           <option value="AB+">AB positive (AB+)</option>
//           <option value="AB-">AB negative (AB-)</option>
//           <option value="O+">O positive (O+)</option>
//           <option value="O-">O negative (O-)</option>
//         </select>
//       </div>

//       <div>
//         <label>Other previous conditions:</label>
//         <br />
//         <textarea
//           value={otherConditions}
//           onChange={(e) => setOtherConditions(e.target.value)}
//           rows={4}
//           cols={50}
//           placeholder="List any other previous medical conditions"
//         />
//       </div>
//       {/* <Link to="/familyrelations">Next Page</Link>
//       <br />
//       <Link to="/">Basic Info Page</Link> */}
//       <Link to="/">
//             <SubmitButton submitName={"Back to Basic Info Page"} />
//           </Link>
//            
//           <Link to="/familyrelations">
//             <SubmitButton submitName={"Next Page"} />
//           </Link>
//     </div>
//   );
// };

// export default MedicalHistoryPage;
