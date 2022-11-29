import React, { useState } from 'react'
import Stepper from "../components/stepsRegister/Stepper";
//import StepperControl from "../components/stepsRegister/StepsControl";
import {useDispatch, useSelector} from 'react-redux'
import GeneralInfo from "../components/stepsRegister/steps/GeneralInfo";
import SocialNetworks from "../components/stepsRegister/steps/RRSS";
import SuccessfulRegister from "../components/stepsRegister/steps/SuccessfulRegister";
import UserType from "../components/stepsRegister/steps/UserType";


const Register = () => {

	const [currentStep, setCurrentStep] = useState(1);
	const [userStep, setUserStep] = useState(0)


    const steps = [
        "Tipo de Usuario",
        "Información General",
        "Redes Sociales",
        "Completado",
    ];
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <UserType
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps} 
                />;
            case 2:
                return <GeneralInfo
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                 />;
            case 3:
                return <SocialNetworks
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            case 4:
                return <SuccessfulRegister 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            default:
        }
    };


    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
        console.log(currentStep)
    }

	return (
		<div className="w-full h-screen overflow-hidden -mb-7">
			<div className="font-sans bg-cover bg-no-repeat bg-heroPasos h-full" >
				<div className="flex items-start justify-end w-full h-full bg-gray-900 bg-opacity-50">
		            
	            	<div id="register-form" className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
	            		<div className="w-full h-full">

		                	{displayStep(currentStep)}
		            	</div>

	            	</div>
			    </div>
		    </div>
		</div>

	)	

}

export default Register


/*

{currentStep !== steps.length && (
                            <StepperControl
                                handleClick={handleClick}
                                currentStep={currentStep}
                                steps={steps}
                            />
                        )}

<form id="register-form" className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
		            <div className="w-full h-full">

	                	{displayStep(currentStep)}
	            	</div>

	            	<div className="pb-3 w-full justify-center flex mb-4">
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
                        onClick={() => handleClick("next")}
                        className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                    >
                        {currentStep === steps.length - 1 ? "Confirmar" : "Siguiente"}
                    </button>
                </div>
            </div>
        </div>

	            	
	            </form>

{currentStep !== steps.length && (
		                <StepperControl
		                    handleClick={handleClick}
		                    currentStep={currentStep}
		                    steps={steps}
		                />
		            )}

const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Tipo de Usuario",
        "Información General",
        "Redes Sociales",
        "Completado",
    ];
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <UserType />;
            case 2:
                return <GeneralInfo />;
            case 3:
                return <SocialNetworks />;
            case 4:
                return <SuccessfulRegister />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <form id="register-form" className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
            <div className="w-full h-full">
                {/*<UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
            </div>

            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )}

        </form>
    )

*/