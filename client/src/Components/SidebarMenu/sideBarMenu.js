import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function SidebarMenu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    navigate('/aboutMe');
  };

  return (
    <Container className="d-flex flex-column gap-2">
      <Button
        variant={selectedItem === 'aboutMe' ? "primary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('aboutMe')}
      >
        Sobre mí
      </Button>
      <Button
        variant={selectedItem === 'projects' ? "secondary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('projects')}
      >
        Proyectos
      </Button>
      <Button
        variant={selectedItem === 'experience' ? "success" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('experience')}
      >
        Experiencia
      </Button>
      <Button
        variant={selectedItem === 'skills' ? "danger" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('skills')}
      >
        Habilidades
      </Button>
      <Button
        variant={selectedItem === 'resume' ? "warning" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('resume')}
      >
        Curriculum
      </Button>
      <Button
        variant={selectedItem === 'contact' ? "info" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('contact')}
      >
        Contacto
      </Button>
    </Container>
  );
}

export default SidebarMenu;
