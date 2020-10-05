import userInfo from './data/user_info.json';
import adminInfo from './data/user_info_admin.json';
import courses from './data/courses.json';

export const serverMockConfig = {
  endpoints: {
    '/login': {
      POST: credentials => {
        if (['pepe', 'jose'].indexOf(credentials.login) === -1) {
          return {
            error: 'USER_NOT_FOUND'
          };
        }

        return 'pepe' === credentials.login ? adminInfo : userInfo;
      }
    },
    '/courses': {
      GET: () => {
        return courses;
      }
    }
  }
};
