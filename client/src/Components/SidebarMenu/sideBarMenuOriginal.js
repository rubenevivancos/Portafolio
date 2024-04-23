import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
//import { Nav } from 'react-bootstrap';


function SidebarMenu() {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  

  return (
    <div className="flex-column">
      <div className="d-block mb-2">
        <Button 
            variant={selectedItem === 'sobre-mi' ? "primary" : "outline-secondary"}
            className="p-0 border-0"
            size="xs"
            onClick={() => handleItemClick('sobre-mi')}>
                Sobre mí
        </Button>
      </div>
      <div className="d-block mb-2">
        <Button 
            variant={selectedItem === 'mis-proyectos' ? "primary" : "outline-secondary"}
            className="p-0 border-0"
            size="xs"
            onClick={() => handleItemClick('mis-proyectos')}>
                Mis proyectos
        </Button>
      </div>
      <div className="d-block mb-2">
        <Button 
            variant={selectedItem === 'mis-estudios' ? "primary" : "outline-secondary"} 
            className="p-0 border-0"
            size="xs"
            onClick={() => handleItemClick('mis-estudios')}>
                Mis estudios
        </Button>
      </div>
    </div>
    /*
    <Nav className="flex-column">
      <Nav.Link href="#sobre-mi">Sobre Mí</Nav.Link>
      <Nav.Link href="#mis-proyectos">Mis Proyectos</Nav.Link>
      <Nav.Link href="#mis-estudios">Mis Estudios</Nav.Link>
    </Nav>
    */
  );
}

export default SidebarMenu;