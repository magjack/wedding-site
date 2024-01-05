import React from 'react';
import { AppBar, Button, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Wedding Website</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="md">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Welcome to Our Wedding Website
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Join us in celebrating the love between Emily and Jack.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Save the date: [Your Wedding Date]
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;

