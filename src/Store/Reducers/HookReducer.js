import { SET_DISTRICTS, SET_PROVINCES } from "../types/Hook"

const DEFAULT_STATE = {
    provinces : [],
    districts : [],
}

export const hookReducer = (state= DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case SET_PROVINCES: {
            state.provinces = payload;
            return {...state}
        }
        case SET_DISTRICTS: {
            state.districts = payload;
            return {...state}
        }
        default:
            return {...state}
    }
} 

