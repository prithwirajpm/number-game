import React from 'react'
import { Navbar,Container } from 'react-bootstrap';


function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary w-100">
                <Container className='d-flex justify-content-center align-items-center'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://icon-library.com/images/board-game-icon/board-game-icon-12.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header;