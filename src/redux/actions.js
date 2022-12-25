export const deleteBusiness = (index) => {
    return {
        type: "REMOVE_BUSINESS", 
        value: index
    }
}

export const addBusiness = (business) => {
    return {
        type: "ADD_BUSINESS", 
        value: business
    }
}

export const isLoggedIn = (boolean) => {
    return {
        type: "IS_LOGGED_IN", 
        value: boolean
    }
}

