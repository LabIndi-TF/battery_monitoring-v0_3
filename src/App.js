/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React, { Component } from 'react';

//terkait routing, dan sebuah component untuk menampung semua konten yang
//hanya bisa muncul bila user ter-autentikasi (sudah login)
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedRoute from './AuthorizedRoute'
import { Provider } from 'react-redux'
import store from './store'

//CSS untuk app
import './App.css';

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import PrimaryLayout from './layouts/PrimaryLayout'

/************************ Deklarasi objek/variabel ***************************/


/************************ Deklarasi kelas/komponen ***************************/
class App extends Component {
  /*
  constructor(){
    super();
  }
 */
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/app" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
    /*
    return (
      <div className="App">
        <MainWindow />        
      </div>
    );
    */
  }
}

export default App;
