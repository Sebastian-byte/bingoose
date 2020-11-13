import { Avatar, Box, Header, ResponsiveContext } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { isValidEngine } from '../utils/engines';
import search from '../actions';
import ResultList from '../components/ResultList';
import SearchInput from '../components/SearchInput';
import ThemeToggler from '../components/ThemeToggler';

const Results = ({ darkMode, onThemeToggle }) => {
  const { search: urlParams } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(urlParams);
  const text = params.get('q');
  const engine = params.get('e');
  const isNotValidParams =
    !text ||
    (text === '' && !engine) ||
    engine === '' ||
    !isValidEngine(engine);

  if (isNotValidParams) history.push('/');

  useEffect(() => {
    if (!isNotValidParams) dispatch(search(engine.toLowerCase(), text));
  }, [dispatch, engine, text, isNotValidParams]);

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box animation="fadeIn">
          {size === 'small' && (
            <Box align="center" background="nav">
              <Avatar src="small-logo.png" size="large" margin="medium" />
              <ThemeToggler darkMode={darkMode} onToggle={onThemeToggle} />
            </Box>
          )}
          <Header
            style={{ borderBottom: '2px solid #cecece' }}
            background="nav"
            pad="small"
          >
            <Box margin="2rem" direction="row" align="center" gap="small">
              {size !== 'small' && (
                <Avatar src="small-logo.png" size="xlarge" />
              )}
              <SearchInput text={text} engine={engine} />
            </Box>
            {size !== 'small' && (
              <Box align="end">
                <ThemeToggler darkMode={darkMode} onToggle={onThemeToggle} />
              </Box>
            )}
          </Header>
          <ResultList items={['lol']} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Results;
