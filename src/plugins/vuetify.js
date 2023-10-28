import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  theme: {
    defaultTheme: 'light', // Set default theme
    themes: {
      light: {
        // Define your light theme colors here
        surface: '#FFFFFF', // background color for light theme
        onSurface: '#000000', // text color for light theme
        // ... other colors
      },
      dark: {
        // Define your dark theme colors here
        surface: '#121212', // background color for dark theme
        onSurface: '#FFFFFF', // text color for dark theme
        // ... other colors
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
