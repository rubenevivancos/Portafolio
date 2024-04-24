import { Container, Row, Col } from 'react-bootstrap';
import SidebarMenu from '../SidebarMenu/sideBarMenu';


export default function Home() {

    return(
        <div className="bg-dark" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <SidebarMenu />
                    </Col>
                    <Col sm={9}>
                        <p style={{color: 'white'}}>Habilidades</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}