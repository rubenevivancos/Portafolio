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
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-success text-white px-5 py-1 rounded w-50 text-end">
                                Experiencia
                            </h1>
                        </div>
                        <div className="align-items-center text-white px-5 py-5">
                            <div> {/* Aquí agregamos una clase para espaciar verticalmente */}
                                <p>
                                    PM SERVICES - NKE ASOCIADOS SAC     abr. 2015 - nov. 2018
                                    Programador  Lima-Perú (Presencial)
                                </p>
                            </div>
                            <div> {/* Aquí agregamos una clase para espaciar verticalmente */}
                                <p>
                                    NOVATRONIC     dic. 2013 - ago. 2014
                                    Programador Lima-Perú (Presencial)
                                </p>
                            </div>
                            <div>
                                <p>
                                    ALIGNET     ene. 2008 - jun. 2013
                                    Programador Lima-Perú
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}