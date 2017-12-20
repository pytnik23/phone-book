export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('contacts');
        if (serializedState === null) {
            return undefined;
        }
        return { contacts: JSON.parse(serializedState) };
    } catch (err) {
        return undefined;
    }
};

export const saveState = ({ contacts }) => {
    try {
        const serializedState = JSON.stringify(contacts);
        localStorage.setItem('contacts', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
}
