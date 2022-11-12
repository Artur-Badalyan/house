import React, { Suspense } from 'react';
import { makeStyles } from '@mui/styles';

import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Toaster } from 'react-hot-toast';

import Header from 'components/header'

import CircularLoading from 'components/loading/Loading';
import { routes } from 'configs/index';
import './App.css';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
  }
}));

function App() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classNames(classes.root, 'App')}>
      <Suspense fallback={<CircularLoading />}>
        <BrowserRouter>
          <Header /> 
          <Switch>
              {/* <Route path={routes.home.path} exact component={LoginPage} /> */}
              {/* <Route path="**" component={() => (<>Not found</>)}/> */}
          </Switch>
          <div className="alert-container">
            <Toaster
              position="bottom-right"
              toastOptions={{ style: { fontSize: '16px', padding: '10px 30px' } }}
            />
          </div>

        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
