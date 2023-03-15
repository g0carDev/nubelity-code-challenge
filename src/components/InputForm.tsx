import { ChangeEvent, FC } from 'react'

import TextField from '@mui/material/TextField'
import { TextFieldProps } from '@mui/material'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'

type ConflictProps = "name" | "label" | "value" | "error" | "onChange";


interface Props extends Omit<TextFieldProps, ConflictProps> {
  label: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  icon: JSX.Element
  error?: string
  helperText?: string
}
export const InputForm: FC<Props> = ({ label, name, value, onChange, icon, error = false, helperText = '', ...propsTextField }) => {
  return (
    <Box>
      <TextField
        label={label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        }}
        fullWidth
        variant="outlined"
        value={value}
        name={name}
        onChange={onChange}
        error={Boolean(error)}
        helperText={helperText}
        {...propsTextField}
      />
    </Box>
  )
}
