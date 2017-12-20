const currentView = (state = 'LIST', action) => {
    switch (action.type) {
        case 'SET_VIEW_MODE':
            return action.view;
        default:
            return state;
    }
};

export default currentView;
