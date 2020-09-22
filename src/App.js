import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import {CssBaseLine} from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'


function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseLine/>
      <GlobalStyle/>
      <div>
        Teste
      </div>
    </StylesProvider>

     
  );
}

export default App;
