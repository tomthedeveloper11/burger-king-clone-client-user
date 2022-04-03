const initialState = {
  items: [],
  itemById: null,
  isLoading: true,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchItems':
      return { ...state, items: action.payload }
    case 'fetchItemById':
      return { ...state, itemById: action.payload }
    case 'setIsLoading':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default reducer
