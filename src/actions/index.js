import * as types from '../constants/ActionType'

export const allReference = (references) => {
  return {
    type: 'ALL_REFERENCES',
    payload : references
  }
}

export const fetchReference = ( classReference = 0 ) => {

  let url = `http://128.199.207.199/api/references/get/${classReference}`;

  return (dispatch) => {
        fetch(url)
         .then(res => res.json())
         .then(references => dispatch(allReference(references)));
  }
}
