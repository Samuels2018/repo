import clientAxios from './axios'

const userRegister = (valores) => {
	console.log(valores)
	//console.log(process.env.BACKEND_URL)
	return clientAxios.post('/register',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err.response
	})
}

const userLogin = (valores) => {
	console.log(valores)
	return clientAxios.post('/login',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const loginWithFacebook = (response) => {
	console.log(response)
	return clientAxios.post('/loginFacebook',response).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const loginWithGoogle = (paramsGoogle) => {
	console.log(paramsGoogle)
	///http://18.222.226.76/api/auth/google-login
	clientAxios.post('/loginGoogle', paramsGoogle).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err.response.data);
		return err
	})
}

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
	return clientAxios.post('/forgotPassword',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		return err
	})
}

const userForgotData = (valores) => {
	console.log(valores)
	return clientAxios.post('/forgotData',valores).then((response) => {
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
	userForgotData
}

export default userServices