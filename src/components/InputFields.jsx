function InputFields({
  label,
  id,
  type = 'text',
  placeholder,
  onChange,
  value,
  errorMessage,
}) {
  return (
    <div >
      <label htmlFor={id}>
        {label}:
      </label>
      <div>
        <input
          value={value}
          type={type}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
       
        />
      </div>
      <div >{errorMessage}</div>
    </div>
  );
}

export default InputFields;








// import style from './InputFields.module.css'




// function InputField({
//   label,
//   id,

//   placeholder,
//   onChange,
//   value,
// }) {
//   return (
//     <div>
//       <label htmlFor={id}>{label}:</label>
//       <div >
//         <input
//         className={style.inputArea}
//           value={value}
//           id={id}
//           onChange={onChange}
//           placeholder={placeholder}
//         />
//       </div>
//     </div>
//   );
// }

// export default InputField;
