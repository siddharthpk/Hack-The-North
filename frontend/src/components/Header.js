import './Header.css';
//import logo from '../../assets/logo.png';
import Button from './Button';

const Header = (props) => {
    return(
        <header className="header">
            <h1>Refugee Response</h1>
            <Button>Log In</Button>
        </header>
    )
}

export default Header;