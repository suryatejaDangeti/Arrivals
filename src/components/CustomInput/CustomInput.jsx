import { useState } from 'react';
import './CustomInput.css'

const CustomInput = (props) => {
    const { name, type, label, value } = props

    const [errorValue, setErrorValue] = useState('');

    const validation = (fieldValue) => {
        if(fieldValue === "" && props.required) {
            setErrorValue(`${props.label} is required.`)
        } else {
            setErrorValue('');
        }
    }

    return (
        <>
        <div className="custom-input-container">
        <label className='custom-input-label'>{label}</label>
        <input
            className={`custom-input ${errorValue !== "" && 'error-input'}`}
            name={name}
            type={type}
            value={value}
            placeholder={props.placeholder}
            onChange={(e) => {
                validation(e.target.value)
                return e
            }}
            onBlur={(e) => {
                console.log(e.target.value);
                validation(e.target.value)
            }}
         />
        </div>
        { errorValue !== "" &&
        <p className="">{errorValue}</p>
    }
    </>
    )
}

export default CustomInput