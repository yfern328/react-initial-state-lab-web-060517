import React from 'react';
import PropTypes from 'prop-types';

class Bomb extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    return(
      <div className="bomb">
        {this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
      </div>
    );
  }
};

Bomb.propTypes = {
  initialCount: PropTypes.number
}

export default Bomb;
