// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = (resource, data) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    thunk: `${resource}Create`,
  },
})

export const resourceCreateSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource,
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
    entities: resource,
  },
})

export const resourceCreateFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    thunk,
  },
})
