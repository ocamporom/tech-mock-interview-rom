import style from './InputFields.module.css'




function InputField({
  label,
  id,

  placeholder,
  onChange,
  value,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <div >
        <input
        className={style.inputArea}
          value={value}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputField;
