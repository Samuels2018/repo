import React, {useState, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {completeDataStep5} from '../../redux/features/completeDataStepsSlice'
import { Link} from "react-router-dom";
import logo from '../../assets/Logo.png'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import AtleteComponent from '../../components/completeDataSpotsComponents/AtleteComponent'
import Spinner from '../../components/loadingComponents/Spinner'
import AskDisable from '../../components/completeDataSpotsComponents/AskDisable'

export default function RegisterVaccine () {

    const dispatch = useDispatch()
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null)
    const [message, setMessage] = useState('')
    const [enviar, setEnviar] = useState(false)
    const [next, setNext] = useState(false)
    const athlete = useSelector(state => state.completeDatalogin.status)
    console.log(athlete)

    const initialValues = {
        first: '',
        second: '',
        third: '',
        fourth: '',
        file_upload_vaccine: [],
    }

    const validationSchema = Yup.object().shape({

        /*firstName: Yup.string().required('type your firstName'),
        surname: Yup.string().required('type your surname'),
        email: Yup.string().email('el email no es valido').required('el email es requerido'),
        emailconfirmation: Yup.string().email('el email no es valido')
            .required('el email es requerido').oneOf([Yup.ref('email')], 'emails does not match'),
        mobilePhoneNumber: Yup.string().required('type your mobilePhoneNumber'),
        PhoneNumberConfirmation: Yup.string().required('type your mobilePhoneNumber')
            .oneOf([Yup.ref('mobilePhoneNumber')], 'mobilePhoneNumber does not match'),
        password: Yup.string().required('el password es obligatorio')
            .min(6,'el password debe tener al menos 6 caracteres'),
        passwordConfirmation: Yup.string().required('re inserta el password')
            .min(6,'el password debe tener al menos 6 caracteres'),
            .oneOf([Yup.ref('password')], 'Passwords does not match')*/

    })

    const handleSubmit = (valores) => {
        console.log(valores)
        setEnviar(true)
        dispatch(completeDataStep5(valores))
        setTimeout(() => {
            if (athlete === 200 || athlete === 201) {
              setEnviar(false)
              setMessage(false)
              setNext(true)
              //setConfirmarCorreo(true)
              //user.completeData ? navigate("/") : navigate("/completeData")
          
            }else {
               setEnviar(false)
              //const {Message} = user
              setMessage("Error")
              //setMessage(Message)
              //console.log(Message)
            }
        },2000)
        /*console.log(e.target.files);
        if (e.target.files[0] !== undefined) {
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (e) => {
            e.preventDefault();
            setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
          };
        }*/
        //userTypeStep(valores)
    }


    

    return (

    <AtleteComponent >
        {enviar ? (<Spinner />) : (

            <Fragment>
                {next ? (<AskDisable />) : (

                    <div className="w-full h-full flex flex-col justify-center items-center">
            <Link to="/" className="flex p-2 items-center">
             <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            </Link>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Form className="w-full h-full">
                    <div className="">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <h3 className=" text-md text-[#00D3E0]">Paso 7 de 8</h3>
                            <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">Registro de Vacunas</h2>

                            <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-2 w-5/6 ">
                                <div className=" ">
                                    <label htmlFor="Primera dosis" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Primera Dosis </label>

                                    <Field 
                                        type="text" id="" name="first"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="first" placeholder=""  
                                    />

                                    <div>

                                        <ErrorMessage
                                          name="firstName"
                                          component="div"
                                          className="text-red-600 text-sm"
                                        />

                                    </div>

                                </div>

                                <div className=" ">
                                    <label htmlFor="Segunda dosis" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Segunda Dosis </label>

                                    <Field 
                                        type="text" id="" name="second"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="second" placeholder=""  
                                    />

                                    <div>

                                        <ErrorMessage
                                          name="firstName"
                                          component="div"
                                          className="text-red-600 text-sm"
                                        />

                                    </div>

                                </div>

                                <div className=" ">
                                    <label htmlFor="Tercera dosis" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Tercera Dosis </label>

                                    <Field 
                                        type="text" id="" name="third"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="third" placeholder=""  
                                    />

                                    <div>

                                        <ErrorMessage
                                          name="firstName"
                                          component="div"
                                          className="text-red-600 text-sm"
                                        />

                                    </div>

                                </div>

                                
                                

                                <div className=" ">
                                    <label htmlFor="Cuarta dosis" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Cuarta Dosis </label>

                                    <Field 
                                        type="text" id="" name="fourth"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="fourth" placeholder=""  
                                    />

                                    <div>

                                        <ErrorMessage
                                          name="firstName"
                                          component="div"
                                          className="text-red-600 text-sm"
                                        />

                                    </div>

                                </div>

                                
                                
                                <div className=" ">
                                    <label htmlFor="imagen" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Adjuntar Imagen De Carnet De Vacunacion (Tamanio Y Formato Por Definir)</label>

                                    

                                    <div>
                                    <div className="max-w-xl">
                                        <label
                                            className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                            <span className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <span className="font-medium text-gray-600">
                                                    Drop files to Attach, or
                                                    <span className="text-blue-600 underline">browse</span>
                                                </span>
                                            </span>
                                            <Field 
                                                type="file" 
                                                name="file_upload_vaccine" 
                                                autoComplete="image"
                                                accept="image/*"
                                                multiple
                                                className="hidden" 
                                            />
                                        </label>
                                    </div>
                                </div>

                                </div>
                                 
                              
                                
                                

                                
                               
                            </div>
                            {/*<div className="items-center justify-center">
                                  <img
                                    src={ImageSelectedPrevious}
                                    alt=""
                                    style={{height: "150px", width: "250px"}}
                                    
                                  />
                                </div>*/}

                            <div
                            className="inline-flex w-5/6 items-center pt-8 justify-center"
                            >
                                <button
                                    type="submit"
                                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Siguiente
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            
        </div>

                )}
            </Fragment>

        )}
        
    </AtleteComponent>
        
    );

}