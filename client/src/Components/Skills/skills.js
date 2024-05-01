import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs'; 

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import reactBootstrap from '../../Images/react-bootstrap.png';
import bootstrap from '../../Images/bootstrap.png';
import react from '../../Images/react.png';
import reduxToolkit from '../../Images/redux-toolkit.png';
import node from '../../Images/node.png';
import express from '../../Images/express.png';
import sequelize from '../../Images/sequelize.png';
import postgreSQL from '../../Images/postgresql.png';


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
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={react} className="me-2" width="16" height="16"/>React <span className="text-danger"><BsCheck /></span>
                                        </p>
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={reduxToolkit} className="me-2" width="16" height="16"/>Redux-Toolkit <span className="text-danger"><BsCheck /></span>
                                        </p>
                                    </Col>
                                    <Col className="text-white">
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={node} className="me-2" width="16" height="16"/>Node <span className="text-danger"><BsCheck /></span>
                                        </p>
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={express} className="me-2" width="16" height="16"/>Express <span className="text-danger"><BsCheck /></span>
                                        </p>
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={sequelize} className="me-2" width="16" height="16"/>Sequelize <span className="text-danger"><BsCheck /></span>
                                        </p>
                                        <p className="mb-2 d-flex justify-content-center align-items-center">
                                            <Image src={postgreSQL} className="me-2" width="16" height="16"/>PostgreSQL <span className="text-danger"><BsCheck /></span>
                                        </p>
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