import { getDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../lib/firebase/firebase";
import { createCustomer } from "../../modules/customer/customer";
import { store } from "../../store";
import CustomInput from "../CustomInput/CustomInput";
import HashLoader from "react-spinners/HashLoader";
import './Login.css'


const Registration = () => {

    const navigation = useNavigate();

    const defaultFieldValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        postcode: '',
        addressLine: '',
        city: '',
    }

    const [registrationFormDetails, setRegistrationFormDetails] = useState(defaultFieldValues);
    const [isLoading, setIsLoading] = useState(false);

    const resetFormFields = () => {
        setRegistrationFormDetails(defaultFieldValues)
    }

    const onFormChange = (event) => {
        const { name, value } = event.target;
        setRegistrationFormDetails({...registrationFormDetails, [name]: value});
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        if(registrationFormDetails.email && registrationFormDetails.password && registrationFormDetails.confirmPassword && registrationFormDetails.firstName && registrationFormDetails.lastName && registrationFormDetails.phoneNumber && registrationFormDetails.postcode && registrationFormDetails.addressLine && registrationFormDetails.city) {
            setIsLoading(!isLoading)
        }
        console.log(registrationFormDetails)
        try {
            // const { user } = await createAuthUserWithEmailAndPassword(registrationFormDetails.email, registrationFormDetails.password, registrationFormDetails.firstName, registrationFormDetails.lastName, registrationFormDetails.phone, registrationFormDetails.postcode, registrationFormDetails.addressLine, registrationFormDetails.city);
            const { user } = await createAuthUserWithEmailAndPassword(registrationFormDetails.email, registrationFormDetails.password);
            const userDocRef = await createUserDocumentFromAuth(user, registrationFormDetails);
            const data = await getDoc(userDocRef)
            console.log(user, "user" );
            console.log(userDocRef, "userDocRef" );
            console.log(data, "data" );

            if(user.uid) {
                const customer = {  id: user.uid, ...registrationFormDetails }
                store.dispatch(createCustomer(customer));
            }
            resetFormFields();
            navigation('/');
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already exists');
            } else {
                console.log('user creation encountered error', error);
            }
        }
    }
    return (
        <form 
            action=""
            method="post"
            className="login-container"
            onChange={onFormChange}
            onSubmit={onSubmitForm}
        >
            <div className='login-form-container'>
                <h1 className='login-heading'>Register</h1>
                <p className='login-text'>Your Details</p>
                <CustomInput
                    name = "firstName"
                    type = "text"
                    label = "First name"
                    value={registrationFormDetails.firstName}
                    required
                />
                <CustomInput 
                    name = "lastName"
                    type = "text"
                    label = "Last name"
                    value={registrationFormDetails.lastName}
                    required
                />
                <CustomInput 
                    name = "phoneNumber"
                    type = "tel"
                    label = "phoneNumber"
                    value={registrationFormDetails.phoneNumber}
                    required
                />
                <CustomInput 
                    name = "email"
                    type = "email"
                    label = "Email Address"
                    value={registrationFormDetails.email}
                    required
                />
                <CustomInput 
                    name = "password"
                    type = "password"
                    label = "password"
                    value={registrationFormDetails.password}
                    required
                />
                <CustomInput 
                    name = "confirmPassword"
                    type = "password"
                    label = "confirm password"
                    value={registrationFormDetails.confirmPassword}
                    required
                />
            </div>
            <div className='login-form-container'>
                <p className='login-text'>Your Address</p>
                <CustomInput
                    name = "postcode"
                    type = "text"
                    label = "Postcode"
                    value={registrationFormDetails.postcode}
                    required
                />
                 <CustomInput
                    name = "addressLine"
                    type = "text"
                    label = "Address Line 1"
                    value={registrationFormDetails.addressLine}
                    required
                />
                 <CustomInput
                    name = "city"
                    type = "text"
                    label = "Town/City"
                    value={registrationFormDetails.city}
                    required
                />
                 {/* <CustomInput
                    name = "firstName"
                    type = "text"
                    label = "First name"
                    // value={registrationFormDetails.email}
                    required
                /> */}
                <button 
                        className='sign-in-button register-button'
                    >
                        <HashLoader
                            color='#000'
                            loading={isLoading}
                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                         {!isLoading && `Register`}
                    </button>
            </div>
        </form>
    )
}

export default Registration;