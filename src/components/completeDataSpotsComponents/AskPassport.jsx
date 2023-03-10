import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export default function AskPassport () {
    

    //{handleClick, currentStep, steps}

    return (

        <div className="w-full h-full flex flex-col justify-center items-center">
            <Link to="/" className="flex p-2 items-center">
             <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            </Link>

                <div className="w-full h-full">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <h3 className=" text-md text-[#00D3E0]">Paso 5 de 8</h3>
                        <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">Posee Pasaporte?</h2>

                        
                         <div
                            className="inline-flex w-5/6 items-center pt-8 justify-between"
                            >
                            {/*onClick={() => handleClick("next")}*/}
                                <Link
                                    
                                    to="/completeData/AskPassport"
                                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Si
                                </Link>
                                <button
                                    
                                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    No
                                </button>
                                {/*onClick={() => handleClick("next1")}*/}
                            </div>
                    </div>
                </div>
              
            
        </div>

    );

}