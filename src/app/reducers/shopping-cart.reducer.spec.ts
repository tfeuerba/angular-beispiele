import { shoppingCartReducer, initialState } from './shopping-cart.reducer';

describe('ShoppingCart Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = shoppingCartReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
