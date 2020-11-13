import { Box, Image, ResponsiveContext } from 'grommet';
import SearchInput from '../components/SearchInput';
import ThemeToggler from '../components/ThemeToggler';

/**
 * Main landing page container
 * @param {object} param0
 */
const Home = ({ darkMode, onThemeToggle }) => (
  <ResponsiveContext.Consumer data-test="home">
    {(size) => (
      <>
        <Box
          animation="fadeIn"
          align="center"
          pad={{
            top: 'large',
            horizontal: size !== 'large' ? 'small' : 'large',
          }}
        >
          <Image src="/logo.svg" width="300" margin="1.5rem" />
          <SearchInput placeholder="Search...">
            <ThemeToggler darkMode={darkMode} onToggle={onThemeToggle} />
          </SearchInput>
        </Box>
      </>
    )}
  </ResponsiveContext.Consumer>
);

export default Home;
