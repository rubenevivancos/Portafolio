import { Container, Row, Col, Nav } from 'react-bootstrap';


export default function Home() {

    return(
        <Container>
            <Row>
                <Col sm={3}>
                    <Nav className="flex-column">
                        <Nav.Link href="#sobre-mi">Sobre mí</Nav.Link>
                        <Nav.Link href="#mis-proyectos">Mis proyectos</Nav.Link>
                        <Nav.Link href="#mis-estudios">Mis estudios</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={9}>
                    {/* Contenido de la página */}
                </Col>
            </Row>
        </Container>
    )
}