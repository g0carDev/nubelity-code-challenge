import { Dispatch } from 'react';
import { MESSAGES_ERROR } from '../constants';
import type { FormValues, PasswordValidationsInterface } from '../interfaces';
import { isValidEmail } from '../utils';


interface ValidateProps{
    value: string;
    setErrors: Dispatch<React.SetStateAction<FormValues>>;
}

export const validateFullName = ({value, setErrors}: ValidateProps) => {
    if (value && value.length < 6) {
        setErrors(errors => ({
            ...errors,
            fullName: MESSAGES_ERROR.fullName.minLength
        }))
    } else {
        setErrors(errors => ({
            ...errors,
            fullName: ''
        }))
    }
}

export const validateEmail = ({value, setErrors}: ValidateProps) => {
    if (value && !isValidEmail(value)) {
        setErrors(errors => ({
            ...errors,
            email: MESSAGES_ERROR.email.invalid
        }))
    } else {
        setErrors(errors => ({
            ...errors,
            email: ''
        }))
    }
}

export const validatePassword = ({value, setErrors}: ValidateProps) => {
    if (value && value.length < 8) {
        setErrors(errors => ({
            ...errors,
            password: MESSAGES_ERROR.password.minLength
        }))
    } else {
        setErrors(errors => ({
            ...errors,
            password: ''
        }))
    }
}

interface RegexValidationProps {
    value: string;
    setPasswordValidations: Dispatch<React.SetStateAction<PasswordValidationsInterface>>;
}

export const regexValidationPassword = ({value, setPasswordValidations}:RegexValidationProps) => {
    const lengthCheck = value.length >= 8
    const numberCheck = /[0-9]/.test(value)
    const capLetterCheck = /[A-Z]/.test(value)
    const nonAlphaNumCheck = /[^a-zA-Z0-9]{2,}/.test(value)


    setPasswordValidations({
        length: {
            error: !lengthCheck,
            success: lengthCheck
        },
        hasNumber: {
            error: !numberCheck,
            success: numberCheck
        },
        hasCapLetter: {
            error: !capLetterCheck,
            success: capLetterCheck
        },
        hasNonAlphaNum: {
            error: !nonAlphaNumCheck,
            success: nonAlphaNumCheck
        }
    })
}