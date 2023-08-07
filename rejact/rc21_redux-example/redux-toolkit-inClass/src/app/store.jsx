import {configureStore} from 'reduxjs/tookit'

export const store = configureStore({
    reducer:{
        // auth: authReducer,
        // api : newsReducer,
    }
})