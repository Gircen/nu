import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import footer from '../css/footer.css'
import Container from 'react-bootstrap/Container';
const Footer = () =>
    <Container className="myCF">
        <MDBFooter bgColor='dark' variant="dark" className=' footer text-center text-lg-left'>
            <div className='text-center p-3 text-white '  >
            © 2022 Copyright:<a className='text-white' href='mailto:gircen@yandex.ru'>Gircen</a>
        </div>
        </MDBFooter>;
    </Container>

    export default Footer;
