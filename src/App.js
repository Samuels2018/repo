import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from './components/layout/Layout'
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
import RepresentanteDeportivo from './pages/representanteDeportivo' 
import ReporteAtletasPorDisciplinas from './pages/reporteAtletasPorDisciplinas'
import SeccionDeNotificacion from './pages/seccionDeNotificacion'
import ReporteIndumentariaAtletas from './pages/reporteIndumentariaAtletas'
import AtletasConDatosPorConfirmarPorSuRepresentanteReportivo from './pages/atletasConDatosPorConfirmarPorSuRepresentanteDeportivo'
import EstatusDeVigenciaPasaportesAtletas from './pages/estatusDeVigenciaPasaportesAtletas'
import EstatusDeVigenciaPasaportesDisciplina from './pages/estatusDeVigenciaPasaportesDisciplina'
import RequerimientoReporteAtletasRangoEdades from './pages/requerimientoReporteAtletasRangoEdades'
import ReporteAtletasVacunadosCovid19PorAtleta from './pages/reporteAtletasVacunadosCovid19PorAtleta'
import ReporteAtletasVacunadosCovid19PorDisciplina from './pages/reporteAtletasVacunadosCovid19PorDisciplina'
import Error404 from './pages/error404'
// private route
import RequireLogin from './pages/privateRoutes/RequireLogin'



function App() {
  return (
   <Router>
     <Routes>

     
     <Route path="/" element={
       <Layout>
         <Home />
        </Layout>
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

      <Route path="/representanteDeportivo" element={
          <RepresentanteDeportivo />
        }
      />

      <Route path="/reporteAtletasPorDisciplinas" element={
          <ReporteAtletasPorDisciplinas />
        }
      />

      <Route path="/reporteIndumentariaAtletas" element={
          <ReporteIndumentariaAtletas />
        }
      />

      <Route path="/seccionDeNotificacion" element={
          <SeccionDeNotificacion />
        }
      />

      <Route path="/atletasConDatosPorConfirmarPorSuRepresentanteReportivo" element={
          <AtletasConDatosPorConfirmarPorSuRepresentanteReportivo />
        }
      />

      <Route path="/estatusDeVigenciaPasaportesAtletas" element={
          <EstatusDeVigenciaPasaportesAtletas />
        }
      />

      <Route path="/estatusDeVigenciaPasaportesDisciplina" element={
          <EstatusDeVigenciaPasaportesDisciplina />
        }
      />

      <Route path="/requerimientoReporteAtletasRangoEdades" element={
          <RequerimientoReporteAtletasRangoEdades />
        }
      />

      <Route path="/reporteAtletasVacunadosCovid19PorAtleta" element={
          <ReporteAtletasVacunadosCovid19PorAtleta />
        }
      />

      <Route path="/reporteAtletasVacunadosCovid19PorDisciplina" element={
          <ReporteAtletasVacunadosCovid19PorDisciplina />
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
