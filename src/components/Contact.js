import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Card, Rating, Button } from 'semantic-ui-react';

import { toggleFavoriteStatus, removeContact } from '../actions';

const Contact = ({
    id,
    name,
    email,
    isFavorite,
    toggleFavoriteStatus,
    removeContact,
}) => (
    <Card className="contact" fluid>
        <Card.Content>
            <Rating
                className="rating-icon"
                icon='star'
                size="huge"
                onRate={() => toggleFavoriteStatus(id)}
                defaultRating={+isFavorite}
            />
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Meta>
                {email}
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Button
                as="a"
                href={`mailto:${email}`}
                basic
                color='green'
            >
                Send an Email
            </Button>
            <Button
                className="contact__remove"
                basic
                color='red'
                floated="right"
                icon="trash"
                onClick={() => removeContact(id)}
            />
        </Card.Content>
    </Card>
);

Contact.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    toggleFavoriteStatus: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
};

export default connect(undefined, { toggleFavoriteStatus, removeContact })(Contact);
