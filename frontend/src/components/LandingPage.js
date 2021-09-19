import './LandingPage.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <body className="body" >
      <div className="main">
        <h1>Welcome, We're Glad You're Here!</h1>
      </div>
      <div className="main">
        <Button className="button" component={Link} to ="/login">I'm looking to help</Button>
        <Button className="button" component={Link} to ="/login">I'm seeking help</Button>
      </div>
    </body>
  );
};

export default LandingPage;
