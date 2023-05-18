import './Header.scss';
import {Menu} from 'semantic-ui-react';

export default function Header() {
 return (
    <div className="header-menu">
        <Menu secondary>
            <Menu.Item name="inicio" onClick={()=>console.log("haciendo clic en el menu")} />
            <Menu.Item name="series" onClick={()=>console.log("haciendo clic en series")} />
            <Menu.Item name="comics" onClick={()=>console.log("haciendo clic en comics")} />
        </Menu>
    </div>

 );   
}
