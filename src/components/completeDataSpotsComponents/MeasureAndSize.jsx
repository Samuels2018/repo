import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {completeDataStep4} from '../../redux/features/completeDataStepsSlice'
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export default function MeasureAndSize ({handleClick, currentStep, steps}) {

    const dispatch = useDispatch()
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null)

    const initialValues = {
        estatura: '',
        peso: '',
        tallaFranela: '',
        tallaChaqueta: '',
        tallaPantalon: '',
        tallaChaqueta1: '',
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
        dispatch(completeDataStep4(valores))
        handleClick('next')
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


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                <Form className="w-full h-full">
                    <div className="">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <h3 className=" text-md text-[#00D3E0]">Paso 6 de 8</h3>
                            <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">Medidas Y Tallas</h2>

                            <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-2 w-5/6 ">
                                <div className=" ">
                                    <label htmlFor="estatura" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Estatura </label>

                                    <Field 
                                        type="text" id="" name="estatura"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="estatura" placeholder="ejemplo 1.70" 
                                    />

                                    

                                </div>

                                <div className=" ">
                                    <label htmlFor="peso" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Peso corporal </label>

                                    <Field 
                                        type="text" id="" name="peso"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="peso" placeholder="ejemplo: 40kg"  
                                    />

                                    

                                </div>

                                <div className=" ">
                                    <label htmlFor="tallaFranela" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Talla de Franela </label>

                                    <Field 
                                        type="text" id="" name="tallaFranela"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="tallaFranela" placeholder="ejemplo: s"  
                                    />

                                    

                                </div>

                                
                                

                                <div className=" ">
                                    <label htmlFor="tallaChaqueta" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Talla de Chaqueta </label>

                                    <Field 
                                        type="text" id="" name="tallaChaqueta"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="tallaChaqueta" placeholder="ejemplo: s"  
                                    />

                                    

                                </div>

                                
                                
                                <div className=" ">
                                    <label htmlFor="tallaPantalon" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Talla de Pantalon, mono o short </label>

                                    <Field 
                                        type="text" id="" name="tallaPantalon"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="tallaPantalon" placeholder="ejemplo: 26"  
                                    />

                                    

                                </div>
                                 
                              
                                <div className=" ">
                                    <label htmlFor="tallaChaqueta1" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Talla de Chaqueta </label>

                                    <Field 
                                        type="text" id="" name="tallaChaqueta1"
                                        className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                                        autoComplete="tallaChaqueta1" placeholder=""  
                                    />

                                    

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
                                    {currentStep === steps.length - 1 ? "Confirmar" : "Siguiente"}
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            
        </div>
              
        
    );

}