import React from 'react';
import { ThemeProvider } from 'styled-components';


import lightTheme from './src/theme/light';

import App from './src/pages/Home';

const Home = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;