import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Home() {

    return(
        <div className="bg-dark" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-primary text-white px-5 py-1 rounded w-50 text-end">
                                Sobre mí
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center text-white px-5 py-5 text-justify">
                            <p className="w-75">
                                Mi nombre es Rubén Vivanco Salazar, soy un Desarrollador Full Stack con sede en Lima-Perú.
                                Tengo más de 5 años de experiencia como desarrollador, principalmente con las tecnologías Java y Oracle.
                                Adquirí nuevos conocimientos en el bootcamp SoyHenry y ahora quiero empezar una nueva etapa, nuevos retos con éstas 
                                nuevas tecnologías trabajando en forma remota.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}