import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
;
import { validateFullName, validateEmail, regexValidationPassword } from '../validations';
import type { PasswordValidationsInterface } from '../interfaces';

interface FormValues {
    fullName: string
    email: string
    password: string
    confirmPassword: string
}

export const useForm = () => {

    const [formValues, setFormValues] = useState<FormValues>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState<FormValues>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [passwordValidations, setPasswordValidations] = useState<PasswordValidationsInterface>({
        length: {
            error: false,
            success: false
        },
        hasNumber: {
            error: false,
            success: false
        },
        hasCapLetter: {
            error: false,
            success: false
        },
        hasNonAlphaNum: {
            error: false,
            success: false
        }
    })

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
    }

    const onKeyUp = (e: KeyboardEvent | any) => {
        const { value } = e.target as HTMLInputElement

        regexValidationPassword({
            value,
            setPasswordValidations
        })

    }

    const onConfirmPasswordKeyUp = (e: KeyboardEvent | any) => {
        const { value } = e.target as HTMLInputElement

        if (value !== formValues.password) {
            setErrors({
                ...errors,
                confirmPassword: 'Passwords do not match'
            })
        } else {
            setErrors({
                ...errors,
                confirmPassword: ''
            })
        }
    }

    useEffect(() => {
        validateFullName({ value: formValues.fullName, setErrors })
    }, [formValues.fullName])

    useEffect(() => {
        validateEmail({ value: formValues.email, setErrors })
    }, [formValues.email])



    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(errors).some(error => error !== '')) {
            alert('Form has errors')
            return
        }
        if (Object.values(formValues).some(value => value === '')) {
            alert('All fields are required')
            return
        }

        setIsOpenModal(true)
    }

    const resetForm = () => {
        setFormValues({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        setErrors({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        setPasswordValidations({
            length: {
                error: false,
                success: false
            },
            hasNumber: {
                error: false,
                success: false
            },
            hasCapLetter: {
                error: false,
                success: false
            },
            hasNonAlphaNum: {
                error: false,
                success: false
            }
        })

        setIsOpenModal(false)
        setIsPasswordVisible(false)
        setIsConfirmPasswordVisible(false)
    }


    return {
        formValues,
        errors,
        passwordValidations,
        isOpenModal,
        isConfirmPasswordVisible,
        isPasswordVisible,
        //methods
        resetForm,
        onChange,
        onSubmit,
        onKeyUp,
        onConfirmPasswordKeyUp,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
    }
}