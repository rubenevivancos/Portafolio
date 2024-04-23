import { Container, Row, Col } from 'react-bootstrap';
import SidebarMenu from '../SidebarMenu/sideBarMenu';


export default function Home() {

    return(
        <Container>
            <Row>
                <Col sm={3}>
                    <SidebarMenu />
                </Col>
                <Col sm={9}>
                    <p>Home</p>
                </Col>
            </Row>
        </Container>
    )
}