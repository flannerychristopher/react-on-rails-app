import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      // return action.payload.data;
      return _.mapKeys(action.payload.data, 'id');
    case 'FETCH_USER':
      // return action.payload.data;
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}