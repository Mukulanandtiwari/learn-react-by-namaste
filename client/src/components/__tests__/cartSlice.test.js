import cartReducer, { addItem, removeItem, clearCart } from '../../utils/cartSlice';

describe('cartSlice reducers', () => {
  const initialState = { items: [] };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addItem', () => {
    const newItem = { id: 1, name: 'Item 1' };
    const previousState = { items: [] };
    const expectedState = { items: [newItem] };

    expect(cartReducer(previousState, addItem(newItem))).toEqual(expectedState);
  });

  it('should handle removeItem', () => {
    const previousState = { items: [{ id: 1, name: 'Item 1' }] };
    const expectedState = { items: [] };

    expect(cartReducer(previousState, removeItem())).toEqual(expectedState);
  });

  it('should handle clearCart', () => {
    const previousState = { items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] };
    const expectedState = { items: [] };

    expect(cartReducer(previousState, clearCart())).toEqual(expectedState);
  });
});
