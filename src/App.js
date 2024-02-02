import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import './App.css';

// About Us Component
const AboutUs = () => (
  <div>
    <Typography variant="h4" align="center">
      About Us
    </Typography>
    <div>
      {/* Add content specific to the 'About Us' section */}
      <p>This is the 'About Us' section.</p>
    </div>
  </div>
);

// The Day Component
const TheDay = () => (
  <div>
    <Typography variant="h4" align="center">
      The Day
    </Typography>
    <div>
      {/* Add content specific to 'The Day' section */}
      <p>This is the 'The Day' section.</p>
    </div>
  </div>
);

// Photo Upload Component
const PhotoUpload = () => (
  <div>
    <Typography variant="h4" align="center">
      Photo Upload
    </Typography>
    <div>
      {/* Add content specific to the 'Photo Upload' section */}
      <p>This is the 'Photo Upload' section.</p>
    </div>
  </div>
);

// Welcome Section Component
const WelcomeSection = () => (
  <Grid container spacing={2} justify="center" alignItems="center">
    <Grid item xs={12}>
      <Typography variant="h4" align="center">
        Welcome to Our Wedding Website
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1" align="center">
        Join us in celebrating the love between [Your Names].
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
);

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Wedding Website</Typography>
            <Button color="inherit" component={Link} to="/about-us">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/the-day">
              The Day
            </Button>
            <Button color="inherit" component={Link} to="/photo-upload">
              Photo Upload
            </Button>
          </Toolbar>
        </AppBar>
        <main>
          <Container maxWidth="md">
            <Routes>
              <Route path="/about-us/*" element={<AboutUs />} />
              <Route path="/the-day/*" element={<TheDay />} />
              <Route path="/photo-upload/*" element={<PhotoUpload />} />
              <Route index element={<WelcomeSection />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
