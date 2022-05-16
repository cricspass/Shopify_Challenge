 import React from "react";
 import { NavLink } from "react-router-dom";
 import Navbar from "react-bootstrap/Navbar";
 import Nav from "react-bootstrap/Nav";
 import Container from "react-bootstrap/Container";
 
 function NavBar() {
   return (
     <Navbar fixed="top" className="navbar-color navbar navbar-dark" expand="lg">
       <Container>
 
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="nav-text-color me-auto">
 
             <Nav.Item className="p-2">
               <NavLink to="/" className="nav-text-color">
                 Inventories
               </NavLink>
             </Nav.Item>
 
             <Nav.Item className="p-2">
               <NavLink to="/warehouses" className="nav-text-color">
                 Warehouses
               </NavLink>
             </Nav.Item>
 
           </Nav>
 
         </Navbar.Collapse>
       </Container>
     </Navbar>
   );
 }
 
 export default NavBar;
 