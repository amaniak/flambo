import api                      from '@flambo/api-client'
import { fetchItemIfNeeded }    from '../../../core/actions/actionsHelpers'
import { apiBaseUrl as apiUrl } from '../../../core/api'


export const FETCH_GROUP_REQUEST = 'FETCH_GROUP_REQUEST'
export const FETCH_GROUP_SUCCESS = 'FETCH_GROUP_SUCCESS'
export const FETCH_GROUP_FAILURE = 'FETCH_GROUP_FAILURE'
export const INVALIDATE_GROUP    = 'INVALIDATE_GROUP'

export const fetchGroup = id => (dispatch, getState) => {
    dispatch({ type: FETCH_GROUP_REQUEST, id })

    const { auth: { token } } = getState()

    return api.groups.get(id, { apiUrl, token })
        .then(data => {
            dispatch({ type: FETCH_GROUP_SUCCESS, id, data })
        })
        .catch(error => {
            dispatch({ type: FETCH_GROUP_FAILURE, id, error })
        })
}

export const fetchGroupIfNeeded = fetchItemIfNeeded('groups', fetchGroup)

export const invalidateGroup = id => ({ type: INVALIDATE_GROUP, id })
