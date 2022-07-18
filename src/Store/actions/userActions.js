import { ADD_USER, DELETE_USER, SET_SELECTED_USER, UPDATE_USER } from "../types/user"

const addUserAction = (values) => {
    return {
        type: ADD_USER,
        payload: values
    }
}
 const updateUserAction = (values) => {
    return {
        type: UPDATE_USER,
        payload: values
    }
}

const setSelectedUserAction = (item) => {
    return {
        type: SET_SELECTED_USER,
        payload: item
    }
}

const deleteUserAction = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export {addUserAction, updateUserAction, setSelectedUserAction, deleteUserAction}
