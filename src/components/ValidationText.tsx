import { FC } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CircleIcon from '@mui/icons-material/Circle';

interface Props {
    text: string
    success?: boolean
    error?: boolean
}

export const ValidationText: FC<Props> = ({ text, success = false, error = false }) => {

    const onChangeColor = () => {
        if (success) {
            return 'success.main'
        }
        if (error) {
            return 'error.main'
        }
        if (!success && !error) {
            return ''
        }
    }

    return (
        <Box display='flex' gap={1} alignItems='center'>
            <CircleIcon sx={{ width: 8, color: onChangeColor() }} />
            <Typography color={onChangeColor()}>
                {text}
            </Typography>
        </Box>
    )
}
