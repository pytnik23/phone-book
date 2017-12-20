const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [{
                id: Date.now(),
                name: action.name,
                email: action.email,
                isFavorite: action.isFavorite,
            }, ...state];
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.id !== action.id);
        case 'TOGGLE_FAVORITE_STATUS':
            return state.map(contact => {
                if (contact.id === action.id) {
                    contact.isFavorite = !contact.isFavorite;
                }
                return contact;
            });
        default:
            return state;
    }
}

export default contacts;
