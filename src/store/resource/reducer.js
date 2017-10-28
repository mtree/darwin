import get from 'lodash/get'
import { initialState, getResourceState, getList } from './selectors'

import { RESOURCE_CREATE_SUCCESS } from './actions'

export default (state = initialState, { type, payload, meta }) => {
  const resource = get(meta, 'resource')

  if (!resource) {
    return state
  }

  switch (type) {
    case RESOURCE_CREATE_SUCCESS:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          list: [payload, ...getList(state, resource)],
        },
      }

    default:
      return state
  }
}
