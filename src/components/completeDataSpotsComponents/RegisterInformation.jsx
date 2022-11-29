import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {completeDataStep6} from '../../redux/features/completeDataStepsSlice'
import ValidatorLoginFinalStepData from '../../utils/validators/ValidatorLoginFinalStepData'
import logo from '../../assets/Logo.png'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export default function RegisterInformation ({handleClick, currentStep, steps}) {

    const dispatch = useDispatch()
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null)
    const [enviar, setEnviar] = useState(false)
    const data = useSelector(state => state)
    console.log(data)

    const initialValues = {
        actividad: '',
        displina: '',
        categoria: '',
        nivel: '',
        otraActividad: '',
        file_upload_info: [],
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
        dispatch(completeDataStep6(valores))
        setTimeout(() => {
            setEnviar(false)
            handleClick("next")
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

        <div className="w-full h-full flex flex-col justify-center items-center">
            <a href="./../../index.html" className="flex p-2 items-center">
             <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            </a>
                {enviar ? (<ValidatorLoginFinalStepData />): (

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                <Form className="w-full h-full">
                    <div className="">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <h3 className=" text-md text-[#00D3E0]">Paso 8 de 8</h3>
                            <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">Registro de Informacion</h2>

                            <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-2 w-5/6 ">
                                <div className=" ">
                                    <label htmlFor="actividad" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Tipo de Actividad Deportiva </label>

                                    <Field 
                                        type="text" id="" name="actividad"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="actividad" placeholder=""  
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
                                    <label htmlFor="Displina" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Displina </label>

                                    <Field 
                                        type="text" id="firstName" name="displina"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="displina" placeholder=""  
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
                                    <label htmlFor="categoria" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Categoria </label>

                                    <Field 
                                        type="text" id="firstName" name="categoria"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="categoria" placeholder=""  
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
                                    <label htmlFor="nivel" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Nivel </label>

                                    <Field 
                                        type="text" id="firstName" name="nivel"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="nivel" placeholder=""  
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
                                    <label htmlFor="otraActividad" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Otra Actividad Deportiva </label>

                                    <Field 
                                        type="text" id="firstName" name="otraActividad"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="otraActividad" placeholder=""  
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
                                    <label htmlFor="file_upload" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Adjuntar la Fotografia  (La imagen debe estar en: .Png `O` .Jpg)</label>

                                    

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
                                                name="file_upload_info" 
                                                autoComplete="file_upload"
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
                                    Registrar
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>

                ) }

                
            
        </div>
    );

}