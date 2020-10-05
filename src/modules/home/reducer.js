import { FIND_COURSES_RESPONSE } from './actions';

const initialState = {
  loading: false,
  courses: [],
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case FIND_COURSES_RESPONSE:
      return {
        ...state,
        courses: action.courses
      };
    default:
      return state;
  }
};

export default home;
