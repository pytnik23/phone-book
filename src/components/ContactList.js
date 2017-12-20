import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';

import Contact from './Contact';

const getVisibleContacts = (contacts, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return contacts;
        case 'SHOW_FAVORITES':
            return contacts.filter(c => c.isFavorite);
        default:
            return contacts;
    }
}

const getContactsPerRow = view => {
    switch (view) {
        case 'LIST':
            return undefined;
        case 'GRID':
            return 'two';
        default:
            return undefined;
    }
};

const ContactList = ({
    contacts,
    contactsPerRow,
}) =>  (
    <Card.Group
        itemsPerRow={contactsPerRow}
        stackable
    >
        {contacts.map(contact => (
            <Contact
                key={contact.id}
                {...contact}
            />
        ))}
    </Card.Group>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    contactsPerRow: PropTypes.oneOf(['two', undefined]),
};

const mapStateToProps = state => {
    return {
        contacts: getVisibleContacts(state.contacts, state.visibilityFilter),
        contactsPerRow: getContactsPerRow(state.currentView),
    };
};

export default connect(mapStateToProps)(ContactList);
