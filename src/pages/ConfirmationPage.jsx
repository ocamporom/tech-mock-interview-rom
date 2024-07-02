import styles from './ConfirmationPage.module.css'
import { Link } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';

function ConfirmationPage() {
  return ( <>
   <div className="text-center text-2xl font-bold h-screen flex items-center justify-center">
  <h1>YOU HAVE SUCCESSFULLY FILLED UP THE FORM!
  

  JUST WAIT FOR FURTHER INSTRUCTIONS!..THANK YOU
    
  </h1>
  
  </div>
  <Link to="/">
            <SubmitButton submitName={"Back to Basic Info Page"} />
          </Link>
 

 
  </> );
}

export default ConfirmationPage;