import { useState } from "react";
import InputField from "../components/InputField";
import useFormPageReducer from "../contexts/reducer";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

function BasicInfoPage() {
  const [state, dispatch] = useFormPageReducer();

  // const validateFields = () => {
  //   const errors = {};

  //   if (!state.name) {
  //     errors.name = "Name is required";
  //   } else if (state.name.length <= 2) {
  //     errors.name = "Name must be more than 2 characters";
  //   }

  //   if (!state.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(state.email)) {
  //     errors.email = "Email is invalid";
  //   }

  //   if (!state.height) {
  //     errors.height = "height is required";
  //   } else if (state.height.length <= 1) {
  //     errors.height = "height must be more than 2 characters";
  //   }

  //   if (!state.phoneNumber) {
  //     errors.phoneNumber = "Contact Number is required";
  //   } else if (
  //     !/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
  //       state.contactNumber
  //     )
  //   ) {
  //     errors.phoneNumber = "Contact number must be a 10 digit number";
  //   }

  //   dispatch({ type: "SET_ERRORS", payload: errors });

  
  //   return Object.keys(errors).length === 0;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
   validateFields()
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
            errorMessage={state.errors.name}
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
            errorMessage={state.errors.email}
          />
          <InputField
            label="Phone Number"
            value={state.phoneNumber}
            onChange={(e) =>
              dispatch({ type: "SET_PHONE_NUMBER", payload: e.target.value })
            }
            placeholder={"09912345678"}
            errorMessage={state.errors.phoneNumber}
          />
                 
          <InputField
            label="Height"
            value={state.height}
            onChange={(e) =>
              dispatch({ type: "SET_HEIGHT", payload: e.target.value })
            }
            placeholder={"ex: 177cm"}
            errorMessage={state.errors.height}
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
          {/*        <SubmitButton submitName={"Next Page"} />        */}
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