// const initialData = {
//     userList: 
//     // JSON.parse(localStorage.getItem('userData')) || []
//     [
//         {
//             id: 1,
//             email: 'as@gmail.com',
//             fname: 'Ashwini',
//             lastName: 'Desai',
//             address: 'Bengloore, Karanataka',
//             zipcode: '560037',
//             phoneNumber: '9012121212',
//         },
//     ]
// }
const initialData = {
    lastUserId: 1,
    userList: [
        {
            id: 0,
            email: 'as@gmail.com',
            fname: 'Ashwini',
            lastName: 'Desai',
            address: 'Bengaluru, Karnataka',
            zipcode: '560037',
            phoneNumber: '9012121212',
        },
    ]
}

const UserReducer = (state = initialData, action) => {
    switch (action.type) {
        // case 'ADD_USER':
        //     const { id, data } = action.payload || {};
        //     return {
        //         ...state,
        //         userList: [
        //             ...state.userList,
        //             {
        //                 id: id,
        //                 ...data
        //             }
        //         ]
        //     };
        case 'ADD_USER':
            const { data } = action.payload || {};
            const newUser = {
                id: state.lastUserId,
                ...data
            };
            return {
                ...state,
                lastUserId: state.lastUserId + 1,
                userList: [
                    ...state.userList,
                    newUser
                ]
            };


        case 'DELETE_USER':
            const deleteUser = state.userList.filter(user => user.id !== action.payload.id && user);
            console.log("removed list" + deleteUser)
            return {
                ...state,
                userList: deleteUser
            };

        // case 'DELETE_USER':
        //     const userIndex = state.userList.findIndex(user => user.id === action.payload.id);

        //     if (userIndex !== -1) {
        //         const updatedUserList = [...state.userList];
        //         updatedUserList.splice(userIndex, 1);

        //         console.log("removed list", updatedUserList);

        //         return {
        //             ...state,
        //             userList: updatedUserList
        //         };
        //     }

        // If the user is not found, return the current state
        // return state;

        case 'GET_USER_DETAILS':
            const userId = action.payload.userId;
            const userToEdit = state.userList.find((user) => user.id === parseInt(userId));
            return {
                ...state,
                user: userToEdit,
            };
        case 'UPDATE_USER':
            const updatedUser = action.payload.userData;
            const updatedUserList = state.userList.map((user) => user.id === updatedUser.id ? { ...user, ...updatedUser } : user);
            return {
                ...state,
                userList: updatedUserList,
            };



        // case 'UPDATE_USER':
        //     const updatedUser = action.payload.userData;
        //     console.log("updated user : " + updatedUser)
        //     const updatedUserList = state.userList.map((user) => user.id === updatedUser.id ? updatedUser : user);
        //     return {
        //         ...state,
        //         userList: updatedUserList,
        //     };



        default:
            return state;
    }
}


export default UserReducer
