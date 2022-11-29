import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export default function ChangePassword() {

    //Login 

    const initialValues = {
        password: "",
        passwordConfirmation: "",
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string().required('el password es obligatorio')
            .min(8,'el password debe tener al menos 6 caracteres'),
        passwordConfirmation: Yup.string().required('re inserta el password')
            .min(8,'el password debe tener al menos 6 caracteres')
            .oneOf([Yup.ref('password')], 'Passwords does not match')
    })

    const handleSubmit = (values) => {
        //e.preventDefault();
        console.log(values)
        /*axios
            .post(' http://18.222.226.76/api/auth/login', {
                email: values.email,
                password: values.pass,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err.response.data);
            });*/
    };

    return (
        <div class="w-full h-screen overflow-hidden -mb-7">
            <div className="font-sans bg-cover bg-no-repeat bg-heroPasos h-full" >
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
                        <a href="https://Atletasdevenezuela.com" className="flex p-2 items-center">
                            <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
                        </a>
                        
                        <div className="p-10 flex flex-col w-5/6 items-center justify-center">
                            <h2 className="text-2xl mb-4 text-white text-center font-bold">
                                Cambia tu contrasenia!
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
                                        > Nueva Contrasenia
                                            <mark className="bg-transparent text-red-600">*</mark></label
                                        >
                                        <Field
                                            type="password"
                                            name="password"
                                            className="my-3 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                            sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm 
                                            focus:outline-none focus:shadow-outline font-semibold"
                                            placeholder="Ejem: *******"
                                            autoComplete="password"
                                            required
                                        />
                                    </div>

                                    <div>

                                        <ErrorMessage
                                          name="password"
                                          component="div"
                                          className="text-red-600 text-sm"
                                        />

                                    </div>

                                    <div className="w-full items-center flex-col flex pt-4">
                                        <label
                                            htmlFor="telephone"
                                            className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                                        > Confirmar Contrasenia
                                            <mark className="bg-transparent text-red-600">*</mark></label
                                        >
                                        <Field
                                            type="password"
                                            name="passwordConfirmation"
                                            className="my-3 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                            sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm 
                                            focus:outline-none focus:shadow-outline font-semibold"
                                            placeholder="Ejem: *********"
                                            autoComplete="passwordConfirmation"
                                            required
                                        />
                                    </div>

                                    <div>

                                        <ErrorMessage
                                          name="passwordConfirmation"
                                          component="div"
                                          className="text-red-600 text-sm"
                                        />

                                    </div>

                                    <p className="text-xs text-white"> La contrasenia debe contener 8 caracteres con una 
                                    letra mayuscula y un caracter especial</p>

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
                                            Cancelar
                                        </Link>
                                    </div>

                                </Form>
                                
                            
                                
                            </Formik>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

        
    );
}
