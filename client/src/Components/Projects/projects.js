import { Container, Row, Col, Image } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';

import proyecto01 from '../../Images/proyecto01.jpg';
import proyecto02 from '../../Images/proyecto02.jpg';
import proyecto03 from '../../Images/proyecto03.png';


export default function Home() {

    return(
        <div className="bg-dark" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-secondary text-white px-5 py-1 rounded w-50 text-center">
                                Proyectos
                            </h1>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <div className="w-75">
                                <div className="text-white mb-5 border border-secondary">
                                    <Row>
                                        <Col>
                                            <Image src={proyecto01} className="m-2" width="140" height="120"/>
                                        </Col>
                                        <Col>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-white mb-5 border border-secondary">
                                    <Row>
                                        <Col>
                                            <Image src={proyecto02} className="m-2" width="140" height="120"/>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                                <div className="text-white border border-secondary">
                                    <Row>
                                        <Col>
                                            <Image src={proyecto03} className="m-2" width="140" height="120"/>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}