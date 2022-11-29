import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import OlvidoDatos from './pages/olvideMisDatos'
import ForgotPassword from './pages/forgotPassword'
import ConfirmEmailMessage from './components/verificationComponents/ConfirmEmailMessage'
import SuccessChangePassword from './components/verificationComponents/SuccessChangePassword'
import ConfirmAccountSuccess from './components/verificationComponents/ConfirmAccountSuccess'
import ChangePassword from './pages/changePassword'
import WrongDataSession from './components/verificationComponents/WrongDataSession'
import RegisterInformation from './components/completeDataSpotsComponents/RegisterInformation'
import CompleteData from './pages/completeDataUserFirstLogin'
import Error404 from './pages/error404'



function App() {
  return (
   <Router>
     <Routes>

     
     <Route path="/" element={
       <Home />
      } 
     />

     <Route path="/register" element={
         <Register />
       }
      />

      <Route path="/login" element={
          <Login />
        }
      />

      <Route path="/completeData" element={
          <CompleteData />
        }
      />

      <Route path="/olvidoDatos" element={
          <OlvidoDatos />
        }
      />

      <Route path="/forgatPassword" element={
          <ForgotPassword />
        }
      />

      <Route path="/changePassword" element={
          <ChangePassword />
        }
      />

      <Route path="/confirmEmailMessage" element={
          <ConfirmEmailMessage />
        }
      />

      <Route path="/successChangePassword" element={
          <SuccessChangePassword />
        }
      />

      <Route path="/confirmAccountSuccess" element={
          <ConfirmAccountSuccess />
        }
      />

      <Route path="/wrongdata" element={
          <WrongDataSession />
        }
      />

      

      <Route path="/registerInformation" element={
          <RegisterInformation />
        }
      />

      <Route path="*" element={
          <Error404 />
        }
      />


     </Routes>
   </Router>
  );
}

//<Navigate to="/dashboard" replace={true} />

export default App;
