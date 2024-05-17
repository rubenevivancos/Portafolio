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
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="text-white d-flex justify-content-center">
                                <span className="text-primary text-decoration-underline">B</span>
                                <span className="text-success text-decoration-underline">I</span>
                                <span className="text-danger text-decoration-underline">E</span>
                                <span className="text-secondary text-decoration-underline">N</span>
                                <span className="text-warning text-decoration-underline">V</span>
                                <span className="text-info text-decoration-underline">E</span>
                                <span className="text-primary text-decoration-underline">N</span>
                                <span className="text-success text-decoration-underline">I</span>
                                <span className="text-danger text-decoration-underline">D</span>
                                <span className="text-secondary text-decoration-underline">O</span>
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}