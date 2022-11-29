import React from 'react'
import logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

const Home = () =>  {
	return (
		<div class="w-full h-screen overflow-hidden -mb-7">
			<div className="font-sans bg-cover bg-no-repeat bg-heroMain h-full" >
			<div className="flex items-start justify-end w-full h-full bg-gray-900 bg-opacity-50">
				<div className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
		            <a href="https://Atletasdevenezuela.com" className="flex p-2 items-center">
		            	<img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
		            </a>
		            <p className="text-3xl font-semibold text-white py-6">Bienvenido</p>
		            <div className="w-4/6 text-center">
		                <p className="text-xl font-normal text-white py-6">¡Regístrate para que seas parte de Atletas de Venezuela!</p>
		                <Link to="/register"> <button type='button' className="text-white w-5/6 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Comenzar</button></Link>
		            </div>
		            <div className="w-5/6 md:w-[45%]  flex text-center py-10 justify-between">
		                <p className="text-md sm:text-lg  text-white"> ¿Ya tienes cuenta?</p>
		                <Link to="/IniciarSesion" className="text-[#0091FF] text-md sm:text-lg">Iniciar sesión</Link>
		            </div>
		        </div>
		        </div>
		    </div>
		</div>

	)
}

export default Home


/*


<div className="flex items-end justify-center w-full h-full bg-gray-900 bg-opacity-50">
		           <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
		            <p className="text-3xl font-semibold text-white py-6">Bienvenido</p>
		            <div className="w-4/6 text-center">
		                <p className="text-xl font-normal text-white py-6">¡Regístrate para que seas parte de Atletas de Venezuela!</p>
		                <Link to="/Registro"> <button type='button' className="text-white w-5/6 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Comenzar</button></Link>
		            </div>
		            <div className="w-5/6 md:w-[45%]  flex text-center py-10 justify-between">
		                <p className="text-md sm:text-lg  text-white"> ¿Ya tienes cuenta?</p>
		                <Link to="/IniciarSesion" className="text-[#0091FF] text-md sm:text-lg">Iniciar sesión</Link>
		            </div> 
		           
		        </div>

<div className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
            <a href="./../../index.html" className="flex p-2 items-center">
            </a>
            <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            <p className="text-3xl font-semibold text-white py-6">Bienvenido</p>
            <div className="w-4/6 text-center">
                <p className="text-xl font-normal text-white py-6">¡Regístrate para que seas parte de Atletas de Venezuela!</p>
                <Link to="/Registro"> <button type='button' className="text-white w-5/6 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Comenzar</button></Link>
            </div>
            <div className="w-5/6 md:w-[45%]  flex text-center py-10 justify-between">
                <p className="text-md sm:text-lg  text-white"> ¿Ya tienes cuenta?</p>
                <Link to="/IniciarSesion" className="text-[#0091FF] text-md sm:text-lg">Iniciar sesión</Link>
            </div>
        </div>

*/
