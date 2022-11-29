import React, {Fragment,useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {RegisterStep2} from '../../../redux/features/registerStepsSlice'
import Spinner from '../../loadingComponents/Spinner'

export default function GeneralInfo ({handleClick, currentStep, steps }) {

    const [enviar, setEnviar] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log(data)

    const initialValues = {
        firstName: '',
        secondName: '',
        surname: '',
        secondSurname: '',
        email: '',
        emailconfirmation: '',
        mobilePhoneNumber: '',
        PhoneNumberConfirmation: '',
        password: '',
        passwordConfirmation: ''
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    ///^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

    const validationSchema = Yup.object().shape({

        firstName: Yup.string().required('type your firstName'),
        surname: Yup.string().required('type your surname'),
        email: Yup.string().email('el email no es valido').required('el email es requerido'),
        emailconfirmation: Yup.string().email('el email no es valido')
            .required('el email es requerido').oneOf([Yup.ref('email')], 'emails does not match'),
        mobilePhoneNumber: Yup.string().required('type your mobilePhoneNumber')
            .matches(phoneRegExp, 'Phone number is not valid'),
        PhoneNumberConfirmation: Yup.string().required('type your mobilePhoneNumber')
            .matches(phoneRegExp, 'Phone number is not valid')
            .oneOf([Yup.ref('mobilePhoneNumber')], 'mobilePhoneNumber does not match'),
        password: Yup.string().required('el password es obligatorio')
            .min(6,'el password debe tener al menos 6 caracteres'),
        passwordConfirmation: Yup.string().required('re inserta el password')
            .min(6,'el password debe tener al menos 6 caracteres')
            .oneOf([Yup.ref('password')], 'Passwords does not match')

    })

    const handleSubmit = (valores) => {
        console.log(valores)

        setEnviar(true)
        dispatch(RegisterStep2(valores))
        setTimeout(() => {
            setEnviar(false)
            handleClick("next")
        },2000)

    }

    return (
    <Fragment>
        {enviar ? (<Spinner />) : (

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="h-full w-full">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <h3 className=" text-md text-[#00D3E0]">Paso 2 de 3</h3>
                        <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">Registro de información</h2>

                        <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-2 w-5/6 ">

                            <div className=" ">
                                <label htmlFor="firstName" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Primer Nombre <mark className="bg-transparent text-red-600">*</mark></label>

                                <Field 
                                    type="text" id="firstName" name="firstName"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="firstName" placeholder="Juan" required 
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
                                <label htmlFor="secondName" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Segundo Nombre</label>

                                <Field type="text" id="secondName" name="secondName"
                                    className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="secondName" placeholder="Ramón" 
                                />

                            </div>

                           

                            

                            <div className=" ">
                                <label htmlFor="surname" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Primer Apellido <mark className="bg-transparent text-red-600">*</mark></label>

                                <Field type="text" id="surname" name="surname"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="surname" placeholder="Perez" required 
                                />

                                <div>

                                    <ErrorMessage
                                      name="surname"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>

                            
                            </div>

                             <div className="">
                                <label htmlFor="secondSsurname" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Segundo Apellido</label>

                                <Field type="text" id="secondSurname" name="secondSurname"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="surname" placeholder="Rodriguez" 
                                />

                            </div>

                            <div className="">
                                <label htmlFor="email" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Correo Electrónico <mark className="bg-transparent text-red-600">*</mark></label>

                                <Field type="email" id="email" name="email"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-email shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="email" placeholder="juan33@ejemplo.com" required 
                                />

                                <div>

                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>

                            </div>

                            <div className="">
                                <label htmlFor="emailconfirmation" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Confirmar Correo Electrónico <mark className="bg-transparent text-red-600">*</mark></label>

                                <Field type="email" id="emailconfirmation" name="emailconfirmation"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-email shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="emailconfirmation" placeholder="juan33@ejemplo.com" required 

                                />

                                <div>

                                    <ErrorMessage
                                      name="emailconfirmation"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>

                            </div>

                            <div className="">
                                <label htmlFor="mobilePhoneNumber" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Teléfono <mark className="bg-transparent text-red-600">*</mark></label>
                                
                                <Field type="tel" id="mobilePhoneNumber" name="mobilePhoneNumber"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-phone shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="mobilePhoneNumber" placeholder="Ingrese su número telefónico" required 
                                />

                                <div>

                                    <ErrorMessage
                                      name="mobilePhoneNumber"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="PhoneNumberConfirmation" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Confirmar Teléfono <mark className="bg-transparent text-red-600">*</mark></label>
                                
                                <Field type="tel" id="PhoneNumberConfirmation" name="PhoneNumberConfirmation"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-phone shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="PhoneNumberConfirmation" placeholder="Confirmar número telefónico" required 
                                />

                                <div>

                                    <ErrorMessage
                                      name="PhoneNumberConfirmation"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="password" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Contraseña <mark className="bg-transparent text-red-600">*</mark></label>
                                
                                <Field
                                    id="password" name="password"
                                    type="password"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-lock shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    autoComplete="password" placeholder="Ingrese su contraseña" required 
                                />

                                <div>

                                    <ErrorMessage
                                      name="password"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>
                            </div>

                            

                            <div className="">
                                <label htmlFor="passwordConfirmation" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Confirmar Contraseña <mark className="bg-transparent text-red-600">*</mark></label>
                                
                                <Field type="password" id="passwordConfirmation" name="passwordConfirmation"
                                    className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-lock shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                                    placeholder="Confirmar contraseña" required 
                                />

                                <div>

                                    <ErrorMessage
                                      name="passwordConfirmation"
                                      component="div"
                                      className="text-red-600 text-sm"
                                    />

                                </div>
                            </div>

                        </div>

                        <div className="my-8 pb-3 w-full justify-center flex mb-4">
                        <div className="w-4/6 flex justify-between">
                            <div className="w-4/6 mx-2">
                                <button
                                    onClick={() => handleClick()}
                                    className={`text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2" : 
                                        ${currentStep === 1 ? " cursor-not-allowed opacity-50" : ""
                                        }`}
                                >
                                    Atrás
                                </button>
                            </div>
                            <div className="w-4/6 mx-2">
                                <button
                                    type="submit"
                                    className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                                >
                                    {currentStep === steps.length - 1 ? "Confirmar" : "Siguiente"}
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
                   
                </Form>
            </Formik>

        )}
    </Fragment>
    );

}

/*
{/*onClick={() => handleClick()}*
{/*onClick={() => handleClick("next")}
*/


