import React from 'react';
import './listcourses.scss';

const ListCourses = props => {
  const { elements } = props;

  return (
    <div className="grid-container">

      <div className="box">
        <h3 className="curso">Curso</h3>
        <div className="texto">
          <label className="boldText">Nombre </label>
          <label className="borderText">{elements.nombre} </label>
        </div>

        <div className="texto">
          <label className="boldText">Plazas </label>
          <label className="borderText">{elements.plazas}</label>
        </div>

        <div className="texto">
          <label className="boldText">Duración </label>
          <label className="borderText">{elements.duracion}</label>
        </div>

        <div className="texto">
          <label className="boldText">Fecha de Inicio </label>
          <label className="borderText">{elements.fecha}</label>
        </div>

        <button className="button2">Mas información</button>

        <button className="button2">Inscribirme</button>
      </div>
    </div >

  );
};

export default ListCourses;