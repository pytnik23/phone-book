import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { setVisibilityFilter, setViewMode } from '../actions';

import { Menu, Icon } from 'semantic-ui-react'

class Filter extends Component {
    state = {
        activeItem: 'SHOW_ALL',
        activeView: 'LIST',
    };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });

        this.props.setVisibilityFilter(name);
    };

    handleViewClick = view => {
        this.setState({ activeView: view });

        this.props.setViewMode(view);
    };

    render() {
        const {
            activeItem,
            activeView,
        } = this.state;

        return (
            <Menu secondary>
                <Menu.Item
                    name='SHOW_ALL'
                    active={activeItem === 'SHOW_ALL'}
                    onClick={this.handleItemClick}
                >
                    All
                </Menu.Item>
                <Menu.Item
                    name='SHOW_FAVORITES'
                    active={activeItem === 'SHOW_FAVORITES'}
                    onClick={this.handleItemClick}
                >
                    Favorites
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon
                            name="list layout"
                            size="large"
                            disabled={activeView === 'LIST'}
                            link={activeView !== 'LIST'}
                            onClick={() => this.handleViewClick('LIST')}
                        />
                        <Icon
                            name="grid layout"
                            size="large"
                            disabled={activeView === 'GRID'}
                            link={activeView !== 'GRID'}
                            onClick={() => this.handleViewClick('GRID')}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

Filter.propTypes = {
    setVisibilityFilter: PropTypes.func.isRequired,
    setViewMode: PropTypes.func.isRequired,
};

export default connect(undefined, { setVisibilityFilter, setViewMode })(Filter);
