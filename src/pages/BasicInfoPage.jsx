import Header from "../components/Header";
import InputField from "../components/InputFields";
import SubmitButton from "../components/SubmitButton";
import style from './BasicInfoPage.module.css'

function BasicInfoPage() {
  return ( 
   
    <>
    <div className={style.headerName}>
    <Header headerName={"BASIC INFO PAGE"}/>
    </div>

    <div className={style.InputFields}>
    <div className={style.SubInputFields}>

    <InputField placeholder={"JUAN PEDRO"} label={"Name"}/>
    <InputField placeholder={"JANUARY 1, 1800"} type="date" label={"BIRTHDAY"}/>
    <InputField placeholder={"Earth"} label={"ADDRESS"}/>
    <InputField placeholder={"email@email.com"} label={"EMAIL"}/>
    <InputField placeholder={"Phone"} type="number" label={"CONTACTS"}/>
    <InputField placeholder={"Height in cm"} type="number" label={"HEIGHT IN CENTIMETERS"}/>
    <InputField placeholder={"Weight in kg, divide by 2.2 if lbs."} type="number" label={"WEIGHT IN KILOGRAMS"}/>
    <SubmitButton/>
    </div>
    </div>
    </>

   );
}

export default BasicInfoPage;