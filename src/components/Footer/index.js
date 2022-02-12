import * as React from 'react';
import { Container, Grid, Typography, Link, Box, CssBaseline } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/myc37/eye-spiring">
        5bc-eyespiring
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return <footer>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Container maxWidth="lg">
            <Grid container spacing={10} justify="center">
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Privacy
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Login
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Register
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Messages</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Backup
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    History
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Roll
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Copyright />
        </Container>
      </Box>
    </Box>
  </footer>;
};

export default Footer;
