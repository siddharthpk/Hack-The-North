import './Header.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className="header">
            <h1>Refugee Response</h1>
            <Button component={Link} to ="/login">Login</Button>
        </header>
    )
}

export default Header;