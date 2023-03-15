
import { FC } from 'react';

import Box from '@mui/material/Box';

import { ValidationText } from './ValidationText';
import { PasswordValidationsInterface } from '../interfaces';

interface Props {
    validations: PasswordValidationsInterface
}


export const PasswordValidations: FC<Props> = ({ validations }) => {

    // useEffect(() => {

    // }, [confirmPassword])

    return (
        <Box display='flex' flexDirection='column' gap={1}>
            <ValidationText
                text='Should be eight characters long'
                error={validations.length.error}
                success={validations.length.success} />
            <ValidationText text='Should include an uppercase letter'
                error={validations.hasCapLetter.error}
                success={validations.hasCapLetter.success} />
            <ValidationText text='Should include two non-alphanumeric characters'
                error={validations.hasNonAlphaNum.error}
                success={validations.hasNonAlphaNum.success} />
            <ValidationText text='Should include at least numerical character'
                error={validations.hasNumber.error}
                success={validations.hasNumber.success} />
        </Box>
    )
}
