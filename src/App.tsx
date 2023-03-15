import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { Form } from './components';

function App() {

  return (
    <Container>
      <Typography sx={{
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'primary.main',
        my: 5
      }}>Create a new account</Typography>

      <Form />
    </Container>
  )
}

export default App
