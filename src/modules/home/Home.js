import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/searchBar/SearchBar';
import ListCourses from '../../components/listCourses/ListCourses';
import AddIcon from '@material-ui/icons/Add';
import { findCourses } from './actions';
import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: props
    };
  }


  componentDidMount() {
    // Cargar la info del servidor
    this.props.findCourses();
  }

  render() {
    return (
      <div className="home">

        <div className="searchdiv"><SearchBar /></div>
        <div className="listdiv">
          {this.props.userInfo.rol === 'admin' && (
            <div className="grid-container">
              <div className="boxAdd">
                <div class="buttonDiv">
                  <button className="buttonAdd" onClick={() => (window.location = '/add-course')}>
                    <div class="buttonText">
                      Añadir curso
                      <AddIcon className="icon"></AddIcon>
                    </div>
                  </button>
                </div>
              </div>
            </div>)}
          {this.props.courses.map((item, i) => (
            <ListCourses key={i} elements={item} />
          ))}
        </div>

      </div>
    );
  }

}

export default connect(
  store => ({
    userInfo: store.login.userInfo,
    courses: store.home.courses
  }),
  dispatch => ({
    findCourses: () => dispatch(findCourses()),
  })
)(Home);
