export interface FormValues {
    fullName: string
    email: string
    password: string
    confirmPassword: string
}

export interface PasswordValidationsInterface {
    length: {
        error: boolean
        success: boolean
    },
    hasNumber: {
        error: boolean
        success: boolean
    },
    hasCapLetter: {
        error: boolean
        success: boolean
    },
    hasNonAlphaNum: {
        error: boolean
        success: boolean
    }
}