import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}