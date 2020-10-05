import { fetch } from '../../server';

export const FIND_COURSES_REQUEST = 'FIND_COURSES_REQUEST';
export const FIND_COURSES_RESPONSE = 'FIND_COURSES_RESPONSE';

export const findCourses = () => {
  return dispatch => {
    dispatch({
      type: FIND_COURSES_REQUEST
    });

    fetch('/courses')
      .then(response => response.json())
      .then(courses => {
        dispatch({
          type: FIND_COURSES_RESPONSE,
          courses
        });
      });
  };
};
