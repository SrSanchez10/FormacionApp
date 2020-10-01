import React from 'react';
import { connect } from 'react-redux';
import './header.scss';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Header(props) {
  const { userInfo } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <span className="header__icon item"></span>
        <span className="header__name item">Formación</span>
      </List>
      <Divider />
      <List>
        <div className="item">Listado cursos</div>
        <div className="item">Inscripciones</div>
      </List>
      <List>
        <div className="item">Visualizar cursos abiertos</div>
        <div className="item">Recomendarme cursos para mi perfil</div>
      </List>
    </div>
  );

  return (
    <div className="bar">
      {userInfo && (
        <Button className="" onClick={toggleDrawer('left', true)}><MenuIcon /></Button>)}
      <div>
        <div className="header">
          <span className="header__icon"></span>
          <span className="header__name">Formación</span>
        </div>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </div>
    </div>
  );
}
export default connect(
  store => ({
    userInfo: store.login.userInfo
  }),
  null
)(Header);

