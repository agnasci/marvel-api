const INITIAL_STATE = {
  characterList: [],
}

function characterStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characterList: action.payload,
      }

    case 'GET_RESULT':
      return {
        ...state,
        characterList: action.payload,
      }
    default:
      return state
  }
}

export default characterStore
