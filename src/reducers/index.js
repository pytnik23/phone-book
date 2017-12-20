import { combineReducers } from 'redux';

import contacts from './contacts';
import visibilityFilter from './visibilityFilter';
import currentView from './currentView';

export default combineReducers({
    contacts,
    visibilityFilter,
    currentView,
});
