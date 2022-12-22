import clientAxios from './axios'

const userRegister = (valores) => {
	console.log(valores)
	//console.log(process.env.BACKEND_URL)
	return clientAxios.post('/api/users/register',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err.response
	})
}

const userLogin = (valores) => {
	console.log(valores)
	return clientAxios.post('/api/auth/login',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const loginWithFacebook = (response) => {
	console.log(response)
	return clientAxios.post('/api/auth/facebook-login',response).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const loginWithGoogle = (paramsGoogle) => {
	console.log(paramsGoogle)
	///http://18.222.226.76/api/auth/google-login
	clientAxios.post('/api/auth/google-login', paramsGoogle).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err.response.data);
		return err
	})
}

const userForgotData = (valores) => {
	console.log(valores)
	return clientAxios.post('/api/auth/recover_my_data',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

// la tengo que borrar

const userCompleteHimData = (valores) => {
	console.log(valores)
	return clientAxios.post('/completeData',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const userChangePassword = (valores) => {
	console.log(valores)
	return clientAxios.post('/api/auth/recover_password',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const completeDataStep1 = (valores) => {
	console.log(valores)
	return clientAxios.post('/api/athletes/',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const completeDataStep2 = (valores) => {
	console.log(valores)
	return clientAxios.put('/api/athletes/identity_card',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const completeDataStep3 = (valores) => {
	console.log(valores)
	return clientAxios.put('/api/athletes/passport',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const completeDataStep4 = (valores) => {
	console.log(valores)
	return clientAxios.put('/api/athletes/measurements_and_sizes',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const completeDataStep5 = (valores) => {
	console.log(valores)
	return clientAxios.put('/api/athletes/vaccination',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const completeDataStep6 = (valores) => {
	console.log(valores)
	return clientAxios.post('/api/athletes/sport_activity',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}



const userServices = {
	userRegister,
	userLogin,
	loginWithFacebook,
	loginWithGoogle,
	userCompleteHimData,
	userChangePassword,
	userForgotData,
	completeDataStep1,
	completeDataStep2,
	completeDataStep3,
	completeDataStep4,
	completeDataStep5,
	completeDataStep6
}

export default userServices