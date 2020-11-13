import React, { useState } from 'react';
import { Grommet } from 'grommet';
import theme from './theme';
import Home from './pages/Home';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <Home darkMode={darkMode} onThemeToggle={() => setDarkMode(!darkMode)} />
    </Grommet>
  );
};

export default App;
