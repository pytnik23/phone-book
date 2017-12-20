import React, { Component } from 'react';

import { Container, Image } from 'semantic-ui-react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import logo from '../logo.svg';

class App extends Component {
  render() {
    return (
      <Container text>
        <Image
            className="logo"
            src={logo}
            size="tiny"
            alt="logo"
            centered
        />
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default App;
