import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function SidebarMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="sidebar-menu d-flex flex-column gap-2">
      <Button
        variant={selectedItem === 'sobre-mi' ? "secondary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('sobre-mi')}
      >
        Sobre mí
      </Button>
      <Button
        variant={selectedItem === 'mis-proyectos' ? "secondary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('mis-proyectos')}
      >
        Mis proyectos
      </Button>
      <Button
        variant={selectedItem === 'mis-estudios' ? "secondary" : "outline-secondary"}
        size="sm"
        onClick={() => handleItemClick('mis-estudios')}
      >
        Mis estudios
      </Button>
    </div>
  );
}

export default SidebarMenu;
