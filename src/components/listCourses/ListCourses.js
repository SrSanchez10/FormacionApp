import React from 'react';

const ListCourses = props => {
  const { elements } = props;

  return (
    <div id="lista-cursos">
      <label className="boldText">Nombre </label>
      <label className="borderText">{elements.nombre}</label>
      <br></br>
      <label className="boldText">Plazas </label>
      <label className="borderText">{elements.plazas}</label>
      <br></br>
      <label className="boldText">Duración </label>
      <label className="borderText">{elements.duracion}</label>
      <br></br>
      <label className="boldText">Fecha de Inicio </label>
      <label className="borderText">{elements.fecha}</label>
      <br></br>
      <button className="button">Mas información</button>
      <br></br>
      <button className="button">Inscribirme</button>

    </div>

  );
};

export default ListCourses;