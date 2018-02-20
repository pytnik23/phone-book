import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Segment, Button, Form } from 'semantic-ui-react';

import { addContact } from '../actions';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        isFavorite: false,
        nameError: false,
        emailError: false,
    };

    handleChange = (e, { name, value, type, checked }) => {
        const newValue = (type === 'checkbox') ? checked : value;

        this.setState({ [name]: newValue });
    };

    handleSubmit = (e) => {
        const { name, email, isFavorite } = this.state;

        if (name.length < 2) {
            this.setState({ nameError: true });
            return;
        } else {
            this.setState({ nameError: false });
        }

        if (!this.validateEmail(email)) {
            this.setState({ emailError: true });
            return;
        } else {
            this.setState({ emailError: false });
        }

        this.props.addContact({ name, email, isFavorite });

        this.resetForm();
    };

    validateEmail = email => {
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    resetForm = () => {
        this.setState({
            email: '',
            name: '',
            isFavorite: false,
        });
    };

    render() {
        const {
            name,
            email,
            isFavorite,
            nameError,
            emailError,
        } = this.state;
        return (
            <Segment className="contact-form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Name'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            error={nameError}

                        />
                        <Form.Input
                            label='Email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            error={emailError}
                        />
                    </Form.Group>
                    <Form.Checkbox
                        label="It's a favorite contact"
                        name='isFavorite'
                        checked={isFavorite}
                        onChange={this.handleChange}
                    />
                    <Button
                        type='submit'
                        color='orange'
                    >
                        Add Contact
                    </Button>
                </Form>
            </Segment>
        );
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default connect(undefined, { addContact })(ContactForm);
