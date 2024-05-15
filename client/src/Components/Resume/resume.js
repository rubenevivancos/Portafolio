import { Container, Row, Col } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Home() {

    const descargarCurriculum = () => {
        // Simula el contenido del currículum (en este caso, un texto de ejemplo)
        const curriculumContenido = "Este es mi currículum. Contenido de ejemplo.";

        // Crea un nuevo Blob con el contenido del currículum
        const blob = new Blob([curriculumContenido], { type: 'application/pdf' });

        // Crea una URL para el Blob
        const url = URL.createObjectURL(blob);

        // Crea un enlace invisible
        const link = document.createElement('a');
        link.href = url;
        link.download = 'mi_curriculum.pdf'; // Nombre del archivo a descargar
        link.style.display = 'none';

        // Agrega el enlace al cuerpo del documento
        document.body.appendChild(link);

        // Simula un clic en el enlace para iniciar la descarga
        link.click();

        // Limpia el URL creado después de que se haya iniciado la descarga
        URL.revokeObjectURL(url);

        // Remueve el enlace del cuerpo del documento
        document.body.removeChild(link);
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
                                <span className="me-3">Descargar curriculum actualizado</span>
                                <Link to="/download" onClick={descargarCurriculum} download="mi_curriculum.pdf" className="text-decoration-none text-white">
                                    <BsDownload />
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}