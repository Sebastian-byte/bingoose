import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#6FC0D9',
      secondary: '#FC8C29',
      nav: {
        dark: '#1C1C1C',
        light: '#FAFAFA',
      },
      search: {
        dark: 'transparent',
        light: '#fefefe',
      },
      background: {
        dark: '#1C1C1C',
        light: '#fefefe',
      },
      control: {
        dark: 'brand',
        light: 'brand',
      },
      text: {
        light: '#2C3436',
        dark: '#fefefe',
      },
      focus: 'transparent',
    },
    font: {
      family: 'Nunito Sans',
      size: '14px',
      height: '20px',
    },
  },
  button: {
    color: '#fefefe',
  },
});

export default theme;
