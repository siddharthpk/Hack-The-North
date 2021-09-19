import './Header.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className="header">
            <h1>Refugee Response</h1>
            <button className="btn" component={Link} to ="/login">Login</button>
        </header>
    )
}

export default Header;