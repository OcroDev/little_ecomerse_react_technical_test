export const cartInitialState = [];

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        //*forma 1: seria usar structuredClone (mas legible)
        /*const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;*/
        //*forma 2: usando map (más facil)
        /*const newState = state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return newState;*/
        //*forma 3: usando spread operator ⚡
        const newState = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1,
          },
          ...state.slice(productInCartIndex + 1),
        ];
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case CART_ACTIONS.CLEAR_CART: {
      return cartInitialState;
    }
  }
};
