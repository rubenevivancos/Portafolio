import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Home() {

    return(
        <div className="bg-dark" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <p style={{color: 'white'}}>Habilidades</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}