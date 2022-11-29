import { useState, Fragment } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {userForgotPassword} from '../redux/features/userSlice'
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Spinner from '../components/loadingComponents/Spinner'
import ConfirmEmailMessage from '../components/verificationComponents/ConfirmEmailMessage'

const ForgotPassword = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [enviar, setEnviar] = useState(false)
    const [confirmarCorreo, setConfirmarCorreo] = useState(false)
    const [message, setMessage] = useState("")
    console.log(user)
    const initialValues = {
        email: "",
    }


    const validationSchema = Yup.object().shape({
        email: Yup.string().email('el email no es valido').required('el email es requerido'),
    })

    const handleSubmit = (valores) => {
        //e.preventDefault();
        console.log(valores)
        setEnviar(true)
        dispatch(userForgotPassword(valores))
        setTimeout(() => {
            if (user.status === 200 || user.status === 201) {
              setEnviar(false)
              setMessage(false)
              setConfirmarCorreo(true)
              //user.completeData ? navigate("/") : navigate("/completeData")
          
            }else {
               setEnviar(false)
              //const {Message} = user
              setMessage("Error")
              //setMessage(Message)
              //console.log(Message)
            }
        },2000)
        /*axios
            .post(' http://18.222.226.76/api/forget-user', {
                telephone: values.telephone,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err.response.data);
            });*/
    };


    return (

        <div className="w-full h-screen overflow-hidden -mb-7">
            <div className="font-sans bg-cover bg-no-repeat bg-heroPasos h-full" >
                <div className="flex items-start justify-end w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
                        <a href="https://Atletasdevenezuela.com" className="flex p-2 items-center">
                            <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
                        </a>
                        
                        {enviar ? (<Spinner />) : (
                            <Fragment>
                                {confirmarCorreo ? (<ConfirmEmailMessage />) : (

                                    <div className="p-10 flex flex-col w-5/6 items-center justify-center">
                                        <h2 className="text-2xl mb-4 text-white text-center font-bold">
                                            ¡Recuperar tu Contrasenia!
                                        </h2>
                                        <Formik 
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >

                                            <Form
                                            className="mb-8 mt-6 sm:w-4/6 w-full font-bold text-xl text-center leading-loose"
                                            >
                                                <div className="w-full items-center flex-col flex pt-4">
                                                    <label
                                                        htmlFor="telephone"
                                                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                                                    > Correo Electronico
                                                        <mark className="bg-transparent text-red-600">*</mark></label
                                                    >
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        className="my-3 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                                        sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm 
                                                        focus:outline-none focus:shadow-outline font-semibold"
                                                        placeholder="Ejem: perro@gmail.com"
                                                        autoComplete="email"
                                                        required
                                                    />
                                                </div>

                                                <div>

                                                    <ErrorMessage
                                                      name="email"
                                                      component="div"
                                                      className="text-red-600 text-sm"
                                                    />

                                                </div>

                                                <div
                                                className="inline-flex w-5/6 items-center pt-8 justify-between"
                                                >
                                                    <button
                                                        type="submit"
                                                        className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                    >
                                                        Aceptar
                                                    </button>
                                                    <Link
                                                        to="/IniciarSesion"
                                                        className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                    >
                                                        Cerrar
                                                    </Link>
                                                </div>

                                            </Form>
                                            
                                        
                                            
                                        </Formik>
                                        {message ? (<p className="text-red-600 text-sm">{message}</p>) : null}
                                    </div>

                                )}
                            </Fragment>

                        )}
                    
                    </div>
                </div>
            </div>
        </div>


        
    )
};

export default ForgotPassword
