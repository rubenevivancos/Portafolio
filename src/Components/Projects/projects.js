import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';
import portafolio from '../../Images/portafolio.png';
import libreMercado from '../../Images/libreMercado.png';
import dogs from '../../Images/dogs.png';
import emedicine from '../../Images/emedicine.png';
import booked from '../../Images/booked.png';


export default function Projects() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center min-vh-100">
        {/* Otra opcion usando Inline Style Condicional */}
        {/* <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: isSmallScreen ? 'auto' : '100vh' }}> */}
            <Container>
                <Row>
                    <Col lg={3} className="d-flex align-items-center">
                        {/* Sidebar para pantallas grandes */}
                        <SideBarMenu />

                        {/* Menú de hamburguesa para pantallas pequeñas */}
                        <HamburguerMenu />
                    </Col>
                    
                    <Col lg={9}>
                        <div className="mb-5 d-flex justify-content-end">
                            {/* Para pantallas grandes */}
                            <h1 className="bg-secondary text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                                Proyectos
                            </h1>

                            {/* Para pantallas pequeñas y medianas */}
                            <h1 className="bg-secondary text-white px-4 py-1 rounded w-75 text-center d-lg-none">
                                Proyectos
                            </h1>
                        </div>

                        <div className="mt-5 d-flex justify-content-center overflow-auto" style={{ maxHeight: '70vh', scrollbarColor: '#6c757d #292e33' }}>
                            <div className="w-75">
                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={libreMercado} width="100" height="120"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={libreMercado} width="100" height="120"/>
                                        </div>

                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>Libre Mercado (Versión 1.0)</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            Este proyecto es un clon funcional de la plataforma de comercio electrónico MercadoLibre creado utilizando
                                                            el stack PERN, entre las características implementadas se incluyen: creación de cuenta e 
                                                            inicio de sesión, búsqueda y navegación de productos, selección de método de entrega, pago con 
                                                            Stripe y cierre de sesión.<br></br>
                                                            Este proyecto es la primera versión y sigue en constante mejora. A futuro, planeo agregar más 
                                                            funcionalidades y mejoras como: validaciones, mis compras, favoritos, etc.
                                                        </span>
                                                        <span className="small">
                                                            Frontend
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                        </span>
                                                        <span className="small">
                                                            Backend
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                        </span>
                                                        <span className="small">
                                                            Base de Datos
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="small">
                                                            Autenticación de usuarios
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Firebase Authentication</span>
                                                        </span>
                                                        <span className="small">
                                                            Pagos
                                                        </span>
                                                        <span className="d-flex flex-wrap mb-4">
                                                            <span className="bg-secondary rounded px-2 mb-2 small">Stripe</span>
                                                        </span>
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="me-4 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/LibreMercado_StackPERN/tree/production"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/LibreMercado_StackPERN/tree/production", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link>
                                                            <Link className="me-4 small text-white"
                                                                  to="#" 
                                                                  title="https://libre-mercado-stack-pern.vercel.app"
                                                                  onClick={() => window.open("https://libre-mercado-stack-pern.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://libre-mercado-stack-pern.vercel.app"
                                                                  onClick={() => window.open("https://libre-mercado-stack-pern.vercel.app", "_blank")}
                                                            >
                                                                Video demostrativo
                                                            </Link>
                                                        </span>

                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>

                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={emedicine} width="140" height="120"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={emedicine} width="140" height="120"/>
                                        </div>
                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>E-Medicine - Plataforma para Gestión de Citas Virtuales</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            ( Realizado como parte de un proyecto en NoCountry ) <br></br>
                                                            Este proyecto consiste en una plataforma de telemedicina que permite la interacción entre médicos y 
                                                            pacientes de manera remota y eficiente, entre las características implementadas se incluyen: registro de 
                                                            médicos estableciendo su disponibilidad horaria, registro de pacientes, citas virtuales, gestión de citas, realizar pagos con la 
                                                            plataforma Stripe.<br></br>El proyecto no está desplegado en producción en este momento, pero está disponible en GitHub.
                                                        </span>
                                                        <span className="small">
                                                            Frontend
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Tailwind</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Next</span>
                                                        </span>
                                                        <span className="small">
                                                            Backend
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                        </span>
                                                        <span className="small">
                                                            Base de datos
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Mongoose</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">MongoDB</span>
                                                        </span>
                                                        <span className="small">
                                                            Pagos
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 mb-2 small">Stripe</span>
                                                        </span>
                                                        <span className="small">
                                                            Metodología de trabajo
                                                        </span>
                                                        <span className="d-flex flex-wrap mb-4">
                                                            <span className="bg-secondary rounded px-2 mb-2 small">Scrum</span>
                                                        </span>
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/No-Country-simulation/c19-68-t-node-react"
                                                                  onClick={() => window.open("https://github.com/No-Country-simulation/c19-68-t-node-react", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>

                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={booked} width="140" height="120"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={booked} width="140" height="120"/>
                                        </div>
                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>Booked - Plataforma de Alquiler de Alojamiento</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            ( Realizado como parte de un proyecto en NoCountry ) <br></br>
                                                            Este proyecto permitir la interacción entre anfitriones y huéspedes de manera eficiente, entre las 
                                                            características implementadas se incluyen: registro de 
                                                            anfitriones y huéspedes, publicación de propiedades, búsqueda y filtrado de alojamientos, 
                                                            reserva de alojamientos disponibles, realizar pagos con la 
                                                            plataforma Stripe.<br></br>El proyecto no está desplegado en producción en este momento, pero está disponible en GitHub.
                                                        </span>
                                                        <span className="small">
                                                            Frontend
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Tailwind</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Next</span>
                                                        </span>
                                                        <span className="small">
                                                            Backend
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">NestJS</span>
                                                        </span>
                                                        <span className="small">
                                                            Base de datos
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Mongoose</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">MongoDB</span>
                                                        </span>
                                                        <span className="small">
                                                            Pagos
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 mb-2 small">Stripe</span>
                                                        </span>
                                                        <span className="small">
                                                            Metodología de trabajo
                                                        </span>
                                                        <span className="d-flex flex-wrap mb-4">
                                                            <span className="bg-secondary rounded px-2 mb-2 small">Scrum</span>
                                                        </span>
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/No-Country-simulation/s18-24-t-node-react"
                                                                  onClick={() => window.open("https://github.com/No-Country-simulation/s18-24-t-node-react", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>

                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={dogs} width="140" height="120"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={dogs} width="140" height="120"/>
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
                                                            Backend. Se pueden realizar: búsquedas, ordenamientos y filtros, ver detalle, realizar registro.
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
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI-Dogs-Henry/tree/production"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI-Dogs-Henry/tree/production", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://pidogshenryfrontend.vercel.app"
                                                                  onClick={() => window.open("https://pidogshenryfrontend.vercel.app", "_blank")}
                                                            >
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
                                                        <span className="d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI_Dogs_2.0/tree/production"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI_Dogs_2.0/tree/production", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://pidogs2-0.vercel.app"
                                                                  onClick={() => window.open("https://pidogs2-0.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>

                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={portafolio} width="140" height="50"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={portafolio} width="140" height="50"/>
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