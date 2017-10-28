import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* createResource(api, { data }, { resource, thunk }) {
  try {
    // https://github.com/diegohaz/arc/wiki/API-service
    const detail = yield call([api, api.post], `/${resource}`, data)
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    yield put(actions.resourceCreateSuccess(resource, detail, { data }, thunk))
  } catch (e) {
    yield put(actions.resourceCreateFailure(resource, e, { data }, thunk))
  }
}

export function* watchResourceCreateRequest(api, { payload, meta }) {
  yield call(createResource, api, payload, meta)
}

export default function* ({ api }) {
  yield takeEvery(actions.RESOURCE_CREATE_REQUEST, watchResourceCreateRequest, api)
}
