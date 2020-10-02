import React from 'react';
import './listcourses.scss';

const ListCourses = props => {
  const { elements } = props;

  return (
    <div className="grid-container">

      <div className="box">
        <h3 className="curso">Curso</h3>
        <div className="item-list">

          <label className="label">Nombre </label>
          <label className="output">{elements.nombre} </label>

          <label className="label">Plazas </label>
          <label className="output">{elements.plazas}</label>

          <label className="label">Duración </label>
          <label className="output">{elements.duracion}</label>

          <label className="label">Fecha de Inicio </label>
          <label className="output">{elements.fecha}</label>

          <button className="button-list">Mas información</button>
          <button className="button-list">Inscribirme</button>
        </div>
      </div>
    </div >

  );
};

export default ListCourses;