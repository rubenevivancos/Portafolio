import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Home() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-success text-white px-5 py-1 rounded w-50 text-end">
                                Experiencia
                            </h1>
                        </div>
                        <p className="text-white">El resto del contenido va aquí y se alinea a la izquierda.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}