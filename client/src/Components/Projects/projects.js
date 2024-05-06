import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import proyecto01 from '../../Images/proyecto01.jpg';
import proyecto02 from '../../Images/proyecto02.jpg';
import proyecto03 from '../../Images/proyecto03.png';
import reactBootstrap from '../../Images/react-bootstrap.png';
import bootstrap from '../../Images/bootstrap.png';
import react from '../../Images/react.png';
import reduxToolkit from '../../Images/redux-toolkit.png';
import node from '../../Images/node.png';
import express from '../../Images/express.png';
import sequelize from '../../Images/sequelize.png';
import postgreSQL from '../../Images/postgresql.png';
import git from '../../Images/git.png';
import gitHub from '../../Images/gitHub.png';


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
                            <h1 className="bg-secondary text-white px-5 py-1 rounded w-50 text-center">
                                Proyectos
                            </h1>
                        </div>
                        <div className="mt-5 d-flex justify-content-center overflow-auto" style={{ maxHeight: '80vh' }}>
                            <div className="w-75">
                                <div className="mb-5 border border-secondary d-flex flex-row">
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3">
                                            <Image src={proyecto01} width="140" height="120"/>
                                        </div>
                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>App de Razas Caninas</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-2">
                                                            Aplicación que consume datos de una API (The Dog API) a través de un
                                                            Backend. Se puede realizar; búsquedas, ordenamientos y filtros, ver detalle, realizar registro.
                                                        </span>
                                                        <span>
                                                            La Versión 1 está hecha con Redux
                                                        </span>
                                                        <span className="mb-4">
                                                            La Versión 2 está hecha con Redux-Toolkit
                                                        </span>
                                                        <span className="mb-2">
                                                            Versión 1:
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="mb-4">
                                                            <Link className="pe-2 small text-white">GitHub</Link> <Link className="small text-white">Deploy</Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            Versión 2: 
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span>
                                                            <Link className="pe-2 small text-white">GitHub</Link> <Link className="small text-white">Deploy</Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>
                                <div className="mb-5 border border-secondary d-flex flex-row">
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3">
                                            <Image src={proyecto01} width="140" height="120"/>
                                        </div>
                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>App de Razas Caninas</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-2">
                                                            Aplicación que consume datos de una API (The Dog API) a través de un
                                                            Backend. Se puede realizar; búsquedas, ordenamientos y filtros, ver detalle, realizar registro.
                                                        </span>
                                                        <span>
                                                            La Versión 1 está hecha con Redux
                                                        </span>
                                                        <span className="mb-4">
                                                            La Versión 2 está hecha con Redux-Toolkit
                                                        </span>
                                                        <span className="mb-2">
                                                            Versión 1:
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="mb-4">
                                                            <Link className="pe-2 small text-white">GitHub</Link> <Link className="small text-white">Deploy</Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            Versión 2: 
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span>
                                                            <Link className="pe-2 small text-white">GitHub</Link> <Link className="small text-white">Deploy</Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>
                                <div className="mb-5 border border-secondary d-flex flex-row">
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3">
                                            <Image src={proyecto01} width="140" height="120"/>
                                        </div>
                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>App de Razas Caninas</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-2">
                                                            Aplicación que consume datos de una API (The Dog API) a través de un
                                                            Backend. Se puede realizar; búsquedas, ordenamientos y filtros, ver detalle, realizar registro.
                                                        </span>
                                                        <span>
                                                            La Versión 1 está hecha con Redux
                                                        </span>
                                                        <span className="mb-4">
                                                            La Versión 2 está hecha con Redux-Toolkit
                                                        </span>
                                                        <span className="mb-2">
                                                            Versión 1:
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="mb-4">
                                                            <Link className="pe-2 small text-white">GitHub</Link> <Link className="small text-white">Deploy</Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            Versión 2: 
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span>
                                                            <Link className="pe-2 small text-white">GitHub</Link> <Link className="small text-white">Deploy</Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}