import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/searchBar/SearchBar';
import ListCourses from '../../components/listCourses/ListCourses';
import AddIcon from '@material-ui/icons/Add';
import './home.scss';

function Home(props) {

  const { userInfo } = props;
  const cursos = [{ nombre: 'React', plazas: '12', duracion: '24', fecha: '22/09/2020' }, { nombre: 'React', plazas: '12', duracion: '24', fecha: '22/09/2020' }];

  return (
    <div className="home">

      <div className="searchdiv"><SearchBar /></div>
      {userInfo.rol === 'admin' && (
        <div className="grid-container">
          <div className="boxAdd">
            <div class="buttonDiv">
              <button className="buttonAdd">
                <div class="buttonText">
                  Añadir curso
                  <AddIcon className="icon"></AddIcon>
                </div>
              </button>
            </div>
          </div>
        </div>)}
      <div classname="listdiv">{cursos.map((item, i) => (
        <ListCourses key={i} elements={item} />
      ))}
      </div>

    </div>
  );

}

export default connect(
  store => ({
    userInfo: store.login.userInfo
  }),
  null
)(Home);
