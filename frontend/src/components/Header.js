import React, { Component } from 'react';
import { Navbar, FormControl, Form, Button} from 'react-bootstrap';
import "../components/stylesHeader.css"

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" id="header">
                    <div id="title"><Navbar.Brand href="#home">AGENDA COMUNITÁRIA</Navbar.Brand></div>
                    <div id="search"> <Form inline >
                        <FormControl type="text" placeholder="Pesquise" className="mr-sm-2" />
                        <Button variant="outline-primary"><a class="search_icon"><i class="fas fa-search"></i></a></Button>
                        <Button variant="outline-primary" id="logout"><a class="search_icon">Logout</a></Button>
                    </Form></div>
                </Navbar>
            </>
        )
    }
}