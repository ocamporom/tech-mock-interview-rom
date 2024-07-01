import Header from "../components/Header";
import InputField from "../components/InputFields";
import SubmitButton from "../components/SubmitButton";
import style from "./BasicInfoPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function BasicInfoPage() {
  const [date, setDate] = useState("");

  // const handleSubmit = (e) => {

  //   <div>

  //   <Link to="/medicalhistory">Next Page</Link>
  // </div>

  // };
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <div className={style.headerName}>
        <Header headerName={"BASIC INFO PAGE"} />
      </div>

      <div className={style.InputFields}>
        <div className={style.SubInputFields}>
          <InputField placeholder={"JUAN PEDRO"} label={"Name"} />
          <InputField
            label={"Date"}
            type="text"
            value={date}
            placeholder="DD/MM/YY"
            onChange={(e) => setDate(e.target.value)}
          />
          <InputField placeholder={"Earth"} label={"ADDRESS"} />
          <InputField placeholder={"email@email.com"} label={"EMAIL"} />
          <InputField placeholder={"Phone"} type="number" label={"CONTACTS"} />
          <InputField
            placeholder={"Height in cm"}
            type="number"
            label={"HEIGHT IN CENTIMETERS"}
          />
          <InputField
            placeholder={"divide by 2.2 if lbs."}
            type="number"
            label={"WEIGHT IN KILOGRAMS"}
          />
          <Link to="/medicalhistory">Next Page</Link>
          <br />
          <Link to="/familyrelations">Family Relations</Link>
        </div>
      </div>
      {/* </form> */}
    </>
  );
}

export default BasicInfoPage;
