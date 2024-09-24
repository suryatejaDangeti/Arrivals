const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    addressLine: '',
    city: '',
    returning: false
}

export const customerReducer = (state = initialState, action) => {
const { type, payload } = action;
console.log(payload);

switch(type) {
    case "UPDATE_EMAIL": 
        return {...state, email: payload.email};
    case "CUSTOMER_RETURNING":
        return {...state, 
            id: payload.customer.id,
            firstName: payload.customer.firstName,
            lastName: payload.customer.lastName,
            phone: payload.customer.phone,
            email: payload.customer.email,
            postcode: payload.customer.postcode,
            addressLine: payload.customer.addressLine,
            city: payload.customer.city,
            returning: payload.customer.returning
        }
    case "CUSTOMER_UPDATE" : 
        return {
            ...state, 
            id: payload.customer.id,
            firstName: payload.customer.firstName,
            lastName: payload.customer.lastName,
            phone: payload.customer.phone,
            email: payload.customer.email,
            postcode: payload.customer.postcode,
            addressLine: payload.customer.addressLine,
            city: payload.customer.city,
            returning: payload.customer.returning
        }
    case "CUSTOMER_CREATE" :
        return {
            ...state, 
            id: payload.customer.id,
            firstName: payload.customer.firstName,
            lastName: payload.customer.lastName,
            phone: payload.customer.phone,
            email: payload.customer.email,
            postcode: payload.customer.postcode,
            addressLine: payload.customer.addressLine,
            city: payload.customer.city,
            returning: payload.customer.returning
        }
    default :
        return state
        // throw new Error(`Unhandled type ${type} in userReducer`);
}
}

export const updateEmail = (email) => {
    return {
        type: "UPDATE_EMAIL",
        payload: {
            email
        }
    }
}

export const customerReturning = (customer) => {
    return {
        type: "CUSTOMER_RETURNING",
        payload: {
            customer
        }
    }
}

export const customerUpdate = (customer) => {
    return {
        type: "CUSTOMER_UPDATE",
        payload: {
            customer
        }
    }
}
export const createCustomer = (customer) => {
    return {
        type: "CUSTOMER_CREATE",
        payload: {
            customer
        }
    }
}