import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import proyecto01 from '../../Images/proyecto01.jpg';


export default function Projects() {

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
                        <div className="mt-5 d-flex justify-content-center overflow-auto" style={{ maxHeight: '80vh', scrollbarColor: '#6c757d #292e33' }}>
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
                                                        <span className="mb-4 small">
                                                            Aplicación que consume datos de una API (The Dog API) a través de un
                                                            Backend. Se puede realizar; búsquedas, ordenamientos y filtros, ver detalle, realizar registro.
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 1:</b> <span className="small">Está hecha con Redux</span>
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
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI-Dogs-Henry"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI-Dogs-Henry", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link> 
                                                            <Link className="small text-white">
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 2:</b> <span className="small">Está hecha con Redux-Toolkit</span>
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
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI_Dogs_2.0"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI_Dogs_2.0", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link> 
                                                            <Link className="small text-white">
                                                                Deploy
                                                            </Link>
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
                                                        <b>Bazar OnLine</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            En esta aplicación web los usuarios podrán buscar el nombre del producto, se mostrará una lista de 
                                                            productos como resultado y podrán hacer clic en cada uno para ver el detalle.
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 1:</b> <span className="small">Los productos son obtenidos de un archivo JSON</span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                        </span>
                                                        <span className="mb-4">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal2.0"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal2.0", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link> 
                                                            <Link className="small text-white">
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 2:</b> <span className="small">La informacion es obtenida de 3 tablas relacionadas en una 
                                                                                                      bd PostgreSQL, se usan 3 funciones almacenadas.
                                                                              </span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span>
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal3.0"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal3.0", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link> 
                                                            <Link className="small text-white">
                                                                Deploy
                                                            </Link>
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
                                                        <b>Portafolio</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            Aplicación web hecha con React-Bootstrap y React-Context
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Context</span>
                                                        </span>
                                                        <span className="mb-4">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/Portafolio"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/Portafolio", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link> 
                                                            <Link className="small text-white">
                                                                Deploy
                                                            </Link>
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