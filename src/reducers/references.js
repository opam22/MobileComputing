import {
  ADD_REFERENCES
} from '../constants/ActionType'

const initialState = []

export const references = (state = initialState,action) => {

  switch(action.type)
  {
    case ADD_REFERENCES:
      return [
        ...state,
          action.payload
      ]
    case "ALL_REFERENCES" :
    return action.payload

    case "GET_REFERENCES_BY_CLASS" :
    return state.filter(references => references.class == action.payload )

    case "DELETE_REFERENCES" :
    return state.filter(references => references.id !== action.payload )

    default :
    return state
  }
}
