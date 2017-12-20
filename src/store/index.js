import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

let currentValue;
const handleChange = () => {
    let previousValue = currentValue;
    currentValue = store.getState().contacts;

    if (previousValue !== currentValue) {
        saveState({
            contacts: currentValue
        });
    }
};

store.subscribe(handleChange);

export default store;
