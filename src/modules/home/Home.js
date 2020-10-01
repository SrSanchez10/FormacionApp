import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/searchBar/SearchBar';
import ListCourses from '../../components/listCourses/ListCourses';
import './home.scss';

function Home(props) {

  const { userInfo } = props;
  const cursos = [{ nombre: 'React', plazas: '12', duracion: '24', fecha: '22/09/2020' }, { nombre: 'React', plazas: '12', duracion: '24', fecha: '22/09/2020' }];

  return (
    <div className="home">
      <SearchBar />
      {userInfo.rol === 'admin' && (<button className="button">Añadir curso +</button>)}
      {cursos.map((item, i) => (
        <ListCourses key={i} elements={item} />
      ))}

    </div>
  );

}

export default connect(
  store => ({
    userInfo: store.login.userInfo
  }),
  null
)(Home);
