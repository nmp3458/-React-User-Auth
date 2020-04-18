import React, { Component } from 'react';

import { connect } from 'react-redux';

class BurgerControl extends Component {
  render() {
    return (
      <div className='BuildControls'>
        <p>
          Current Price: <strong>{4}</strong>
        </p>
        {this.props.controls.map((item) => {
          return (
            <div className='BuildControl' key={item.type}>
              <div className='Label'>{item.label}</div>
              <button
                className='Less'
                onClick={() => this.props.onRemoveIngredient(item.type)}
              >
                Less
              </button>
              <button
                className='More'
                onClick={() => this.props.onAddIngredient(item.type)}
              >
                More
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredient: (name) =>
      dispatch({ type: 'addIngredient', ingredient: name }),
    onRemoveIngredient: (name) =>
      dispatch({ type: 'removeIngredient', ingredient: name }),
  };
};

export default connect(null, mapDispatchToProps)(BurgerControl);
