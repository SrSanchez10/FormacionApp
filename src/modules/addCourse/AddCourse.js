import React from 'react';
import './addcourse.scss';
import { connect } from 'react-redux';

function AddCourse(props) {
  const { userInfo } = props;

  return (
    <div className="addcourse">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}>
        <div className="item-list-add-course">
          <span className="add_course_span">Nombre: </span>
          <input className="add_course_input" placeholder="Por Ejemplo: Comenzando con React"></input>
          <span className="add_course_span">Descripción: </span>
          <input className="add_course_input" placeholder="Por Ejemplo: En este curso, vamos a realizar..."></input>
          <span className="add_course_span">Índice de contenidos: </span>
          <input className="add_course_input" placeholder="Por Ejemplo: Hello world en React"></input>
          <span className="add_course_span">Tags(temáticas): </span>
          <input className="add_course_input" placeholder="Por Ejemplo: #react"></input>
          <span className="add_course_span">Cupo de plazas (máximo): </span>
          <input className="add_course_input " placeholder="Por Ejemplo: 55"></input>
          <span className="add_course_span">Cupo de plazas (mínimo): </span>
          <input className="add_course_input " placeholder="Por Ejemplo: 25"></input>
          <span className="add_course_span">Objetivos del curso: </span>
          <input className="add_course_input " placeholder="Por Ejemplo: Adquirir conocimientos básicos de React"></input>
          <span className="add_course_span">Formador: </span>
          <input className="add_course_input " placeholder="Por Ejemplo: Jose"></input>
          <span className="add_course_span" >Fecha de inicio: </span>
          <input className="add_course_input" placeholder="Por Ejemplo: 05/10/2020"></input>
          <span className="add_course_span">Fecha de fin: </span>
          <input className="add_course_input" placeholder="Por Ejemplo: 08/10/2020"></input>
          <span className="add_course_span">Horario: </span>
          <input className="add_course_input"></input>
          <span className="add_course_span">Horas: </span>
          <input className="add_course_input" placeholder="Por Ejemplo: 24"></input>
          <span className="add_course_span">Oficina a la pertenece: </span>
          <input className="add_course_input " placeholder="Por Ejemplo: A Coruña"></input>
          <label className="add_course_label" for="tipo_formacion">Tipo de formación:</label>
          <select className="add_course_select" name="tipo_formacion">
            <option value="presencial">Presencial</option>
            <option value="teleformacion">Teleformación</option>
            <option value="mixta">Mixta</option>
          </select>

          <label className="add_course_label" for="formacion">Elija formación:</label>

          <select className="add_course_select" name="formacion">
            <option value="especifica">Específica</option>
            <option value="estrategica">Estratégica</option>
          </select>

          <h1>{userInfo.rol}</h1>

          <button
            className="add_course_button"
            onClick={() => (window.location = '/')}
          >
            Añadir
          </button>
        </div>

      </form>
    </div>
  );

}

export default connect(
  store => ({
    userInfo: store.login.userInfo
  }),
  null
)(AddCourse);