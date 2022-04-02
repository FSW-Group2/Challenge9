import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';


export default function HelperTextAligned() {
  return (
    <Container>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      
    </Box>
    </Container>
  );
}
