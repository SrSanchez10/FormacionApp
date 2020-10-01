import React from 'react';
import './home.scss';

/*function Home(props) {
  return (
    <div className="home">
      <div className="home__list">
        Hola mundo
        <div className="home item">Item</div>
      </div>
    </div>
  );
} */

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsVisible: false
    };
  }


  render() {
    return (
      <div className="home">
        <h1> Estas en el Home </h1>
      </div>
    );
  }
}

export default Home;
