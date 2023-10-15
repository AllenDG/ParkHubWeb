import React, { useState } from 'react';
import { Container, Typography, Paper, Switch, FormControlLabel } from '@mui/material';

export default function Settings() {
  // Define state for settings
  const [theme, setTheme] = useState('light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [customSetting, setCustomSetting] = useState(false); // Added state for custom setting
  const [dataSharingEnabled, setDataSharingEnabled] = useState(false);

  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // You can save the theme preference to local storage or send it to a server here
  };

  // Function to handle notification settings
  const handleNotificationChange = (isEnabled) => {
    setNotificationsEnabled(isEnabled);
    // You can update notification preferences in the backend here
  };

  // Function to handle custom setting
  const handleCustomSettingChange = (isCustomSettingEnabled) => {
    setCustomSetting(isCustomSettingEnabled);
    // Handle custom setting as needed
  };

  // Function to handle data sharing preferences
  const handleDataSharingChange = (isDataSharingEnabled) => {
    setDataSharingEnabled(isDataSharingEnabled);
    // You can update data sharing preferences here
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>

        {/* User Profile Section */}
        <Paper elevation={1} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>
          <Typography>Username: JohnDoe</Typography>
          <Typography>Email: john@example.com</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Edit Profile
          </Button>
        </Paper>

        {/* Notification Settings Section */}
        <Paper elevation={1} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Notifications
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={notificationsEnabled}
                onChange={(e) => handleNotificationChange(e.target.checked)}
                color="primary"
              />
            }
            label="Receive notifications"
          />
        </Paper>

        {/* Custom Setting Section */}
        <Paper elevation={1} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Custom Setting
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={customSetting}
                onChange={(e) => handleCustomSettingChange(e.target.checked)}
                color="primary"
              />
            }
            label="Enable custom feature"
          />
        </Paper>

        {/* Privacy Settings Section */}
        <Paper elevation={1} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Privacy Settings
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={dataSharingEnabled}
                onChange={(e) => handleDataSharingChange(e.target.checked)}
                color="primary"
              />
            }
            label="Allow data sharing"
          />
          <Typography>
            By enabling data sharing, your information may be shared with our trusted partners.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
}
