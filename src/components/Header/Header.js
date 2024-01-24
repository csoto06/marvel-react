import { useState } from 'react';
import './Header.scss';
import { Menu } from 'semantic-ui-react';
import { useNavigate , useLocation } from 'react-router-dom';

export default function Header() {

  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const history = useNavigate();

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
    history(name);
  }

  return (
    <div className='header-menu'>
      <Menu secondary>
        <Menu.Item 
          active={activeItem === "inicio"}
          name='inicio' 
          onClick={handleItemClick} 
        />
        
        <Menu.Item 
          active={activeItem === "series"}
          name='series' 
          onClick={handleItemClick} 
        />
        
        <Menu.Item 
          active={activeItem === "comics"}
          name='comics' 
          onClick={handleItemClick} 
        />
      </Menu>

    </div>
  )
}
