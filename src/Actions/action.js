


export const AddUser = (data) => {
    return (
        {
            type: "ADD_USER" ,
            payload:{
                id:new Date().getTime().toString(),
                data:data
            }
        }
    )
}


export const DeleteUser = (id) => {
    return {
        type: "DELETE_USER",
        payload: {
            id
        }
    }
}



export const UpdateUser = (userData) => {
    return (
        {
            type: "UPDATE_USER",
            payload:{
                userData
            }
        }
    )

}
export const getUserDetails = (userId) => {
    return {
        type: "GET_USER_DETAILS",
        payload: {
            userId,
        }
    }
}


