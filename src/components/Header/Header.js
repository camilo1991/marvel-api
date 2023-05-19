import './Header.scss';
import {Menu} from 'semantic-ui-react';
import { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom'; 

export default function Header() {
    const currentPath = useLocation();
    console.log(currentPath);
    const finalCurrentPath = currentPath.pathname.replace("/","");
    const [activeItem, setActiveItem] = useState("");
    const history = useNavigate();

    const itemclic = (e,{name}) => {
       setActiveItem(name);
       history(name, {replace:true});
    };

 return (
    <div className="header-menu">
        <Menu secondary>
            <Menu.Item name="inicio" active={activeItem==="inicio"} onClick={itemclic} />
            <Menu.Item name="series" active={activeItem==="series"} onClick={itemclic} />
            <Menu.Item name="comics" active={activeItem==="comics"} onClick={itemclic} />
        </Menu>
    </div>

 );   
}
