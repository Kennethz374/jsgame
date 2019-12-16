import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    // width:"100%",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    // if size is sm, it won't display, otherwise display block
      [theme.breakpoints.up("sm")]:{
        display: "block"
      }
  },
  Toolbar: {
    backgroundColor:"indianRed"
  },
  grow:{
    flexGrow: 2
  },
  Button: {
    MarginLeft: 0,
    position: "relative",
  }

}));

export default useStyles