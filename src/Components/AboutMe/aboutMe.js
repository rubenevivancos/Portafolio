import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';
import curriculumPDF from '../../Documents/cvRubenVivanco.pdf';
import gitHub from '../../Images/gitHub.png';
import linkedin from '../../Images/linkedin.png';
import mail from '../../Images/mail.png';


export default function AboutMe() {

  const gitHubURL = 'https://github.com/rubenevivancos';
  const linkedinURL = 'https://www.linkedin.com/in/rubenvivancosalazar';
  const email = 'rernestovsalazar@hotmail.com';

  const descargarCurriculum = () => {
      // Crear un enlace temporal para descargar el PDF
      const link = document.createElement('a');
      link.href = curriculumPDF; // Establecer la ruta del archivo PDF
      link.download = 'rubenVivancoCV.pdf'; // Establecer el nombre de descarga del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
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
            <div className="d-flex justify-content-end">
              {/* Para pantallas grandes */}
              <h1 className="bg-primary text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                Sobre mí
              </h1>

              {/* Para pantallas pequeñas y medianas */}
              <h1 className="bg-primary text-white px-4 py-1 rounded w-75 text-center d-lg-none">
                Sobre mí
              </h1>
            </div>

            <div className="d-flex flex-column justify-content-center text-white px-5 py-5 text-justify">
              <p className="w-100 w-md-75 mb-5">
              Hola, soy Rubén Vivanco, un <span className="bg-primary rounded px-2">desarrollador web full-stack</span> con una sólida base en 
              tecnologías modernas como Node.js, React, Express, Mongoose y Sequelize.
              Durante mi carrera, he trabajado en varios proyectos utilizando tanto bases de datos SQL como NoSQL.<br></br>Mi enfoque está en crear aplicaciones 
              escalables, bien estructuradas y de alto rendimiento, siguiendo principios sólidos de programación como SOLID.<br></br>
              Disfruto enfrentándome a desafíos técnicos, ya sea resolviendo bugs complejos o mejorando la arquitectura de un sistema para hacerlo 
              más eficiente.
              </p>
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5 flex-wrap">
                <Link onClick={descargarCurriculum} className="text-decoration-none text-white me-lg-4 mb-2 mb-lg-0">
                  Descargar curriculum<BsDownload className="text-warning fs-4 ms-2" />
                </Link>

                <Link
                  className="ms-lg-4 me-lg-4 mb-2 mb-lg-0"
                  to="#"
                  title={gitHubURL}
                  onClick={() => window.open(gitHubURL, "_blank")}
                >
                  <Image src={gitHub} className="rounded" width="32" height="32" />
                </Link>

                <Link
                  className="ms-lg-4 me-lg-4 mb-2 mb-lg-0"
                  to="#"
                  title={linkedinURL}
                  onClick={() => window.open(linkedinURL, "_blank")}
                >
                  <Image src={linkedin} className="rounded" width="32" height="32" />
                </Link>

                <Link to={`mailto:${email}`} title={email} className="ms-lg-4 mb-2 mb-lg-0">
                  <Image src={mail} className="rounded" width="32" height="32" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
