import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { InputForm } from './InputForm';
import { PasswordValidations } from './PasswordValidations';
import { ModalSubmitted } from './ModalSubmitted';

import { useForm } from '../hooks';

export const Form = () => {

    const {
        formValues,
        errors,
        passwordValidations,
        isOpenModal,
        isPasswordVisible,
        isConfirmPasswordVisible,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        resetForm,
        onKeyUp,
        onConfirmPasswordKeyUp,
        onSubmit,
        onChange
    } = useForm()

    return (
        <>
            <Box component='form' onSubmit={onSubmit}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <InputForm
                            label='Full Name'
                            name='fullName'
                            value={formValues.fullName}
                            onChange={onChange}
                            icon={
                                <Person2OutlinedIcon />
                            }
                            error={errors.fullName}
                            helperText={errors.fullName}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <InputForm
                            label='Your Email'
                            name='email'
                            value={formValues.email}
                            onChange={onChange}
                            icon={
                                <EmailOutlinedIcon />
                            }
                            error={errors.email}
                            helperText={errors.email}
                        />

                    </Grid>

                    <Grid item xs={12}>
                        <InputForm
                            label='Password'
                            name='password'
                            type={isPasswordVisible ? 'text' : 'password'}
                            value={formValues.password}
                            onChange={onChange}
                            onKeyUp={onKeyUp}
                            error={errors.password}
                            helperText={errors.password}
                            icon={
                                <LockOutlinedIcon />
                            } />
                        <Button onClick={togglePasswordVisibility}>{isPasswordVisible ? 'Hide Password' : 'View Password'}</Button>
                    </Grid>

                    <Grid item xs={12}>
                        <InputForm
                            label='Confirm Password'
                            name='confirmPassword'
                            value={formValues.confirmPassword}
                            onChange={onChange}
                            onKeyUp={onConfirmPasswordKeyUp}
                            error={errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            type={isConfirmPasswordVisible ? 'text' : 'password'}
                            icon={
                                <LockOutlinedIcon />
                            }
                        />
                        <Button onClick={toggleConfirmPasswordVisibility}>
                            {isConfirmPasswordVisible ? 'Hide Password' : 'View Password'}
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <PasswordValidations validations={passwordValidations} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant='contained' fullWidth type='submit'>Sign Up</Button>
                    </Grid>
                </Grid>
            </Box>

            <ModalSubmitted
                open={isOpenModal}
                handleClose={resetForm}
                formValues={formValues}
            />
        </>
    )
}
