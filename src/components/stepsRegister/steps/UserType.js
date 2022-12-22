import React, {Fragment, useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {RegisterStep1} from '../../../redux/features/registerStepsSlice'
import Spinner from '../../loadingComponents/Spinner'

export default function UserType({handleClick, currentStep, steps }) {

    const [error, setError] = useState("")
    const [enviar, setEnviar] = useState(false)
    const [opcion1, setOpcion1] = useState(false)
    const [opcion2, setOpcion2] = useState(false)
    const [opcion3, setOpcion3] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (opcion1 === false && opcion2 === false && opcion3 === false) {
            setError("debe Selecionar algun campo")
        
        }else {
            setEnviar(true)
            if (opcion1 === true) {
                dispatch(RegisterStep1({userCategoryId: 1}))
            }else if (opcion2 === true) {
                dispatch(RegisterStep1({userCategoryId: 2}))
            }else {
                dispatch(RegisterStep1({userCategoryId: 3}))
            }
            setTimeout(() => {
                setEnviar(false)
                handleClick("next")
            },2000)
        }
    }

    return (
        <Fragment>
        {enviar ? (<Spinner />): (
            <form  onSubmit={handleSubmit} className="w-full h-full">
        
            <div className="h-full w-full flex flex-col justify-center items-center">
                <h3 className=" text-md sm:text- text-[#00D3E0]">Paso 1 de 3</h3>
                <h2 className="text-3xl font-semibold text-white py-6">Registro de usuario</h2>
                <div className="w-3/5 h-1/2 sm:mt-0 pt-6 checkbox">
                    <div id="atleta" className="sm:h-1/3 flex justify-start items-center h-1/4 md:mb-3 mb-4 w-full bg-[#2D3450]/75 hover:bg-gradient-to-bl from-[#00D3E0] to-[#2D3450] rounded-md text-white text-xs sm:text-sm font-normal">
                        <input onClick={() => setOpcion1(!opcion1)} type="checkbox" name="userCategoryId" value="1" className="w-1/4 md:w-1/6 h-4/6 sm:mx-4 mx-2 bg-[#786CFF2A] rounded-md"></input>
                        Atleta
                    </div>
                    <div id="representante-deportivo" className="sm:h-1/3 flex justify-start items-center h-1/4  md:mb-3 mb-4 w-full bg-[#2D3450]/75 hover:bg-gradient-to-bl from-[#00D3E0] to-[#2D3450] rounded-md text-white text-xs sm:text-sm font-normal">
                        <input onClick={() => setOpcion2(!opcion2)} type="checkbox" name="userCategoryId" value="2" className="w-1/4 md:w-1/6 h-4/6 sm:mx-4 mx-2 bg-[#786CFF2A] rounded-md"></input>
                        Representante deportivo
                    </div>
                    <div id="representante-legal" onClick={() => setOpcion3(!opcion3)} className="sm:h-1/3 flex justify-start items-center h-1/4  md:mb-3 mb-4 w-full bg-[#2D3450]/75 hover:bg-gradient-to-bl from-[#00D3E0] to-[#2D3450] rounded-md text-white text-xs sm:text-sm font-normal">
                        <input type="checkbox" name="userCategoryId" value="3" className="w-1/4 md:w-1/6 h-4/6 sm:mx-4 mx-2 bg-[#786CFF2A] rounded-md"></input>
                        Representante legal
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
                 {error ? (<div className="text-red-600 text-sm">{error}</div>) : null}
            </div>

        
       </form>
        )}
        </Fragment>
        

    );

}

/*

const [error, setError] = useState(false)
    const [enviar, setEnviar] = useState(false)
    const dispatch = useDispatch()
    const initialValue = {
        atleta: false,
        RepresentanteDeportivo: false,
        RepresentanteLegal: false,
    }

    const handleSubmit = (valores) => {
        const {atleta,RepresentanteDeportivo,RepresentanteLegal} = valores
        if (valores.atleta === false && valores.RepresentanteDeportivo === false && valores.RepresentanteLegal === false) {
            setError("debe Selecionar algun campo")
        
        }else {
            setEnviar(true)
            dispatch(RegisterStep1(valores))
            setTimeout(() => {
                setEnviar(false)
            },2000)
            handleClick("next")
        }
    }

    return (
        
        <div className="w-full h-full">
            {enviar ? (<Spinner />) : (
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <h3 className=" text-md sm:text- text-[#00D3E0]">Paso 1 de 3</h3>
                    <h2 className="text-3xl font-semibold text-white py-6">Registro de usuario</h2>
                    <div className="w-3/5 h-1/2 sm:mt-0 pt-6 checkbox">
                        <Formik 

                            initialValue={initialValue}
                            onSubmit={handleSubmit}
                        >

                            <Form >

                                <div id="atleta" className="sm:h-1/3 flex justify-start items-center h-1/4 md:mb-3 mb-4 w-full bg-[#2D3450]/75 hover:bg-gradient-to-bl from-[#00D3E0] to-[#2D3450] rounded-md text-white text-xs sm:text-sm font-normal">
                                    <Field type="checkbox" name="atleta" value="1" className="w-1/4 md:w-1/6 h-4/6 sm:mx-4 mx-2 bg-[#786CFF2A] rounded-md" />
                                    Atleta
                                </div>

                                <div id="representante-deportivo" className="sm:h-1/3 flex justify-start items-center h-1/4  md:mb-3 mb-4 w-full bg-[#2D3450]/75 hover:bg-gradient-to-bl from-[#00D3E0] to-[#2D3450] rounded-md text-white text-xs sm:text-sm font-normal">
                                    <Field type="checkbox" name="RepresentanteDeportivo" value="2" className="w-1/4 md:w-1/6 h-4/6 sm:mx-4 mx-2 bg-[#786CFF2A] rounded-md" />
                                    Representante deportivo
                                </div>
                                <div id="representante-legal" className="sm:h-1/3 flex justify-start items-center h-1/4  md:mb-3 mb-4 w-full bg-[#2D3450]/75 hover:bg-gradient-to-bl from-[#00D3E0] to-[#2D3450] rounded-md text-white text-xs sm:text-sm font-normal">
                                    <Field type="checkbox" name="RepresentanteLegal" value="3" className="w-1/4 md:w-1/6 h-4/6 sm:mx-4 mx-2 bg-[#786CFF2A] rounded-md" />
                                    Representante legal
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
                                        {error ? (<div className="text-red-600 text-sm">{error}</div>) : null}
                                    </div>
                                </div>
                            </Form>

                        </Formik>
                    </div>
                </div>
            )}

        </div>


    );


*/

