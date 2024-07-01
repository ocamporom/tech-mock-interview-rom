function SubmitButton({submitName}) {

//  const handleOnclick = 

  return ( <>
  <button
      type="submit"
      className="hover:bg-fuchsia-400 focus:bg-teal-50 block bg-blue-500 p-4 font-bold text-2xl rounded-lg place-items-center"
    >
      {submitName}
    </button>
  </> );
}

export default SubmitButton;