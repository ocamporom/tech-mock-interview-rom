import BasicInfoPage from "./pages/BasicInfoPage"
import ConfirmationPage from "./pages/ConfirmationPage";
import FamilyRelationsPage from "./pages/FamilyRelationsPage";
import MedicalHistoryPage from "./pages/MedicalHistoryPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom";




function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicInfoPage />,
    },
    {
      path: "/medicalhistory",
      element: <MedicalHistoryPage />,
    },
    {
      path: "/familyrelations",
      element: <FamilyRelationsPage />,
    },
    {
      path: "/confirmationpage",
      element: <ConfirmationPage />,
    },
   
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
