import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/header.css'
import {UpHome} from '../../routing/routing';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    function handleClick() {
        UpHome();

    }
    return(<Nav.Link onClick={handleClick} href="#home">Главная</Nav.Link>);
}

function Brand() {
    function handleClick() {
        UpHome();
    }
    return(<Navbar.Brand onClick={handleClick} href="#home">Межведомственные запросы</Navbar.Brand>);
    }
function Header() {

    return (
        // <Container className="my-container-header">
            <Navbar className="my-container-header"  bg="dark" variant="dark" expand="lg">
                <Container>
                    <Brand/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Home/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            // </Container>
    );
}

export default Header;
