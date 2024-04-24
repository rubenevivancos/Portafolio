import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function SidebarMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <Container className="d-flex flex-column gap-2">
      <Button
        variant={selectedItem === 'sobreMi' ? "primary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('sobreMi')}
      >
        Sobre mí
      </Button>
      <Button
        variant={selectedItem === 'proyectos' ? "secondary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('proyectos')}
      >
        Proyectos
      </Button>
      <Button
        variant={selectedItem === 'experiencia' ? "success" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('experiencia')}
      >
        Experiencia
      </Button>
      <Button
        variant={selectedItem === 'habilidades' ? "danger" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('habilidades')}
      >
        Habilidades
      </Button>
      <Button
        variant={selectedItem === 'cv' ? "warning" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('cv')}
      >
        Curriculum
      </Button>
      <Button
        variant={selectedItem === 'contacto' ? "info" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('contacto')}
      >
        Contacto
      </Button>
    </Container>
  );
}

export default SidebarMenu;
