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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles({
  list: {
    width: 300,
  }
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
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="top">
        <span className="header__icon"></span>
        <span className="header__name">Formación</span>
      </List>
      <Divider />
      <List>
        <div className="item">
          <span className="icon">
            <CreateIcon></CreateIcon>
          </span>
          <a href="/">Listado cursos</a>
        </div>
        <div className="item">
          <span className="icon">
            <CreateIcon></CreateIcon>
          </span>
            Inscripciones
        </div>
      </List>
      <List>
        <div className="item">Visualizar cursos abiertos</div>
        <div className="item">Recomendarme cursos para mi perfil</div>
      </List>
      <div className="bottom item">
        <span className="icon">
          <ExitToAppIcon></ExitToAppIcon>
        </span>
        <span>Cerrar sesión</span></div>
    </div>
  );

  return (
    <div className="bar">
      {userInfo && (
        <Button className="" onClick={toggleDrawer('left', true)}><MenuIcon /></Button>)}
      <div>
        <div className="header header_center">
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

