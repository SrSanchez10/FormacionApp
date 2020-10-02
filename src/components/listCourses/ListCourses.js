import React from 'react';
import './listcourses.scss';

const ListCourses = props => {
  const { elements } = props;

  return (
    <div id="lista-cursos">
      <div className="grid-container">
        <div className="item1">
          <label className="boldText">Nombre </label>
          <label className="borderText">{elements.nombre} </label>
        </div>
        <br></br>
        <div className="item2"><label className="boldText">Plazas </label>
          <label className="borderText">{elements.plazas}</label>
        </div>
        <br></br>
        <div className="item3">
          <label className="boldText">Duración </label>
          <label className="borderText">{elements.duracion}</label>
        </div>
        <br></br>
        <div className="item4">
          <label className="boldText">Fecha de Inicio </label>
          <label className="borderText">{elements.fecha}</label>
        </div>
        <br></br>
        <div className="item5"><button className="button">Mas información</button></div>
        <br></br>
        <div className="item6"><button className="button">Inscribirme</button></div>
      </div>
    </div>

  );
};

export default ListCourses;