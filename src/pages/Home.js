import { Box, Image, ResponsiveContext } from 'grommet';
import SearchInput from '../components/SearchInput';
import ThemeToggler from '../components/ThemeToggler';

const Home = ({ darkMode, onThemeToggle }) => (
  <ResponsiveContext.Consumer>
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
