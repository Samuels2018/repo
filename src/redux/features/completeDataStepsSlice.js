import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userServices from '../../services/userServices'

export const completeDataStep1 = createAsyncThunk(
	"registerSteps/completeDataStep1",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await userServices.completeDataStep1(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}
)

export const completeDataStep2 = createAsyncThunk(
	"registerSteps/completeDataStep2",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await userServices.completeDataStep2(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }
		}
	}
)

export const completeDataStep3 = createAsyncThunk(
	"registerSteps/completeDataStep3",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await userServices.completeDataStep3(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }
		}
	}

)

export const completeDataStep4 = createAsyncThunk(

	"registerSteps/completeDataStep4",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await userServices.completeDataStep4(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }
		}
	}

)

export const completeDataStep5 = createAsyncThunk(

	"registerSteps/completeDataStep5",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await userServices.completeDataStep5(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }
		}
	}

)

export const completeDataStep6 = createAsyncThunk(

	"registerSteps/completeDataStep6",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await userServices.completeDataStep6(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }
		}
	}

)

const initialState = {
	completeDataSteps: "",
	loading: false,
	error: false,
	status: false
}


const completeDataStepsSlice = createSlice({
	name: "registerSteps",
	initialState,
	reducers: {
	},
	extraReducers: {
		[completeDataStep1.pending]: (state, action) => {
			state.loading = true
		},
		[completeDataStep1.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.completeDataSteps = action.payload
		},
		[completeDataStep1.rejected]: (state, action) => {
			console.log(action)
			state.error = action.payload
		},
		[completeDataStep2.pending]: (state, action) => {
			state.loading = true
		},
		[completeDataStep2.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.completeDataSteps = action.payload
		},
		[completeDataStep2.rejected]: (state, action) => {
			console.log(action)
			state.error = action.payload
		},
		[completeDataStep3.pending]: (state, action) => {
			state.loading = true
		},
		[completeDataStep3.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.completeDataSteps = action.payload
		},
		[completeDataStep3.rejected]: (state, action) => {
			console.log(action)
			state.error = action.payload
		},
		[completeDataStep4.pending]: (state, action) => {
			state.loading = true
		},
		[completeDataStep4.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.completeDataSteps = action.payload
		},
		[completeDataStep4.rejected]: (state, action) => {
			console.log(action)
			state.error = action.payload
		},
		[completeDataStep5.pending]: (state, action) => {
			state.loading = true
		},
		[completeDataStep5.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.completeDataSteps = action.payload
		},
		[completeDataStep5.rejected]: (state, action) => {
			console.log(action)
			state.error = action.payload
		},
		[completeDataStep6.pending]: (state, action) => {
			state.loading = true
		},
		[completeDataStep6.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.completeDataSteps = action.payload
		},
		[completeDataStep6.rejected]: (state, action) => {
			console.log(action)
			state.error = action.payload
		},
	}
})

export const {
} = completeDataStepsSlice.actions
export default completeDataStepsSlice.reducer

