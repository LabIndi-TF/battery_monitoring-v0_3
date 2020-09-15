/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React from 'react'

//terkait routing (buka comment Link jika perlu <Link />)
//import { Link } from 'react-router-dom'
import { login } from '../utils/xhr'

//modul-modul Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

/************************ Deklarasi objek/variabel ***************************/
const RightUsername = "root";
const RightPassword = "password";

/************************ Deklarasi kelas/komponen ***************************/
const LoginPage = ({ history }) => (
  <div>
    <Container fluid className="p-3Container">
      <Jumbotron className="jumbotron-bg">
        <h1 className="big-title"><b>Battery Monitoring v0.3</b></h1>
        <Row>
        <h1 className="col-centered">Login Page</h1>
        </Row>
        {/*
        <p>
          Selamat datang di halaman login. Seharusnya halaman  
          <Link to="/app">/app</Link> tidak bisa diakses dari sini, dan pengguna
          akan dipaksa kembali ke halaman Login.
        </p>
        */}
        <Row>&nbsp;</Row>
        <Row className="justify-content-md-center">
          <Col md={2}>Username:</Col><Col md="auto"><input id="username"/></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={2}>Password:</Col><Col md="auto"><input type="password" id="password" /></Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row className="justify-content-md-center">
          <Button onClick={() => {
            login().then(() => {
                if(document.getElementById("username").value === RightUsername && document.getElementById("password").value === RightPassword){
                  history.push('/app')
                }
                else{
                    alert("Username atau Password salah!");
                }
            });
          }}>Login</Button>
        </Row>
      </Jumbotron>
    </Container>
  </div>
)

export default LoginPage