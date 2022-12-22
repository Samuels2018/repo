import React, {useState, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {completeDataStep1} from '../../redux/features/completeDataStepsSlice'
import logo from '../../assets/Logo.png'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Link, useNavigate} from 'react-router-dom'
import AtleteComponent from '../../components/completeDataSpotsComponents/AtleteComponent'
import Spinner from '../../components/loadingComponents/Spinner' 
import AskId from '../../components/completeDataSpotsComponents/AskId'

export default function GeneralDataAthlete () {

    const dispatch = useDispatch()
    const athlete = useSelector(state => state.completeDatalogin.status)
    const [enviar, setEnviar] = useState(false)
    const [message, setMessage] = useState('')
    const [next, setNext] = useState(false)
    console.log(athlete)
    const navigate = useNavigate()
    const initialValues = {
        birthday: '',
        age: '',
        gener: '',
        placebourn: '',
        state: '',
        city: '',
        municipality: '',
        parish: '',
    }

    const validationSchema = Yup.object().shape({
        birthday: Yup.string().required('la fecha de nacimiento es requerida')

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
        dispatch(completeDataStep1(valores))
        setTimeout(() => {
            if (athlete === 201 || athlete === 200) {
                setEnviar(false)
                setNext(true)

            }else{
                setEnviar(false)
              //const {Message} = user
                setMessage("Error")
              //setMessage(Message)
              //console.log(Message)
            }
        },2000)
        //navigate('')
    }
    //flex flex-col justify-center items-center

    return (

    <AtleteComponent>
        {enviar ? (<Spinner />): (
            <Fragment>
            {next ? (<AskId />) : (

                <div className="w-full h-full flex flex-col justify-center items-center">

                    <Link to="/" className="flex p-2 items-center">
                     <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
                    </Link>


                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                    <Form className="w-full h-full">
                        <div className="">
                            <div className="h-full w-full flex flex-col justify-center items-center">
                                <h3 className=" text-md text-[#00D3E0]">Paso 1 de 6</h3>
                                <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">Completa Tus Datos</h2>

                                <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-2 w-5/6 ">
                                    <div className=" ">
                                        <label htmlFor="firstName" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Fecha de Nacimiento <mark className="bg-transparent text-red-600">*</mark></label>

                                        <Field 
                                            type="date" id="firstName" name="birthday"
                                            className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="birthday" placeholder="" required 
                                        />

                                        <div>

                                            <ErrorMessage
                                              name="birthday"
                                              component="div"
                                              className="text-red-600 text-sm"
                                            />

                                        </div>

                                    </div>

                                    
                                    <div className=" ">
                                        <label htmlFor="Edad" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Edad</label>

                                        <Field type="text" id="secondName" name="age"
                                            className=" transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="age" placeholder="ejemplo: 21" 
                                        />

                                    </div>
                                
                                     
                                     <div className=" ">
                                        <label htmlFor="gener" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Genero</label>

                                        <Field type="text" id="surname" name="gener"
                                            className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="gener" placeholder="ejemplo: masculino" 
                                        />

                                    </div>

                                    <div className="">
                                        <label htmlFor="place" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Lugar de Nacimineto</label>

                                        <Field type="text" id="secondSurname" name="placebourn"
                                            className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="placebourn" placeholder="ejemplo: Caracas" 
                                        />

                                    </div>

                                    <div className="">
                                        <label htmlFor="estado" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Estado</label>

                                        <Field type="text" id="email" name="state"
                                            className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-email shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="state" placeholder="ejemplo: Carabobo" 
                                        />

                                    </div>

                                    <div className="">
                                        <label htmlFor="ciudad" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Ciudad</label>

                                        <Field type="text" id="emailconfirmation" name="city"
                                            className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-email shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="city" placeholder="ejemplo: Caracas" 

                                        />

                                    </div>

                                    

                                    <div className="">
                                        <label htmlFor="municipality" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Municipio</label>
                                        
                                        <Field type="parroquia" id="mobilePhoneNumber" name="municipality"
                                            className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-phone shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="municipality" placeholder="ejemplo: some municipality" 
                                        />
                                    </div>

                                    <div className="">
                                        <label htmlFor="parroquia" className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1">Parroquia </label>
                                        
                                        <Field type="parroquia" id="mobilePhoneNumber" name="parish"
                                            className="transition-all w-full block py-2 px-0 w-full text-[11px] sm:text-sm 
                                            text-[#4E4B4B] rounded-lg icon-placeholder-phone shadow-sm focus:outline-none 
                                            focus:shadow-outline font-semibold"
                                            autoComplete="parish" placeholder="ejemplo: Santa rosa" 
                                        />
                                    </div>

                                    
                                   
                                </div>
                                <div
                                className="inline-flex w-5/6 items-center pt-8 justify-center"
                                >
                                    <button
                                        type="submit"
                                        className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Siguiente
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>

                </div>


            )}
            
         </Fragment>
        )}
        
                
    </AtleteComponent >
                
                  
        
    );

}