/************************** Import library/fungsi ****************************/
import React from 'react'

//terkait routing,
import { Switch, Route, Redirect } from 'react-router-dom'

//Header yang ada di semua layout di dalam Halaman Admin
import Header from '../ui/Header'

//Page-page di dalam layout
import AdminHome from '../pages/AdminHome'
import AdminBatmon from '../pages/AdminBatmon'
import MainWindow from '../MainWindow'
import ReadCSV from '../pages/ReadCSV'
import EngUnitSetup from '../pages/EngUnitSetup'
import LogoutPage from '../pages/LogoutPage'

//modul-modul Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PrimaryLayout = ({ match,history }) => (
  //<div className="primary-layout">
    <div>
    <main>
        <Jumbotron>
          <Row><Col className="col-centered"><Header /></Col></Row>
        </Jumbotron>
      <Container className="primaryContainer">
        <Switch>
          <Route path={`${match.path}`} exact component={AdminHome} />
          <Route path={`${match.path}/batmon`} component={AdminBatmon} />
          <Route path={`${match.path}/mainwindow`} component={MainWindow} />
          <Route path={`${match.path}/readcsv`} component={ReadCSV} />
          <Route path={`${match.path}/engunitsetup`} component={EngUnitSetup} />
          <Route path={`${match.path}/logout`} component={LogoutPage} />
          <Redirect to={`${match.url}`} />
        </Switch>
       </Container>
    </main>
  </div>
)

export default PrimaryLayout