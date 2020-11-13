import React, { useState } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme';
import Home from './pages/Home';
import Results from './pages/Results';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
        <Switch>
          <Route exact path="/">
            <Home
              darkMode={darkMode}
              onThemeToggle={() => setDarkMode(!darkMode)}
            />
          </Route>
          <Route exact path="/search">
            <Results
              darkMode={darkMode}
              onThemeToggle={() => setDarkMode(!darkMode)}
            />
          </Route>
        </Switch>
      </Grommet>
    </Router>
  );
};

export default App;
