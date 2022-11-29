import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { ReactComponent as IconHand }  from '../../assets/mano.svg'


const CompleteData = ({handleClick, currentStep, steps}) => {
    

    return (

       <div className="h-full w-full flex flex-col justify-center items-center">
           <a href="./../../index.html" className="flex p-2 items-center">
                <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            </a>
            <div className="flex p-2 items-center">
                <IconHand className="sm:h-24 h-12 py-1 px-1" alt="Atletas Logo" />
            </div>
            <div className="p-10 flex flex-col w-5/6 items-center justify-center">
            <h2 className="text-2xl mb-4 text-white text-center font-bold">
                Bienvenido
            </h2>
            <h2 className="text-2xl mb-4 text-white text-center font-bold">
                Desea Completar tus datos ahora ?
            </h2>

                <div
                className="mb-8 mt-6 sm:w-4/6 w-full font-bold text-xl text-center leading-loose"
                >
                    
                    <div
                    className="inline-flex w-5/6 items-center pt-8 justify-between"
                    >
                        <button
                            onClick={() => handleClick("next")}
                            className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br 
                            focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 
                            py-2.5 text-center mb-2"
                        >
                            {currentStep === steps.length - 1 ? "Confirmar" : "Si"}
                           
                        </button>    
                        <a 
                            href="https://Atletasdevenezuela.com"
                            className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                            hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 
                            font-medium rounded-full text-sm px-14 py-2.5 text-center mr-2 mb-2"
                        >
                            No
                        </a>

                       
                    </div>

                </div>
        </div>
        </div>

      
    )
	
}

export default CompleteData



/*

<div className=" flex-col flex rounded-lg bg-[#222332]/80 justify-center items-center">
        <a href="./../../index.html" className="flex p-2 items-center">
            <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
        </a>

        <div className="flex p-2 items-center">
            <IconHand className="sm:h-24 h-12 py-1 px-1" alt="Atletas Logo" />
        </div>
                    
        
    </div>

*/