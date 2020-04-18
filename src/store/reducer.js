const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  controls: [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ],
};

const BurgerReducer = (state = initialState, action) => {
  if (action.type === 'addIngredient') {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] + 1,
      },
    };
  }
  if (action.type === 'removeIngredient') {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
      },
    };
  }
  return state;
};

export default BurgerReducer;
