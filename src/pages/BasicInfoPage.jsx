import { useState } from "react";
import InputField from "../components/InputField";
import useFormPageReducer from "../contexts/reducer";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

function BasicInfoPage() {
  const [state, dispatch] = useFormPageReducer();


  const validateFields = () => {
    const errors = {};
    if (!state.name) errors.name = "Name is required";
    // if state.name is undefined, lunto ya errors.name
    else if (state.name.length <= 2)
      errors.name = "Name must be more than 2 characters";
    if (!state.email) errors.email = "Email is required"; //
    else if (!/\S+@\S+\.\S+/.test(state.email))
      errors.email = "Email is invalid";
    if (!state.role) errors.role = "Role is required";
    else if (state.role.length <= 2)
      errors.role = "Role must be more than 2 characters";
    if (!state.contactPerson)
      errors.contactPerson = "Contact Person is required";
    if (!state.contactNumber)
      errors.contactNumber = "Contact Number is required";
    else if (
      !/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
        state.contactNumber
      )
    )
      errors.contactNumber = "Contact number must be a 10 digit number";
    dispatch({ type: "SET_ERRORS", payload: errors });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form submitted successfully", state);
    }
  };

  return (
    <div className="container mx-auto">
      <header className="text-center text-4xl font-bold">
                <h1>BASIC INFORMATION PAGE</h1>
      </header>
             
      <form onSubmit={handleSubmit}>
             
        <div className="grid gap-2">
                 
          <InputField
            label="Name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            placeholder={"Jorbit the Great"}
            required
          />
          <InputField
            label="Birthday"
            type="Date"
            value={state.birthday}
            onChange={(e) =>
              dispatch({ type: "SET_BIRTHDAY", payload: e.target.value })
            }
            placeholder={"YYYY-MM-DD"}
          />
          <InputField
            label="Address"
            value={state.address}
            onChange={(e) =>
              dispatch({ type: "SET_ADDRESS", payload: e.target.value })
            }
            placeholder={"Block 1 Lot 2"}
          />
                         
          <InputField
            label="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
            placeholder={"email@mail.com"}
          />
          <InputField
            label="Phone Number"
            value={state.phoneNumber}
            onChange={(e) =>
              dispatch({ type: "SET_PHONE_NUMBER", payload: e.target.value })
            }
            placeholder={"099112345678"}
          />
                 
          <InputField
            label="Height"
            value={state.height}
            onChange={(e) =>
              dispatch({ type: "SET_HEIGHT", payload: e.target.value })
            }
            placeholder={"ex: 177cm"}
          />
                 
          <InputField
            label="Weight"
            value={state.weight}
            onChange={(e) =>
              dispatch({
                type: "SET_WEIGHT",
                payload: e.target.value,
              })
            }
            placeholder={"ex: 100kg"}
          />
                 
         
                 
          <Link to="/medicalhistory">
            <SubmitButton submitName={"Next Page"} />
          </Link>
           
          <Link to="/familyrelations">
            <SubmitButton submitName={"Family Relations Page"} />
          </Link>
        </div>
           
      </form>
       
    </div>
  );
}

export default BasicInfoPage;

// import { useState } from "react";
// import InputFields from "../components/InputFields";
// import useFormPageReducer from "../contexts/reducer.js";
// import SubmitButton from "../components/SubmitButton.jsx";
// import { Link } from "react-router-dom";
// import Header from "../components/Header.jsx";
// import styles from "./BasicInfoPage.module.css";

// function BasicInfoPage() {
//   const [state, dispatch] = useFormPageReducer();

//   const validateFields = (e) => {
//     e.preventDefault();

//     if (!state.name) {
//       alert("Name is REQUIRED!");
//       return false;
//     } else if (state.name.length <= 2){
//       alert("Name must be more than 2 characters");
//       return false;
//     }
//     if (!state.email) {
//       alert("EMAIL is REQUIRED!");
//       return false;
//     } else if (!/\S+@\S+\.\S+/.test(state.email)) {
//       alert("EMAIL is INVALID");
//       return false;
//     }
//     if (!state.weight) {
//       alert("Weight is required!");
//       return false;
//     }

//     if (!state.height) {
//       alert("Height is required!");
//       return false;
//     }

//     if (!state.phoneNumber) {
//       alert("CONTACT NUMBER is mandatory!");
//       return false;
//     }
//     else if (
//       !/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
//         state.contactNumber
//       )
//     ) {
//       alert("YOUR CONTACT NUMBER MUST HAVE 11 DIGITS!");
//       return false;
//     }

//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   // };

//   return (
//     <div className={styles.InputFields}>
//       <div>
//         <Header headerName={"BASIC INFORMATION PAGE"} />
//       </div>
//          {" "}
//       <div className={styles.SubInputFields}>
//         <form onClick={validateFields}>
//           <InputFields
//             label="Name"
//             value={state.name}
//             onChange={(e) =>
//               dispatch({ type: "SET_NAME", payload: e.target.value })
//             }
//             placeholder={"Jorbit the Great"}
//             required
//           />
//           <InputFields
//             label="Birthday"
//             type="Date"
//             value={state.birthday}
//             onChange={(e) =>
//               dispatch({ type: "SET_BIRTHDAY", payload: e.target.value })
//             }
//             placeholder={"YYYY-MM-DD"}
//           />
//           <InputFields
//             label="Address"
//             value={state.address}
//             onChange={(e) =>
//               dispatch({ type: "SET_ADDRESS", payload: e.target.value })
//             }
//             placeholder={"Block 1 Lot 2"}
//           />
//
//           <InputFields
//             label="Email"
//             value={state.email}
//             onChange={(e) =>
//               dispatch({ type: "SET_EMAIL", payload: e.target.value })
//             }
//             placeholder={"email@mail.com"}
//           />
//           <InputFields
//             label="Phone Number"
//             value={state.phoneNumber}
//             onChange={(e) =>
//               dispatch({ type: "SET_PHONE_NUMBER", payload: e.target.value })
//             }
//             placeholder={"099112345678"}
//           />
//
//           <InputFields
//             label="Height"
//             value={state.height}
//             onChange={(e) =>
//               dispatch({ type: "SET_HEIGHT", payload: e.target.value })

//             }
//             placeholder={"ex: 177cm"}
//           />
//
//           <InputFields
//             label="Weight"
//             value={state.weight}
//             onChange={(e) =>
//               dispatch({
//                 type: "SET_WEIGHT",
//                 payload: e.target.value,
//               })
//             }
//             placeholder={"ex: 100kg"}
//           />
//
//           <InputFields
//             label="Emergency Contact Number"
//             value={state.contactNumber}
//             onChange={(e) =>
//               dispatch({
//                 type: "SET_EMERGENCY_CONTACT_NUMBER",
//                 payload: e.target.value,
//               })
//             }
//             placeholder={+639123456789}
//           />
//
//           <Link to="/medicalhistory">
//             <SubmitButton submitName={"Next Page"} />
//           </Link>
//           <br />
//           <Link to="/familyrelations">
//             <button>FAMILY RELATIONS</button>
//           </Link>
//         </form>
//
//       </div>
//     </div>
//   );
// }

// export default BasicInfoPage;

// import Header from "../components/Header";
// import InputField from "../components/InputFields";
// import SubmitButton from "../components/SubmitButton";
// import style from "./BasicInfoPage.module.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function BasicInfoPage() {
//   const [date, setDate] = useState("");

//   // const handleSubmit = (e) => {

//   //   <div>

//   //   <Link to="/medicalhistory">Next Page</Link>
//   // </div>

//   // };
//   return (
//     <>
//       {/* <form onSubmit={handleSubmit}> */}
//       <div className={style.headerName}>
//         <Header headerName={"BASIC INFO PAGE"} />
//       </div>

//       <div className={style.InputFields}>
//         <div className={style.SubInputFields}>
//           <InputField placeholder={"JUAN PEDRO"} label={"Name"} />
//           <InputField
//             label={"Date"}
//             type="text"
//             value={date}
//             placeholder="DD/MM/YY"
//             onChange={(e) => setDate(e.target.value)}
//           />
//           <InputField placeholder={"Earth"} label={"ADDRESS"} />
//           <InputField placeholder={"email@email.com"} label={"EMAIL"} />
//           <InputField placeholder={"Phone"} type="number" label={"CONTACTS"} />
//           <InputField
//             placeholder={"Height in cm"}
//             type="number"
//             label={"HEIGHT IN CENTIMETERS"}
//           />
//           <InputField
//             placeholder={"divide by 2.2 if lbs."}
//             type="number"
//             label={"WEIGHT IN KILOGRAMS"}
//           />
//           <Link to="/medicalhistory">Next Page</Link>
//           <br />
//           <Link to="/familyrelations">Family Relations</Link>
//         </div>
//       </div>
//       {/* </form> */}
//     </>
//   );
// }

// export default BasicInfoPage;

// const validateFields = () => {
//   const errors = {};
//   if (!state.name) errors.name = "Name is required";
//   // if state.name is undefined, lunto ya errors.name
//   else if (state.name.length <= 2)
//     errors.name = "Name must be more than 2 characters";
//   if (!state.email) errors.email = "Email is required"; //
//   else if (!/\S+@\S+\.\S+/.test(state.email))
//     errors.email = "Email is invalid";
//   if (!state.role) errors.role = "Role is required";
//   else if (state.role.length <= 2)
//     errors.role = "Role must be more than 2 characters";
//   if (!state.contactPerson)
//     errors.contactPerson = "Contact Person is required";
//   if (!state.contactNumber)
//     errors.contactNumber = "Contact Number is required";
//   else if (
//     !/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
//       state.contactNumber
//     )
//   )
//     errors.contactNumber = "Contact number must be a 10 digit number";
//   dispatch({ type: "SET_ERRORS", payload: errors });
//   return Object.keys(errors).length === 0;
// };
