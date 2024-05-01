import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs'; 

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import reactBootstrap from '../../Images/react-bootstrap.png';
import bootstrap from '../../Images/bootstrap.png';


export default function Home() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="mb-5 d-flex justify-content-end">
                            <h1 className="bg-danger text-white px-5 py-1 rounded w-50 text-center mb-5">
                                Habilidades
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <div className="w-75">
                                <Row>
                                    <Col className="text-white">
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={reactBootstrap} className="me-2" width="16" height="16"/>React-Bootstrap <span className="text-danger"><BsCheck /></span>
                                        </p>
                                        <p className="mb-2 d-flex justify-content-center  align-items-center">
                                            <Image src={bootstrap} className="me-2" width="16" height="16"/>Bootstrap <span className="text-danger"><BsCheck /></span>
                                        </p>
                                        <p className="mb-2 d-flex justify-content-center">React <span className="text-danger"><BsCheck /></span></p>
                                        <p className="mb-2 d-flex justify-content-center">Redux-Toolkit <span className="text-danger"><BsCheck /></span></p>
                                    </Col>
                                    <Col className="text-white">
                                        <p className="mb-2 d-flex justify-content-center">Node <span className="text-danger"><BsCheck /></span></p>
                                        <p className="mb-2 d-flex justify-content-center">Express <span className="text-danger"><BsCheck /></span></p>
                                        <p className="mb-2 d-flex justify-content-center">Sequelize <span className="text-danger"><BsCheck /></span></p>
                                        <p className="mb-2 d-flex justify-content-center">PostgreSQL <span className="text-danger"><BsCheck /></span></p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}