import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      console.log(state.users);
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}