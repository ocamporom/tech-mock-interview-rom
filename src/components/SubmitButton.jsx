function SubmitButton({submitName}) {



  return ( <>
  <div className=" flex flex-col items-center">
  <button
      type="submit"
      className="hover:bg-fuchsia-400 focus:bg-teal-50 block bg-blue-500 p-4 font-bold text-2xl rounded-lg items-center"
    >
      {submitName}
    </button>
    </div>
  </> );
}

export default SubmitButton;