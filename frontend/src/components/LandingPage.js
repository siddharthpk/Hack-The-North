import './LandingPage.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className="main">
        <h1>Welcome, We're Glad You're Here!</h1>
      </div>
      <div className="buttonmain">
        <Button className="Button btn-nav" component={Link} to ="/createPost">I'm looking for help</Button>
        <Button className="Button btn-nav" component={Link} to ="/posts">I'm looking to help</Button>
      </div>
    </div>
  );
};

export default LandingPage;
