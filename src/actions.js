export const SET_FILTER = 'SET_FILTER';

export const setFilter = (state) => {
    return {
        type: SET_FILTER,
        payload: state,
    };
};