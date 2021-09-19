import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('lg')]: {
    mainContainer: {
      direction: 'column-reverse'
    }
  }

}));