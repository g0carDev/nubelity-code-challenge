import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { FC } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import type { FormValues } from '../interfaces';
import List from '@mui/material/List';

interface Props {
    open: boolean;
    handleClose: () => void;
    formValues: FormValues
}

export const ModalSubmitted: FC<Props> = ({ open, handleClose, formValues }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Congratulations
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Full Name: {formValues.fullName}
                </DialogContentText>
                <DialogContentText>
                    Email: {formValues.email}
                </DialogContentText>
                <DialogContentText>
                    Password: {formValues.password}
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}
