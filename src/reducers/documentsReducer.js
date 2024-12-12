const initialState = {
  list: [],
};

export function documentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DOCUMENTS':
      return {
        ...state,
        list: action.payload,
      };
    case 'MOVE_DOCUMENT':
      return {
        ...state,
        list: state.list.map((doc) => (doc.id === action.payload.id
          ? { ...doc, status: action.payload.status }
          : doc)),
      };
    default:
      return state;
  }
}

export const setDocuments = (payload) => ({
  type: 'SET_DOCUMENTS',
  payload,
});

export const fetchDocuments = () => ({
  type: 'FETCH_DOCUMENTS',
});

export const moveDocument = (payload) => ({
  type: 'MOVE_DOCUMENT',
  payload,
});
