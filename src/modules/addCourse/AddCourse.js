import React from 'react';
import './addcourse.scss';
import { connect } from 'react-redux';

function AddCourse(props) {
  const { userInfo } = props;

  return (
    <div className="addcourse">
      <form>
        <div className="item-list">
          <span className="add_course_span">Nombre: </span>
          <input className="add_course_input"></input>
          <span className="add_course_span">Cupo de plazas: </span>
          <input className="add_course_input"></input>
          <span className="add_course_span">Fecha de inicio: </span>
          <input className="add_course_input"></input>
          <span className="add_course_span">Fecha de fin: </span>
          <input className="add_course_input"></input>
          <span className="add_course_span">Horas: </span>
          <input className="add_course_input"></input>
          <span className="add_course_span">Responsable: </span>
          <input className="add_course_input"></input>
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