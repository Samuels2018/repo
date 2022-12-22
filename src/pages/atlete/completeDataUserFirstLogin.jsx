import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AtleteComponent from '../../components/completeDataSpotsComponents/AtleteComponent'
import logo from '../../assets/Logo.png'
import { ReactComponent as IconHand }  from '../../assets/mano.svg'

const CompleteDataUserFirstLogin = () => {

    return (
        <AtleteComponent>
            <div className="h-full w-full flex flex-col justify-center items-center">
               <Link to="/"  className="flex p-2 items-center">
                    <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
                </Link>

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
                            <Link
                                to="/completeData/generalInfo"
                                className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br 
                                focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 
                                py-2.5 text-center mb-2"
                            >
                               Si
                            </Link>    
                            <Link 
                                to="/"
                                className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                                hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 
                                font-medium rounded-full text-sm px-14 py-2.5 text-center mr-2 mb-2"
                            >
                                No
                            </Link>

                           
                        </div>

                    </div>
                </div>
                
            </div>           
    </AtleteComponent>                    
        
    )    
}

export default CompleteDataUserFirstLogin


/*

case 1:
                return <CompleteData
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps} 
                />;
            case 2:
                return <GeneralDataAthlete
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                 />;
            case 3:
                return <AskId
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            case 4:
                return <PersonalDataAthlete 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            case 5:
                return <AskPassport
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps} 
                />;
            case 6:
                return <DataPassport
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                 />;
            case 7:
                return <MeasureAndSize
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            case 8:
                return <AskVaccine 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            case 9:
                return <RegisterVaccine
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps} 
                />;
            case 10:
                return <AskDisable
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                 />;
            case 11:
                return <RegisterInformation
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
            case 12:
                return <SuccessfullLoginInformation 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;

            default:



*/