import React from 'react';
import { Box, CheckBox } from 'grommet';
import { Moon, Sun } from 'grommet-icons';

/**
 * Main theme toggler changing from dark or light
 * @param {object} param0
 */
const ThemeToggler = ({ darkMode, onToggle }) => (
  <Box pad="small" direction="row" alignSelf="end">
    {darkMode ? <Sun /> : <Moon />}
    <CheckBox checked={darkMode} onChange={() => onToggle(!darkMode)} toggle />
  </Box>
);

export default ThemeToggler;
