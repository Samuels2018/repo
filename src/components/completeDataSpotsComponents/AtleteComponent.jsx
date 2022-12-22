import React from 'react'

const AtleteComponent = ({children}) => {
	return (

		<div className="w-full h-screen overflow-hidden -mb-7">
			<div className="font-sans bg-cover bg-no-repeat bg-heroPasos h-full" >
				<div className="flex items-start justify-end w-full h-full bg-gray-900 bg-opacity-50">
		            
	            	<div id="register-form" className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[97%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
	            		<div className="w-full h-full">

		                	{children}
		            	</div>

	            	</div>
			    </div>
		    </div>
		</div>

	)
}

export default AtleteComponent