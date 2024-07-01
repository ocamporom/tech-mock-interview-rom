function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  onChange,
  value,
  errorMessage,
}) {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="font-bold block">
        {label}:
      </label>
      <div>
        <input
          value={value}
          type={type}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          className="border border-slate-950 w-full p-3 rounded-lg"
        />
      </div>
      <div className="text-red-500 font-medium">{errorMessage}</div>
    </div>
  );
}

export default InputField;
