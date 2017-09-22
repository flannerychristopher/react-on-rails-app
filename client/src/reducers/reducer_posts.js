import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      console.log(state);
      return _.mapKeys(action.payload, 'id');
    // case 'FETCH_USER':
    //   if (!action.payload) return state;
    //   return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}