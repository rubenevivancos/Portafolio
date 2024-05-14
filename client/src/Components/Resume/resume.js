import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';

import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Home() {

    const descargarCurriculum = () => {
        // Lógica para descargar el currículum aquí
        // Por ejemplo, podrías usar window.open() o fetch() para descargar el archivo
      };

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-warning text-white px-5 py-1 rounded w-50 text-center">
                                Curriculum
                            </h1>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <div className="w-75 text-white ps-5">
                                <span className="me-3">Descargar curriculum actualizado</span><BsDownload />
                            </div>
                            <Button variant="warning" onClick={descargarCurriculum} download="mi_curriculum.pdf">
                                <BsDownload /> Descargar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}