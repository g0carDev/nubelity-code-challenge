
export const isValidEmail = (email: string): boolean => {
    const isValid = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    return isValid.test(email)
}