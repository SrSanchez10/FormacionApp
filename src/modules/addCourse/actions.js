import { fetch } from '../../server';

export const ADD_COURSE_REQUEST = 'ADD_COURSE_REQUEST';
export const ADD_COURSE_RESPONSE = 'ADD_COURSE_RESPONSE';
export const COURSE_INFO = 'COURSE_INFO';

export const course = courses => {
  return dispatch => {
    dispatch({
      type: ADD_COURSE_REQUEST
    });

    fetch('/add-course', {
      method: 'POST',
      body: {
        ...courses
      }
    })
      .then(response => response.json())
      .then(courseInfo => {
        localStorage.setItem(COURSE_INFO, JSON.stringify(courseInfo));
        dispatch({
          type: ADD_COURSE_RESPONSE,
          courseInfo
        });
      });
  };

};