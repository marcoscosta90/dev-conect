import axios from '../utils/axios'

export const GET_NOTIFICATIONS = '@NOTIFICATIONS/GET_NOTIFICATIONS'

const getNotifications = () => {
    return (dispatch) => {
        const notifications = axios.get('/api/notifications');

        dispatch({
            type: GET_NOTIFICATIONS,
            payload: {
                notifications,
            }
        })
    }
}

export { getNotifications };