import './LandingPage.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <body className="body" >
      <div className="main">
        <h1>Welcome, We're Glad You're Here!</h1>
      </div>
      <div className="buttonmain">
        <Button size='large' variant="outlined" component={Link} to ="/createPost">I'm looking for help</Button>
        <Button size='large' variant="outlined" component={Link} to ="/posts">I'm looking to help</Button>
      </div>
    </body>
  );
};

export default LandingPage;
