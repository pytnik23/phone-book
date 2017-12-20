export const addTransaction = props => {
    return {
        type: 'ADD_CONTACT',
        ...props,
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    };
};

export const toggleFavoriteStatus = id => {
    return {
        type: 'TOGGLE_FAVORITE_STATUS',
        id,
    };
};

export const addContact = contact => {
    return {
        type: 'ADD_CONTACT',
        ...contact,
    };
};

export const removeContact = id => {
    return {
        type: 'REMOVE_CONTACT',
        id,
    };
};

export const setViewMode = view => {
    return {
        type: 'SET_VIEW_MODE',
        view,
    };
};
