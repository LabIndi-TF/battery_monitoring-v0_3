/************************** Import library/fungsi ****************************/
import React from 'react'

//terkait routing
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/************************ Deklarasi kelas/komponen ***************************/
const Header = () => (
  //<header className="primary-header">
  <header>
    <h1 className="big-title">Battery Monitoring Lab Indi</h1>
    {/* kenapa div? supaya ButtonGroup nya ke center, nama text-center
        asalnya dari bootstrap-min-js    
      */}
    <div className="text-center"> 
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-warning">
          <NavLink to="/app" exact activeClassName="active">Home</NavLink>
        </Button>
        <Button variant="outline-warning">
        <NavLink to="/app/batmon" activeClassName="active">Battery Monitoring</NavLink>
        </Button>
        <Button variant="outline-warning">
        <NavLink to="/app/mainwindow" activeClassName="active">Battery Monitoring (Existing)</NavLink>
        </Button>
        <Button variant="outline-warning">
        <NavLink to="/app/readcsv" activeClassName="active">Read CSV</NavLink>
        </Button>
        <Button variant="outline-warning">
        <NavLink to="/app/engunitsetup" activeClassName="active">Eng. Unit Setup</NavLink>
        </Button>
        <Button variant="outline-warning">
          <NavLink to="/app/logout" activeClassName="active">Logout</NavLink>
        </Button>
      </ButtonGroup>
    </div>
  </header>
)

export default Header