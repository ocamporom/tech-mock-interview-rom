import styles from './ConfirmationPage.module.css'
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  return ( <>
   <div className={styles.finalMessage}>
  <h1>YOU HAVE SUCCESSFULLY FILLED UP THE FORM!
  

  JUST WAIT FOR FURTHER INSTRUCTIONS!..THANK YOU
    
  </h1>
  <Link to="/">GO TO BASIC INFO PAGE</Link>
  </div>

 

 
  </> );
}

export default ConfirmationPage;