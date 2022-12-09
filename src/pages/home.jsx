import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Images from '../utils/images/images'




const Home = () =>  {
	return (
		<Fragment>
		<div className="h-screen justify-center mt-0 lg:mt-14" style={{background: "rgb(0,0,0)", background: "linear-gradient(120deg, rgba(255,204,0,1) 50%, rgba(0,0,0,1) 50%)"}}>
	        <div className="mt-0 lg:mt-14 h-[99%] ">
	            <div id="default-carousel" className="relative h-full" data-carousel="static">
	                {/*<!-- Carousel wrapper -->*/}
			        <div className="mt-0 lg:mt-14 h-full">
			                <div className="overflow-hidden relative w-full h-full ">
			                    {/*<!-- Item 1 -->*/}
			                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
			                        <span className="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">Los futbolistas venezolanos en diferentes ligas del mundo han contribuido a afianzar el interés por el más universal de los deportes.</span>
			                        <div className="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
			                            <button type="button" className="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-black bg-[#FFCC00] rounded-lg hover:bg-blue-800 hover:text-white transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
			                        </div>
			                        <img src={Images.Hero} className="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                        <img src={Images.HeroMovil} className="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                    </div>
			                    {/*<!-- Item 2 -->*/}
			                    <div className="duration-700 ease-in-out  absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="1">
			                        <span className="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">Yulimar Andrea Rojas Rodríguez es una atleta venezolana campeona olímpica en 2021 en triple salto</span>
			                        <div className="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
			                            <button type="button" className="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-white bg-[#EF6D5D] rounded-lg hover:bg-white hover:text-[#EF6D5D] transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
			                        </div>
			                        <img src={Images.BANNER2} className="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                        <img src={Images.ImagenMovil1} className="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                    </div>
			                    {/*<!-- Item 3 -->*/}
			                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="2">
			                        <span className="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">En 1925 se organiza en Caracas la divisa pionera del país, el Ávila Tenis Club que funcionaba en el sector capitalino</span>
			                        <div className="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
			                            <button type="button" className="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-black bg-[#FFCC00] rounded-lg hover:bg-blue-800 hover:text-white transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
			                        </div>
			                        <img src={Images.BANNER3} className="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                        <img src={Images.HeroMovil3} className="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                    </div>
			                    {/*<!-- Item 4 -->*/}
			                    <div className="duration-700 ease-in-out  absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="3">
			                        <span className="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">La natación es un deporte cuya competencia se centra en el tiempo, batir récords y distancias</span>
			                        <div className="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
			                            <button type="button" className="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-white bg-[#EF6D5D] rounded-lg hover:bg-white hover:text-[#EF6D5D] transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
			                        </div>
			                        <img src={Images.BANNER4} className="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                        <img src={Images.HeroMovil4} className="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
			                    </div>
			                </div>
			                {/*<!-- Slider indicators -->*/}
			                <div className="flex absolute bottom-5 left-1/2 sm:left-1/4 z-30 space-x-3 -translate-x-1/2">
			                    <button type="button" className="w-2 h-2 " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
			                    <button type="button" className="w-2 h-2 " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
			                    <button type="button" className="w-2 h-2 " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
			                    <button type="button" className="w-2 h-2 " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="3"></button>
			                </div>
			                
			                {/*<!-- Slider controls -->*/}
			                <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-0 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
			                    <span className=" banner-indicator-l inline-flex justify-center items-center w-12 h-8 sm:w-12 sm:h-10" >
			                        <div className="h-4 w-5"> {/*<svg enable-background="new 0 0 32 32" id="svg2" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" id="id_101"></rect></g><g id="arrow_x5F_left"><polygon points="22,2.001 8,16 22,30  " id="id_102" style="fill: rgb(255, 255, 255);"></polygon></g></svg>*/}</div>
			                        <span className="sr-only">Anterior</span>
			                    </span>
			                </button>
			                <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-0 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
			                    <span className="banner-indicator-r inline-flex justify-center items-center w-12 h-8 sm:w-12 sm:h-10">
			                        <div className="h-4 w-5"> {/*<svg enable-background="new 0 0 32 32" id="svg2" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" id="id_101"></rect></g><g id="arrow_x5F_right"><polygon points="10,2.001 24,16 10,30  " id="id_102" style="fill: rgb(255, 255, 255);"></polygon></g></svg>*/}</div>
			                        <span className="sr-only">Siguiente</span>
			                    </span>
			                </button>
			            </div>
	        </div>   
	    </div>
	</div>

	<section id="nosotros">
    <div className="landscape-about h-75 justify-center border-none mb-0 md:flex-row flex-col flex sm:mt-[-50px] lg:mt-[0px]">
        <div className="landscape-img-about lg:w-1/2 justify-center inline-flex h-[90%] md:mt-[120px] lg:mt-[0px]">    {/*<!--hidden md:inline-flex -->*/}
            <div className="grid grid-cols-2 gap-3 mb-0 mt-8 sm:mt-28 h-[420px] w-[450px]">
                <div className="md:h-[205px] h-[155px] md:w-[220px] w-[170px] md:mt-10 mt-5 ml-5 sm:ml-0  rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src={Images.Nosotros1} className="block rounded-lg  h-full w-full " alt="basketball" />
                </div>
                <div className="md:h-[160px] h-[110px] md:w-[175px] w-[125px] md:mt-0 mt-5 ml-4 rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src={Images.Nosotros2} className="block rounded-lg  h-full w-full " alt="estadio" />
                </div>
                <div className="lansc-img-futbol md:h-[120px] h-[100px] md:w-[175px] w-[150px] md:ml-12 ml-10 mt-[-50px] md:mt-0 rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src={Images.Nosotros3} className="block rounded-lg  h-full w-full " alt="futbol" />
                </div>
                <div className="md:h-[240px] h-[185px] md:w-[195px] w-[140px] md:ml-5 ml-1 md:mt-[-85px] mt-[-85px] rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src={Images.Nosotros4} className="block rounded-lg  h-full w-full " alt="tenis" />
                </div>
            </div>
        </div>
        <div className="landscape-text-about sm:w-1/2 w-5/6 h-[90%] mt-[-75px] sm:mt-[0px] ml-5 md:ml-0 flex align-center justify-center"> 
            <div className="block w-full">
                <div className="w-5/6 flex">
                    <span className="text-[#EF6D5D] text-x mt-2 sm:mt-28 mb-5">SOBRE NOSOTROS</span>
                </div>
                <div className="w-5/6 flex mb-5">
                    <span className="text-5xl font-medium text-[#333333]">Atletas de Venezuela</span>
                </div>
                <div className="">
                    <ul className="w-full"> 
                        <li className="my-4 inline-flex text-justify">
                            <div className="w-6 h-6 mr-2 mt-3  justify-center flex rounded-full bg-[#FFF2DF]">
                                <div className="w-3/4 h3/4 mt-[2.5px]">{/*<svg enable-background="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#333333" fillRule="evenodd" id="Chevron_Right"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg>*/}</div>
                            </div>
                            <span className="w-5/6"> El portal Atletas de Venezuela permite realizar el registro para el análisis de datos del sector deportivo.</span>
                        </li>
                        <li className="my-4 inline-flex text-justify">
                            <div className="w-6 h-6 mr-2 mt-8 justify-center flex rounded-full bg-[#FFF2DF]">
                                <div className="w-3/4 h3/4 mt-[2.5px]">{/*<svg enable-background="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#333333" fillRule="evenodd" id="Chevron_Right"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg>*/}</div>
                            </div> 
                            <span className="w-5/6"> Gracias al tratamiento de grandes volúmenes de información que manejamos, de nuestros atletas, podemos organizar, clasificar y facilitar la logística <br /> para mejorar la toma de decisiones en terrenos deportivos.</span>
                        </li>
                        <li className="my-4 inline-flex text-justify">
                            <div className="w-6 h-6 mr-2 mt-6 justify-center flex rounded-full bg-[#FFF2DF]">
                                <div className="w-3/4 h3/4 mt-[2.5px]">{/*<svg enable-background="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#333333" fillRule="evenodd" id="Chevron_Right"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg>*/}</div>
                            </div> 
                            <span className="w-5/6"> Te invitamos estimado atleta a que te registres o actualices tus datos para que seas parte de la gran plataforma tecnológica realizada para ti.</span>
                        </li>
                    </ul>
                </div>
                <div className="ml-8 mt-2">
                    <button type="button" className="text-sm px-6 py-2 font-medium text-center text-white bg-[#EF6D5D] rounded-lg hover:bg-white hover:text-[#EF6D5D] transition focus:ring-4 focus:outline-none focus:ring-blue-300">REGÍSTRATE</button>
                </div>
            </div>
        </div>
    </div>
    </section>

    {/*
    <section id="calendario">
        <div className="h-100 justify-center align-center border-none flex ">
            <div className="w-5/6 flex mb-5 h-[90%] md:mt-28 justify-center align-center flex-wrap">
                <div className="block h-[15%]">
                    <div className="mb-2 mt-24 sm:mt-0">
                        <span className="sm:text-5xl   text-4xl font-medium text-[#141414]">Calendario 2022/23</span>
                    </div>
                    <div>
                        <span className=" sm:text-2xl text-xl font-medium ml-20 sm:ml-[115px]">Filtro según deporte</span>
                    </div>
                </div>

                TABLA DE CALENDARI
                <div className="w-full h-[75%] my-5">
                    INDICADORES - NAVBAR DE CALENDARIO
                    <div className="mb-4">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#contenido" role="tablist">
                            <li className="mr-2" role="futbol">
                                <button className="inline-block p-4 rounded-t-lg border-b-2 " id="futbol-tab" data-tabs-target="#futbol" type="button" role="tab" aria-controls="futbol" aria-selected="false">Fútbol</button>
                            </li>
                            <li className="mr-2" role="basket">
                                <button className="inline-block p-4 rounded-t-lg border-b-2" id="basket-tab" data-tabs-target="#basket" type="button" role="tab" aria-controls="basket" aria-selected="false">Basket</button>
                            </li>
                            <li className="mr-2" role="tenis">
                                <button className="inline-block p-4 rounded-t-lg border-b-2 " id="tenis-tab" data-tabs-target="#tenis" type="button" role="tab" aria-controls="tenis" aria-selected="false">Tenis</button>
                            </li>
                            <li role="natacion">
                                <button className="inline-block p-4 rounded-t-lg border-b-2 " id="natacion-tab" data-tabs-target="#natacion" type="button" role="tab" aria-controls="natacion" aria-selected="false">Natación</button>
                            </li>
                        </ul>
                    </div>
                    <div id="contenido">
                        TABLA DE FUTBOL 
                        <div className="hidden p-4 rounded-lg dark:bg-gray-800" id="futbol" role="tabpanel" aria-labelledby="futbol-tab">
                            <div className="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-8" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[55%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.Monagas} alt="monagas-fc" /><p className="text-[#767676] text-xs font-medium w-full ">MONAGAS FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.AtleticoVenezuela} alt="caracas-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">CARACAS FC</p></div>
                                        </div>
                                        <div className="w-[55%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">27 AGOSTO 2022 - 5:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-10" src={Images.DeportivoLara} alt="deportivo-lara" /><p className="text-[#767676] text-xs font-medium w-full ">DEPORTIVO LARA</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Aragua} alt="aragua-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">ARAGUA FC</p></div>
                                        </div>
                                        <div className="w-[55%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">29 AGOSTO 2022 - 2:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div className="w-45 h-10"><img className="w-8 h-8 mx-12" src={Images.DeportivoLaGuaira} alt="deportivo-guaira" /><p className="text-[#767676] text-xs font-medium w-full ">DEPORTIVO LA GUAIRA</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-45 h-10"> <img className="w-8 h-8 mx-12" src={Images.DeportivoTáchira} alt="deportivo-tachira" /><p className="text-[#767676] text-xs  font-medium w-full ">DEPORTIVO TÁCHIRA</p></div>
                                        </div>
                                        <div className="w-[55%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">01 SEPTIEMBRE 2022 - 6:00PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        TABLA DE BASKET 
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="basket" role="tabpanel" aria-labelledby="basket-tab">
                            <div className="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        TABLA DE TENIS 
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="tenis" role="tabpanel" aria-labelledby="tenis-tab">
                            <div className="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa.png} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        TABLA DE NATACION 
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="natacion" role="tabpanel" aria-labelledby="natacion-tab">
                            <div className="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.Carabobo} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div className="h-[65px] flex flex-nowrap">
                                    <div className="w-[10%] h-full c1"> </div>
                                    <div className="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div className="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div className="w-25 h-10"><img className="w-8 h-8 mx-5" src={Images.CaraboboFc} alt="carabobo-fc" /><p className="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p className="text-[#767676] text-xs w-5 ">vs</p>
                                            <div className="w-25 h-10"> <img className="w-8 h-8 mx-5" src={Images.Portuguesa} alt="portuguesa-fc" /><p className="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                            <ul className=" items-center justify-center my-4 text-center">
                                                <li><p className="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p className="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul className="ml-5 align-center justify-center my-2 text-center">
                                            <li><p className="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p className="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    </section>*/}


    <section id="galeria" className="landscape-gallery md:h-full h-4/6 sm:mb-24 mb-2 mt-[-50px] md:mt-[-100px] lg:mt-[0px]">
        <div className="h-full justify-center border-none flex ">
            <div className="h-full md:w-5/6  flex sm:mb-5 mb-0 h-full md:mt-8 justify-center flex-col flex-wrap">
                <div className="landscape-gallery-title block h-[10%] text-center">
                    <div className="mb-6 md:mb-12 mt-0">
                        <span className="sm:text-5xl text-center  text-4xl font-medium text-[#141414]">Galería de Imágenes</span>
                    </div>
                </div> 
                <div className="landscape-gallery-div sm:h-4/6 sm:w-full w-5/6 md:ml-0 ml-8 h-3/6">
                    <div className="grid grid-cols-4 grid-rows-6 grid-flow-col gap-4 lg:gap-10 h-full w-full mt-6">
                        {/*<!-- IMAGEN 1-->*/}
                        <div className="col-start-1 col-end-3 row-start-1 row-end-4 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src={Images.Galeria} className="w-full object-cover h-full object-top" alt="basket" type="button" data-modal-toggle="imagen1" />
                        </div>
                        <div id="imagen1" tabIndex="-1" aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                                <div className="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                    {/*<!-- Modal content -->*/}
                                    <div className="relative rounded-lg">
                                        {/*<!-- Modal header -->*/}
                                        <div className="flex justify-between items-start p-2 rounded-t">
                                            <button type="button" className="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen1">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                <span className="sr-only">Cerrar</span>
                                            </button>
                                        </div>
                                        <div className="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                            <img src={Images.Galeria} className="w-full rounded-lg object-cover h-full object-top" alt="basket" />
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/*<!-- IMAGEN 2 -->*/}
                        <div className="col-start-3 col-end-5 lg:col-end-4 row-start-1 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src={Images.Galeria4} className="w-full object-cover h-full object-top" alt="yulimar-rojas" type="button" data-modal-toggle="imagen2" />
                        </div>
                        <div id="imagen2" tabIndex="-1" aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div className="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                {/*<!-- Modal content -->*/}
                                <div className="relative rounded-lg">
                                    {/*<!-- Modal header -->*/}
                                    <div className="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" className="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen2" >
                                            <svg aria-hidden="true" className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div className="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src={Images.Galeria4} className="w-full rounded-lg object-cover h-full object-top" alt="yulimar-rojas" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- IMAGEN 3 -->*/}
                        <div className="hidden lg:block col-start-4 col-end-5 row-start-1 row-end-4 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src={Images.Galeria5} className="w-full object-cover h-full object-top" alt="natacion" type="button" data-modal-toggle="imagen3" />
                        </div>
                        <div id="imagen3" tabIndex="-1" aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div className="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                {/*<!-- Modal content -->*/}
                                <div className="relative rounded-lg">
                                    {/*<!-- Modal header -->*/}
                                    <div className="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" className="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen3">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div className="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src={Images.Galeria5} className="w-full rounded-lg object-cover h-full object-top" alt="natacion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- IMAGEN 4 -->*/}
                        <div className="col-start-1 col-end-2 row-start-4 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src={Images.Galeria2} className="w-full object-cover h-full object-top" alt="atletas" type="button" data-modal-toggle="imagen4" />
                        </div>
                        <div id="imagen4" tabIndex="-1" aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div className="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                {/*<!-- Modal content -->*/}
                                <div className="relative rounded-lg">
                                    {/*<!-- Modal header -->*/}
                                    <div className="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" className="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen4">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div className="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src={Images.Galeria2} className="w-full rounded-lg object-cover h-full object-top" alt="atletas" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- IMAGEN 5 -->*/}
                        <div className="col-start-2 col-end-3 row-start-4 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src={Images.Galeria3} className="w-full object-cover h-full object-top" alt="basket" type="button" data-modal-toggle="imagen5" />
                        </div>
                        <div id="imagen5" tabIndex="-1" aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div className="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                {/*<!-- Modal content -->*/}
                                <div className="relative rounded-lg">
                                    {/*<!-- Modal header -->*/}
                                    <div className="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" className="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen5">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div className="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src={Images.Galeria3} className="w-full rounded-lg object-cover h-full object-top" alt="basket" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- IMAGEN 6 -->*/}
                        <div className="hidden lg:block col-span-1 col-end-5 row-start-4 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src={Images.Galeria6} className="w-full object-cover h-full object-center" alt="" type="button" data-modal-toggle="imagen6" />
                        </div>
                        <div id="imagen6" tabIndex="-1" aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div className="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                {/*<!-- Modal content -->*/}
                                <div className="relative rounded-lg">
                                   {/* <!-- Modal header -->*/}
                                    <div className="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" className="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen6">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div className="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src={Images.Galeria6} className="w-full rounded-lg object-cover h-full object-top" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <div id="contacto-color"  className="landscape-contact sm:h-1/4 h-[15%] w-full mt-[-28px] sm:mt-[0px] md:my-[-120px] lg:my-[0px]">
            <div className="h-full flex mb-0 w-full md:mt-2 lg:mt-20 flex-col">
                <div className="landscape-contact-color flex items-center justify-center w-full  lg:h-[65%] md:h-[45%] h-[55%]" style={{background: "rgb(255,204,0)", background: "linear-gradient(100deg, rgba(255,204,0,1) 65%, rgba(255,160,0,1) 65%)"}}>
                    <div className=" items-center ">
                        <span className="sm:text-5xl text-center mt-4 text-4xl font-medium text-[#141414]">Contacto</span>
                    </div>
                </div>
            </div>
    </div>
     <div className="sm:hidden w-full h-[35%] flex flex-col justify-center items-center">
        <a href="./index.html"><img src={Images.LogoBlack} className="h-20 w-41" alt="Atletas Logo" /></a>
        <p className="text-md text-[#141414] text-center font-medium w-[60%]">info@atletasdevenezuela.com</p>
    </div>
    <section id="contacto"  className="lanscape-contact-content lg:h-full w-full h-4/6">
        <div className="h-full border-none flex contact-cont-xl">
            <div className="contact-cont h-full flex sm:mb-5 mb-0 w-full flex-col">
                <div className=" w-full sm:inline-flex justify-center block h-full">
                    <div className=" landscape-contact-q sm:w-1/2 w-full sm:h-[65%] h-[18%] flex flex-col justify-center items-center sm:mb-0 mb-4">
                        <p className="sm:text-[22px] text-lg text-[#141414] text-center capitalize font-bold w-[60%]" >¿PREGUNTAS? ¿SUGERENCIAS?</p>
                        <p className="sm:text-lg text-md text-[#666666] text-center font-medium w-[60%]"> Llene el formulario y nos pondremos en contacto con usted</p>
                        <a href="./index.html"><img src={Images.LogoBlack} className="sm:h-24 sm:w-45 hidden sm:block" alt="Atletas Logo" /></a>
                        <p className="sm:text-md text-md text-[#141414] text-center font-medium w-[60%] hidden sm:block landscape-email">info@atletasdevenezuela.com</p>
                    </div>
                    <div className=" sm:w-1/2 sm:h-full h-full">
                        <form className="w-full h-full" id="contact-form" method="post"  onSubmit="return confirmSubmit()" >
                            <div className="flex sm:w-5/6 w-[90%] pt-5 sm:pt-0 sm:ml-0 ml-2 justify-between">
                                <div className="mb-4 w-[45%]">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#666666]">Nombre <mark className="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="name"
                                        className="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                                </div>
                                <div className="mb-4 w-[45%]">
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-[#666666]">Apellido <mark className="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="lastname"
                                        className="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                            </div>
                            <div className="flex sm:w-5/6 w-[90%] sm:ml-0 ml-2 justify-between">
                                <div className="mb-4 w-[45%]">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#666666]">Correo electrónico <mark className="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="email" id="email"
                                        className="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="nombre@atletas.com" required />
                                </div>
                                <div className="mb-4 w-[45%]">
                                    <label htmlFor="phone"  className="block mb-2 text-sm font-medium text-[#666666]">Teléfono <mark className="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="tel" pattern="[0-9]{4}-[0-9]{7}" id="phone" placeholder="0416-5555555" className="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                                </div>
                            </div>
                            <div className="flex sm:w-5/6 w-[90%] sm:ml-0 ml-2 justify-between">
                                <div className="mb-4 w-[45%]">
                                    <label htmlFor="subjet" className="block mb-2 text-sm font-medium text-[#666666]">Asunto <mark className="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="subjet" className="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                            </div>
                            <div className="flex sm:w-5/6 w-[90%] sm:ml-0 ml-2">
                                <div className="mb-4 w-full">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#666666]">Mensaje <mark className="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="message" className="block border-white p-4 w-full text-gray-900 sm:text-md focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                            </div>

                            <div className="g-recaptcha mb-4 sm:ml-0 ml-2 z-50 " data-sitekey="6Lcu6hUiAAAAAKyV27MF9oc70cCGf3Gmu3iYYrrs"></div>
                            <div className="flex flex-col sm:w-5/6 w-[90%] mb-4 sm:ml-0 ml-2 z-50 ">
                                <p className="block mb-2 text-sm font-normal text-[#707070]">Utilizamos sus datos exclusivamente para propósitos relacionados con el procesamiento y respuesta de su consulta.</p>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                    <input id="accept" type="checkbox" value="" className="z-40 w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <label htmlFor="accept" className="z-40  ml-2 text-sm font-medium text-[#707070]">He leído la política de privacidad, incluidas todas las informaciones referentes al manejo de datos personales.</label>
                                </div>
                            </div>
                            <div className="flex sm:w-5/6 w-[90%] pb-16 sm:ml-0 ml-2">
                                <button type="submit" className="z-50  w-full text-black bg-[#FFCC00] hover:bg-blue-600 transition duration-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ENVIAR</button>
                            </div>
                        </form>

                    </div>
                    
                </div>

            </div>

        </div>

    </section>


    <section className="container mx-auto w-full overflow-hidden relative">
            <div className="carousel-items flex items-center justify-center" style={{animation: "carouselAnim 5s infinite alternate linear" }}>
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.Aragua} alt="Img" />
                </div>
    
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.Portuguesa} alt="Img" />
                </div>
    
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.DeportivoPetare} alt="Img" />
                </div>
    
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.Monagas} alt="Img" />
                </div>
    
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.AtleticoVenezuela} alt="Img" />
                </div>
                
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.CaraboboFc} alt="Img" />
                </div>
    
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.DeportivoLaGuaira} alt="Img" />
                </div>
    
                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.DeportivoLara} alt="Img" />
                </div>

                <div className="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img className="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src={Images.DeportivoTáchira} alt="Img" />
                </div>
                
            </div>
    </section>


    </Fragment>

	)
}

export default Home


/*


<div x-data="{ open: false }" id="simple-cookie-consent" x-init="() => setTimeout(() => open = true, 500)" class="h-screen absolute z-50 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div  x-show="open"     
            x-transition:enter-start="opacity-0 scale-90" 
            x-transition:enter="transition duration-200 transform ease"
            x-transition:leave="transition duration-200 transform ease"
            x-transition:leave-end="opacity-0 scale-90"
            class="flex-col max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
        <div class="w-full font-semibold text-gray-800">Esta web utiliza cookies propias para facilitar la navegación y cookies de terceros para obtener estadísticas de uso y satisfacción.</div>
        <div class="w-full font-semibold text-xs text-gray-600 sm:flex justify-between">
            <div>Puedes obtener más información en el apartado de "Cookies" de nuestro <a href="./src/aviso-legal.html" class="text-blue-600 whitespace-nowrap hover:underline">aviso legal</a></div> 
            <div class="flex gap-4 items-center flex-shrink-0 items-center justify-center md:justify-between">
            <button @click="open = false" onClick="deleteID()" class="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Aceptar</button>
            <button @click="open = false" onClick="deleteID()" class="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Declinar</button>
        </div></div>
        
    </div>
   
  </div>
    <!-- NAVBAR SECTION  -->
    <nav class=" px-2 sm:px-4 py-1.5 sm:py-2 fixed w-full z-40 top-0 left-0 background-nv z-50">
        <div class="container flex flex-wrap justify-between items-center mx-auto div-nv">
        <a href="./index.html" class="flex p-2 items-center">
            <img src="./public/sources/images/Logo.png" class="mr-3 h-12 py-1 px-1" alt="Atletas Logo">
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Menú</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class=" flex flex-col p-4 mt-4 bg-[#141414] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#141414] ">
            <li>
                <a href="#nosotros" class=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >Sobre nosotros</a>
            </li>
            <li>
                <a href="#galeria" class=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >Galería</a>
            </li>
            <li>
                <a href="#contacto" class=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 ">Contactos</a>
            </li>
            <li>
                <a href="./src/register-login/iniciar-sesion.html" class=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >Iniciar Sesión/Registrarse</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <!--  Carrusel -->
    <div class="h-screen justify-center mt-0 lg:mt-14" style="background: rgb(0,0,0); background: linear-gradient(120deg, rgba(255,204,0,1) 50%, rgba(0,0,0,1) 50%);">
        <div class="mt-0 lg:mt-14 h-[99%] ">
            <div id="default-carousel" class="relative h-full" data-carousel="static">
                <!-- Carousel wrapper -->
        <div class="mt-0 lg:mt-14 h-full">
                <div class="overflow-hidden relative w-full h-full ">
                    <!-- Item 1 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                        <span class="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">Los futbolistas venezolanos en diferentes ligas del mundo han contribuido a afianzar el interés por el más universal de los deportes.</span>
                        <div class="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
                            <button type="button" class="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-black bg-[#FFCC00] rounded-lg hover:bg-blue-800 hover:text-white transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
                        </div>
                        <img src="./public/sources/images/BANNER 1.jpg" class="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        <img src="./public/sources/images/MOVIL 2.jpg" class="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                    <!-- Item 2 -->
                    <div class="duration-700 ease-in-out  absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="1">
                        <span class="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">Yulimar Andrea Rojas Rodríguez es una atleta venezolana campeona olímpica en 2021 en triple salto</span>
                        <div class="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
                            <button type="button" class="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-white bg-[#EF6D5D] rounded-lg hover:bg-white hover:text-[#EF6D5D] transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
                        </div>
                        <img src="./public/sources/images/BANNER 2.jpg" class="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        <img src="./public/sources/images/MOVIL 1.jpg" class="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                    <!-- Item 3 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="2">
                        <span class="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">En 1925 se organiza en Caracas la divisa pionera del país, el Ávila Tenis Club que funcionaba en el sector capitalino</span>
                        <div class="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
                            <button type="button" class="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-black bg-[#FFCC00] rounded-lg hover:bg-blue-800 hover:text-white transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
                        </div>
                        <img src="./public/sources/images/BANNER 3.jpg" class="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        <img src="./public/sources/images/MOVIL 3.jpg" class="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                    <!-- Item 4 -->
                    <div class="duration-700 ease-in-out  absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="3">
                        <span class="landscape-text lg:w-1/4 w-4/6 absolute lg:top-1/2 top-[28%] sm:top-[20%] left-1/2 sm:text-2xl text-xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 lg:left-[82%] text-justify z-30">La natación es un deporte cuya competencia se centra en el tiempo, batir récords y distancias</span>
                        <div class="absolute top-[75%] sm:top-2/3 lg:left-[63%] sm:left-3/4 xl:left-[70%] 2xl:left-[70%] left-1/3 z-30">
                            <button type="button" class="lg:flex hidden text-sm px-8 py-2 font-medium text-center text-white bg-[#EF6D5D] rounded-lg hover:bg-white hover:text-[#EF6D5D] transition focus:ring-4 focus:outline-none focus:ring-blue-300">Ver más</button>
                        </div>
                        <img src="./public/sources/images/BANNER 4.jpg" class="landscape-carousel lg:block hidden absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        <img src="./public/sources/images/MOVIL 4.jpg" class="landscape-carousel-hidden lg:hidden block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                </div>
                <!-- Slider indicators -->
                <div class="flex absolute bottom-5 left-1/2 sm:left-1/4 z-30 space-x-3 -translate-x-1/2">
                    <button type="button" class="w-2 h-2 " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-2 h-2 " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-2 h-2 " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-2 h-2 " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="3"></button>
                </div>
                
                <!-- Slider controls -->
                <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-0 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span class=" banner-indicator-l inline-flex justify-center items-center w-12 h-8 sm:w-12 sm:h-10" >
                        <div class="h-4 w-5"> <svg enable-background="new 0 0 32 32" id="svg2" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" id="id_101"></rect></g><g id="arrow_x5F_left"><polygon points="22,2.001 8,16 22,30  " id="id_102" style="fill: rgb(255, 255, 255);"></polygon></g></svg></div>
                        <span class="sr-only">Anterior</span>
                    </span>
                </button>
                <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-0 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span class="banner-indicator-r inline-flex justify-center items-center w-12 h-8 sm:w-12 sm:h-10">
                        <div class="h-4 w-5"> <svg enable-background="new 0 0 32 32" id="svg2" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" id="id_101"></rect></g><g id="arrow_x5F_right"><polygon points="10,2.001 24,16 10,30  " id="id_102" style="fill: rgb(255, 255, 255);"></polygon></g></svg></div>
                        <span class="sr-only">Siguiente</span>
                    </span>
                </button>
            </div>
        </div>   
    </div>
    <!-- SECTION 1 - SOBRE NOSOTROS  -->
    <section id="nosotros">
    <div class="landscape-about h-75 justify-center border-none mb-0 md:flex-row flex-col flex sm:mt-[-50px] lg:mt-[0px]">
        <div class="landscape-img-about lg:w-1/2 justify-center inline-flex h-[90%] md:mt-[120px] lg:mt-[0px]">    <!--hidden md:inline-flex -->
            <div class="grid grid-cols-2 gap-3 mb-0 mt-8 sm:mt-28 h-[420px] w-[450px]">
                <div class="md:h-[205px] h-[155px] md:w-[220px] w-[170px] md:mt-10 mt-5 ml-5 sm:ml-0  rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src="./public/sources/images/1sobre nosotros.jpg" class="block rounded-lg  h-full w-full " alt="basketball">
                </div>
                <div class="md:h-[160px] h-[110px] md:w-[175px] w-[125px] md:mt-0 mt-5 ml-4 rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src="./public/sources/images/2sobre nosotros.jpg" class="block rounded-lg  h-full w-full " alt="estadio">
                </div>
                <div class="lansc-img-futbol md:h-[120px] h-[100px] md:w-[175px] w-[150px] md:ml-12 ml-10 mt-[-50px] md:mt-0 rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src="./public/sources/images/3sobre nosotros.jpg" class="block rounded-lg  h-full w-full " alt="futbol">
                </div>
                <div class="md:h-[240px] h-[185px] md:w-[195px] w-[140px] md:ml-5 ml-1 md:mt-[-85px] mt-[-85px] rounded-lg scale-95 hover:scale-100 ease-in duration-200">
                    <img src="./public/sources/images/4sobre nosotros.jpg" class="block rounded-lg  h-full w-full " alt="tenis">
                </div>
            </div>
        </div>
        <div class="landscape-text-about sm:w-1/2 w-5/6 h-[90%] mt-[-75px] sm:mt-[0px] ml-5 md:ml-0 flex align-center justify-center"> 
            <div class="block w-full">
                <div class="w-5/6 flex">
                    <span class="text-[#EF6D5D] text-x mt-2 sm:mt-28 mb-5">SOBRE NOSOTROS</span>
                </div>
                <div class="w-5/6 flex mb-5">
                    <span class="text-5xl font-medium text-[#333333]">Atletas de Venezuela</span>
                </div>
                <div class="">
                    <ul class="w-full">
                        <li class="my-4 inline-flex text-justify">
                            <div class="w-6 h-6 mr-2 mt-3  justify-center flex rounded-full bg-[#FFF2DF]">
                                <div class="w-3/4 h3/4 mt-[2.5px]"><svg enable-background="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#333333" fillRule="evenodd" id="Chevron_Right"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
                            </div>
                            <span class="w-5/6"> El portal Atletas de Venezuela permite realizar el registro para el análisis de datos del sector deportivo.</span>
                        </li>
                        <li class="my-4 inline-flex text-justify">
                            <div class="w-6 h-6 mr-2 mt-8 justify-center flex rounded-full bg-[#FFF2DF]">
                                <div class="w-3/4 h3/4 mt-[2.5px]"><svg enable-background="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#333333" fillRule="evenodd" id="Chevron_Right"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
                            </div> 
                            <span class="w-5/6"> Gracias al tratamiento de grandes volúmenes de información que manejamos, de nuestros atletas, podemos organizar, clasificar y facilitar la logística <br> para mejorar la toma de decisiones en terrenos deportivos.</span>
                        </li>
                        <li class="my-4 inline-flex text-justify">
                            <div class="w-6 h-6 mr-2 mt-6 justify-center flex rounded-full bg-[#FFF2DF]">
                                <div class="w-3/4 h3/4 mt-[2.5px]"><svg enable-background="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#333333" fillRule="evenodd" id="Chevron_Right"></path><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
                            </div> 
                            <span class="w-5/6"> Te invitamos estimado atleta a que te registres o actualices tus datos para que seas parte de la gran plataforma tecnológica realizada para ti.</span>
                        </li>
                    </ul>
                </div>
                <div class="ml-8 mt-2">
                    <button type="button" class="text-sm px-6 py-2 font-medium text-center text-white bg-[#EF6D5D] rounded-lg hover:bg-white hover:text-[#EF6D5D] transition focus:ring-4 focus:outline-none focus:ring-blue-300">REGÍSTRATE</button>
                </div>
            </div>
        </div>
    </div>
    </section>

<!-- SECTION 2 - CALENDARIO  -->
    <!-- <section id="calendario">
        <div class="h-100 justify-center align-center border-none flex ">
            <div class="w-5/6 flex mb-5 h-[90%] md:mt-28 justify-center align-center flex-wrap">
                <div class="block h-[15%]">
                    <div class="mb-2 mt-24 sm:mt-0">
                        <span class="sm:text-5xl   text-4xl font-medium text-[#141414]">Calendario 2022/23</span>
                    </div>
                    <div>
                        <span class=" sm:text-2xl text-xl font-medium ml-20 sm:ml-[115px]">Filtro según deporte</span>
                    </div>
                </div>

                TABLA DE CALENDARI
                <div class="w-full h-[75%] my-5">
                    INDICADORES - NAVBAR DE CALENDARIO
                    <div class="mb-4">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#contenido" role="tablist">
                            <li class="mr-2" role="futbol">
                                <button class="inline-block p-4 rounded-t-lg border-b-2 " id="futbol-tab" data-tabs-target="#futbol" type="button" role="tab" aria-controls="futbol" aria-selected="false">Fútbol</button>
                            </li>
                            <li class="mr-2" role="basket">
                                <button class="inline-block p-4 rounded-t-lg border-b-2" id="basket-tab" data-tabs-target="#basket" type="button" role="tab" aria-controls="basket" aria-selected="false">Basket</button>
                            </li>
                            <li class="mr-2" role="tenis">
                                <button class="inline-block p-4 rounded-t-lg border-b-2 " id="tenis-tab" data-tabs-target="#tenis" type="button" role="tab" aria-controls="tenis" aria-selected="false">Tenis</button>
                            </li>
                            <li role="natacion">
                                <button class="inline-block p-4 rounded-t-lg border-b-2 " id="natacion-tab" data-tabs-target="#natacion" type="button" role="tab" aria-controls="natacion" aria-selected="false">Natación</button>
                            </li>
                        </ul>
                    </div>
                    <div id="contenido">
                        TABLA DE FUTBOL 
                        <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="futbol" role="tabpanel" aria-labelledby="futbol-tab">
                            <div class="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-8" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[55%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Monagas.png" alt="monagas-fc"><p class="text-[#767676] text-xs font-medium w-full ">MONAGAS FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Atletico-Venezuela.png" alt="caracas-fc"><p class="text-[#767676] text-xs  font-medium w-full ">CARACAS FC</p></div>
                                        </div>
                                        <div class="w-[55%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">27 AGOSTO 2022 - 5:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-10" src="./public/sources/images/logos/Deportivo-Lara.png" alt="deportivo-lara"><p class="text-[#767676] text-xs font-medium w-full ">DEPORTIVO LARA</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Aragua.png" alt="aragua-fc"><p class="text-[#767676] text-xs  font-medium w-full ">ARAGUA FC</p></div>
                                        </div>
                                        <div class="w-[55%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">29 AGOSTO 2022 - 2:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[45%] justify-between items-center flex flex-row">
                                            <div class="w-45 h-10"><img class="w-8 h-8 mx-12" src="./public/sources/images/logos/Deportivo-LaGuaira.png" alt="deportivo-guaira"><p class="text-[#767676] text-xs font-medium w-full ">DEPORTIVO LA GUAIRA</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-45 h-10"> <img class="w-8 h-8 mx-12" src="./public/sources/images/logos/Deportivo-Táchira.png" alt="deportivo-tachira"><p class="text-[#767676] text-xs  font-medium w-full ">DEPORTIVO TÁCHIRA</p></div>
                                        </div>
                                        <div class="w-[55%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">01 SEPTIEMBRE 2022 - 6:00PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        TABLA DE BASKET 
                        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="basket" role="tabpanel" aria-labelledby="basket-tab">
                            <div class="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        TABLA DE TENIS 
                        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="tenis" role="tabpanel" aria-labelledby="tenis-tab">
                            <div class="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        TABLA DE NATACION 
                        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="natacion" role="tabpanel" aria-labelledby="natacion-tab">
                            <div class="grid grid-cols-1 gap-4">
                                COLUMNA 1
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Olímpico de la UCV</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 2
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio De Fútbol Metropolitano</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 3
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Metropolitano de Lara</p></li>
                                        </ul>
                                    </div>
                                </div>
                                COLUMNA 4
                                <div class="h-[65px] flex flex-nowrap">
                                    <div class="w-[10%] h-full c1"> </div>
                                    <div class="bg-[#FFFFFF] h-full w-[60%] flex ">
                                        <div class="h-full w-[40%] justify-between items-center flex flex-row">
                                            <div class="w-25 h-10"><img class="w-8 h-8 mx-5" src="./public/sources/images/logos/carabobo-fc-1.png" alt="carabobo-fc"><p class="text-[#767676] text-xs font-medium w-full ">CARABOBO FC</p></div>
                                            <p class="text-[#767676] text-xs w-5 ">vs</p>
                                            <div class="w-25 h-10"> <img class="w-8 h-8 mx-5" src="./public/sources/images/logos/Portuguesa.png" alt="portuguesa-fc"><p class="text-[#767676] text-xs  font-medium w-full ">PORTUGUESA FC</p></div>
                                        </div>
                                        <div class="w-[60%] h-full">
                                            <ul class=" items-center justify-center my-4 text-center">
                                                <li><p class="text-[#767676] text-xs ">COPA NACIONAL - CLASIFICATORIA</p></li>
                                                <li><p class="text-[#767676] text-sm leading-4 font-semibold">25 AGOSTO 2022 - 7:30PM</p></li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div class="w-[35%] h-full c2 flex text-center justify-center">
                                        <ul class="ml-5 align-center justify-center my-2 text-center">
                                            <li><p class="text-[#767676] text-xs ">LUGAR</p></li>
                                            <li><p class="text-[#767676] text-sm leading-4 font-semibold">Estadio Brígido Iriarte</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    </section> -->
    <section id="galeria" class="landscape-gallery md:h-full h-4/6 sm:mb-24 mb-2 mt-[-50px] md:mt-[-100px] lg:mt-[0px]">
        <div class="h-full justify-center border-none flex ">
            <div class="h-full md:w-5/6  flex sm:mb-5 mb-0 h-full md:mt-8 justify-center flex-col flex-wrap">
                <div class="landscape-gallery-title block h-[10%] text-center">
                    <div class="mb-6 md:mb-12 mt-0">
                        <span class="sm:text-5xl text-center  text-4xl font-medium text-[#141414]">Galería de Imágenes</span>
                    </div>
                </div>
                <div class="landscape-gallery-div sm:h-4/6 sm:w-full w-5/6 md:ml-0 ml-8 h-3/6">
                    <div class="grid grid-cols-4 grid-rows-6 grid-flow-col gap-4 lg:gap-10 h-full w-full mt-6">
                        <!-- IMAGEN 1-->
                        <div class="col-start-1 col-end-3 row-start-1 row-end-4 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src="./public/sources/images/1-galeria.jpg" class="w-full object-cover h-full object-top" alt="basket" type="button" data-modal-toggle="imagen1">
                        </div>
                        <div id="imagen1" tabIndex="-1" aria-hidden="true" class=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                                <div class="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                    <!-- Modal content -->
                                    <div class="relative rounded-lg">
                                        <!-- Modal header -->
                                        <div class="flex justify-between items-start p-2 rounded-t">
                                            <button type="button" class="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen1">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                <span class="sr-only">Cerrar</span>
                                            </button>
                                        </div>
                                        <div class="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                            <img src="./public/sources/images/1-galeria.jpg" class="w-full rounded-lg object-cover h-full object-top" alt="basket">
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <!-- IMAGEN 2 -->
                        <div class="col-start-3 col-end-5 lg:col-end-4 row-start-1 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src="./public/sources/images/4-galeria.jpg" class="w-full object-cover h-full object-top" alt="yulimar-rojas" type="button" data-modal-toggle="imagen2">
                        </div>
                        <div id="imagen2" tabindex="-1" aria-hidden="true" class=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div class="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                <!-- Modal content -->
                                <div class="relative rounded-lg">
                                    <!-- Modal header -->
                                    <div class="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" class="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen2">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span class="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div class="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src="./public/sources/images/4-galeria.jpg" class="w-full rounded-lg object-cover h-full object-top" alt="yulimar-rojas">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IMAGEN 3 -->
                        <div class="hidden lg:block col-start-4 col-end-5 row-start-1 row-end-4 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src="./public/sources/images/5-galeria.jpg" class="w-full object-cover h-full object-top" alt="natacion" type="button" data-modal-toggle="imagen3">
                        </div>
                        <div id="imagen3" tabindex="-1" aria-hidden="true" class=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div class="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                <!-- Modal content -->
                                <div class="relative rounded-lg">
                                    <!-- Modal header -->
                                    <div class="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" class="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen3">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span class="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div class="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src="./public/sources/images/5-galeria.jpg" class="w-full rounded-lg object-cover h-full object-top" alt="natacion">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IMAGEN 4 -->
                        <div class="col-start-1 col-end-2 row-start-4 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src="./public/sources/images/2-galeria.jpg" class="w-full object-cover h-full object-top" alt="atletas" type="button" data-modal-toggle="imagen4">
                        </div>
                        <div id="imagen4" tabindex="-1" aria-hidden="true" class=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div class="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                <!-- Modal content -->
                                <div class="relative rounded-lg">
                                    <!-- Modal header -->
                                    <div class="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" class="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen4">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span class="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div class="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src="./public/sources/images/2-galeria.jpg" class="w-full rounded-lg object-cover h-full object-top" alt="atletas">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IMAGEN 5 -->
                        <div class="col-start-2 col-end-3 row-start-4 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src="./public/sources/images/3-galeria.jpg" class="w-full object-cover h-full object-top" alt="basket" type="button" data-modal-toggle="imagen5">
                        </div>
                        <div id="imagen5" tabindex="-1" aria-hidden="true" class=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div class="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                <!-- Modal content -->
                                <div class="relative rounded-lg">
                                    <!-- Modal header -->
                                    <div class="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" class="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen5">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span class="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div class="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src="./public/sources/images/3-galeria.jpg" class="w-full rounded-lg object-cover h-full object-top" alt="basket">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IMAGEN 6 -->
                        <div class="hidden lg:block col-span-1 col-end-5 row-start-4 row-end-7 scale-100  hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1">
                            <img src="./public/sources/images/6-galeria.jpg" class="w-full object-cover h-full object-center" alt="" type="button" data-modal-toggle="imagen6">
                        </div>
                        <div id="imagen6" tabindex="-1" aria-hidden="true" class=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div class="landscape-gallery-open relative p-4 lg:w-1/2 w-5/6 h-1/2 md:h-auto">
                                <!-- Modal content -->
                                <div class="relative rounded-lg">
                                    <!-- Modal header -->
                                    <div class="flex justify-between items-start p-2 rounded-t">
                                        <button type="button" class="text-white-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="imagen6">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span class="sr-only">Cerrar</span>
                                        </button>
                                    </div>
                                    <div class="h-auto w-auto rounded-lg border-2 border-solid border-white">
                                        <img src="./public/sources/images/6-galeria.jpg" class="w-full rounded-lg object-cover h-full object-top" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="contacto-color"  class="landscape-contact sm:h-1/4 h-[15%] w-full mt-[-28px] sm:mt-[0px] md:my-[-120px] lg:my-[0px]">
            <div class="h-full flex mb-0 w-full md:mt-2 lg:mt-20 flex-col">
                <div class="landscape-contact-color flex items-center justify-center w-full  lg:h-[65%] md:h-[45%] h-[55%]" style="background: rgb(255,204,0); background: linear-gradient(100deg, rgba(255,204,0,1) 65%, rgba(255,160,0,1) 65%);">
                    <div class=" items-center ">
                        <span class="sm:text-5xl text-center mt-4 text-4xl font-medium text-[#141414]">Contacto</span>
                    </div>
                </div>
            </div>
    </div>
     <div class="sm:hidden w-full h-[35%] flex flex-col justify-center items-center">
        <a href="./index.html"><img src="./public/sources/images/Logo-black.png" class="h-20 w-41" alt="Atletas Logo"></a>
        <p class="text-md text-[#141414] text-center font-medium w-[60%]">info@atletasdevenezuela.com</p>
    </div>
    <section id="contacto"  class="lanscape-contact-content lg:h-full w-full h-4/6">
        <div class="h-full border-none flex contact-cont-xl">
            <div class="contact-cont h-full flex sm:mb-5 mb-0 w-full flex-col">
                <div class=" w-full sm:inline-flex justify-center block h-full">
                    <div class=" landscape-contact-q sm:w-1/2 w-full sm:h-[65%] h-[18%] flex flex-col justify-center items-center sm:mb-0 mb-4">
                        <p class="sm:text-[22px] text-lg text-[#141414] text-center capitalize font-bold w-[60%]" >¿PREGUNTAS? ¿SUGERENCIAS?</p>
                        <p class="sm:text-lg text-md text-[#666666] text-center font-medium w-[60%]"> Llene el formulario y nos pondremos en contacto con usted</p>
                        <a href="./index.html"><img src="./public/sources/images/Logo-black.png" class="sm:h-24 sm:w-45 hidden sm:block" alt="Atletas Logo"></a>
                        <p class="sm:text-md text-md text-[#141414] text-center font-medium w-[60%] hidden sm:block landscape-email">info@atletasdevenezuela.com</p>
                    </div>
                    <div class=" sm:w-1/2 sm:h-full h-full">
                        <form class="w-full h-full" id="contact-form" method="post"  onSubmit="return confirmSubmit()" >
                            <div class="flex sm:w-5/6 w-[90%] pt-5 sm:pt-0 sm:ml-0 ml-2 justify-between">
                                <div class="mb-4 w-[45%]">
                                    <label for="name" class="block mb-2 text-sm font-medium text-[#666666]">Nombre <mark class="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="name"
                                        class="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                </div>
                                <div class="mb-4 w-[45%]">
                                    <label for="lastname" class="block mb-2 text-sm font-medium text-[#666666]">Apellido <mark class="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="lastname"
                                        class="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                </div>
                            </div>
                            <div class="flex sm:w-5/6 w-[90%] sm:ml-0 ml-2 justify-between">
                                <div class="mb-4 w-[45%]">
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#666666]">Correo electrónico <mark class="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="email" id="email"
                                        class="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="nombre@atletas.com" required>
                                </div>
                                <div class="mb-4 w-[45%]">
                                    <label for="phone"  class="block mb-2 text-sm font-medium text-[#666666]">Teléfono <mark class="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="tel" pattern="[0-9]{4}-[0-9]{7}" id="phone" placeholder="0416-5555555" class="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                </div>
                            </div>
                            <div class="flex sm:w-5/6 w-[90%] sm:ml-0 ml-2 justify-between">
                                <div class="mb-4 w-[45%]">
                                    <label for="subjet" class="block mb-2 text-sm font-medium text-[#666666]">Asunto <mark class="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="subjet" class="bg-white border-white text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                </div>
                            </div>
                            <div class="flex sm:w-5/6 w-[90%] sm:ml-0 ml-2">
                                <div class="mb-4 w-full">
                                    <label for="message" class="block mb-2 text-sm font-medium text-[#666666]">Mensaje <mark class="bg-transparent text-[#FF0E0E]">*</mark> </label>
                                    <input type="text" id="message" class="block border-white p-4 w-full text-gray-900 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                                </div>
                            </div>

                            <div class="g-recaptcha mb-4 sm:ml-0 ml-2 z-50 " data-sitekey="6Lcu6hUiAAAAAKyV27MF9oc70cCGf3Gmu3iYYrrs"></div>
                            <div class="flex flex-col sm:w-5/6 w-[90%] mb-4 sm:ml-0 ml-2 z-50 ">
                                <p class="block mb-2 text-sm font-normal text-[#707070]">Utilizamos sus datos exclusivamente para propósitos relacionados con el procesamiento y respuesta de su consulta.</p>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                    <input id="accept" type="checkbox" value="" class="z-40 w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required>
                                    </div>
                                    <label for="accept" class="z-40  ml-2 text-sm font-medium text-[#707070]">He leído la política de privacidad, incluidas todas las informaciones referentes al manejo de datos personales.</label>
                                </div>
                            </div>
                            <div class="flex sm:w-5/6 w-[90%] pb-16 sm:ml-0 ml-2">
                                <button type="submit" class="z-50  w-full text-black bg-[#FFCC00] hover:bg-blue-600 transition duration-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ENVIAR</button>
                            </div>
                        </form>

                    </div>
                    
                </div>

            </div>

        </div>

    </section>


    <section class="container mx-auto w-full overflow-hidden relative">
            <div class="carousel-items flex items-center justify-center" style=" animation: carouselAnim 5s infinite alternate linear;">
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Aragua.png" alt="Img">
                </div>
    
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Portuguesa.png" alt="Img">
                </div>
    
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Deportivo-Petare.png" alt="Img">
                </div>
    
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Monagas.png" alt="Img">
                </div>
    
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Atletico-Venezuela.png" alt="Img">
                </div>
                
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/carabobo-fc-1.png" alt="Img">
                </div>
    
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Deportivo-LaGuaira.png" alt="Img">
                </div>
    
                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Deportivo-Lara.png" alt="Img">
                </div>

                <div class="carousel-focus flex items-center flex-col relative lg:mx-3 mx-1 my-10 lg:px-6 px-0 lg:py-3 py-1">
                    <img class="sm:h-16 h-12 sm:w-16 w-12 rounded-full shadow-2xl" src="./public/sources/images/logos/Deportivo-Táchira.png" alt="Img">
                </div>
                
            </div>
    </section>
    
    




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
