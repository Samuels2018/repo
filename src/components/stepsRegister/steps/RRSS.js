import React, {Fragment,useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {RegisterStep3} from '../../../redux/features/registerStepsSlice'
import Spinner from '../../loadingComponents/Spinner'
import ValidatorRegisterFinalStep from '../../../utils/validators/ValidatorRegisterFinalStep'

export default function SocialNetworks({handleClick, currentStep, steps}) {

    const [enviar, setEnviar] = useState(false)
    const dispatch = useDispatch()

    const initialValues = {
        instagram: '',
        linkedin: '',
        twiter: '',
        facebook: '',
        youtube: '',
    }

    /*const validationSchema = Yup.object().shape({

    })*/


    const handleSubmit = (valores) => {
        console.log(valores)
        setEnviar(true)
        dispatch(RegisterStep3(valores))
        setTimeout(() => {
            setEnviar(false)
            handleClick("next")
        },2000)
        
    }

    return (
        <Fragment>
            {enviar ? (<ValidatorRegisterFinalStep />) : (

                <Formik 
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >

                    <Form>
                        <div className="w-full h-full">
                            <div className="h-full w-full flex flex-col justify-center items-center">
                                <h3 className=" text-md sm:text- text-[#00D3E0] mt-6 sm:pt-2 pt-12">Paso 3 de 3</h3>
                                <h2 className="text-3xl font-semibold text-white pt-6 pb-4">Redes sociales</h2>
                                <div className="w-3/5 h-1/2 sm:mt-0 sm:pt-12 pt-14" id="socialNetworkAccounts">
                                    <div className=" w-full">
                                        <Field type="text" id="instagram" name="instagram"
                                            className="transition-all md:w-[5/6] h-full w-[3/5] block py-3 px-0 w-full text-sm 
                                            sm:text-[18px] text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold icon-placeholder-rrss instagram"
                                            placeholder=" " 
                                        />
                                    </div>
                                    <div className="mt-2 w-full">
                                        <Field type="text" id="linkedin" name="linkedin"
                                            className="transition-all md:w-[5/6] h-full w-[3/5] block py-3 px-0 w-full text-sm 
                                            sm:text-[18px] text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold icon-placeholder-rrss linkedin"
                                            placeholder=" " 
                                        />
                                    </div>
                                    <div className="mt-2 w-full">
                                        <Field type="text" id="twiter" name="twiter"
                                            className="transition-all md:w-[5/6] h-full w-[3/5] block py-3 px-0 w-full 
                                            text-sm sm:text-[18px] text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold icon-placeholder-rrss twitter"
                                            placeholder=" " 
                                        />
                                    </div>
                                    <div className="mt-2 w-full">
                                        <Field type="text" id="facebook" name="facebook"
                                            className="transition-all md:w-[5/6] h-full w-[3/5] block py-3 px-0 w-full text-sm 
                                            sm:text-[18px] text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold icon-placeholder-rrss facebook"
                                            placeholder=" " 
                                        />
                                    </div>
                                    <div className="mt-2 w-full">
                                        <Field type="text" id="youtube" name="youtube"
                                            className="transition-all md:w-[5/6] h-full w-[3/5] block py-3 px-0 w-full text-sm 
                                            sm:text-[18px] text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold icon-placeholder-rrss youtube"
                                            placeholder=" " 
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
socialNetworkId="1"
socialNetworkId="2"
socialNetworkId="3"
socialNetworkId="4"
socialNetworkId="5"


*/

