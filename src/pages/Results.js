import React, { useEffect } from 'react';
import { Avatar, Box, Header, ResponsiveContext } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { isValidEngine } from '../utils/engines';
import search from '../actions';
import ResultList from '../components/ResultList';
import SearchInput from '../components/SearchInput';
import ThemeToggler from '../components/ThemeToggler';
import ErrorMessage from '../components/ErrorMessage';

/**
 * Main Results Page that renders corresponding state search values
 * @param {object} param0
 */
const Results = ({ darkMode, onThemeToggle }) => {
  const { loading, error, elements } = useSelector((state) => state.search);
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
                <Link to="/">
                  <Avatar src="small-logo.png" size="xlarge" />
                </Link>
              )}
              <SearchInput text={text} engine={engine} />
            </Box>
            {size !== 'small' && (
              <Box align="end">
                <ThemeToggler darkMode={darkMode} onToggle={onThemeToggle} />
              </Box>
            )}
          </Header>
          <ResultList loading={loading} items={elements} />
          {!loading && error !== '' && <ErrorMessage />}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Results;
