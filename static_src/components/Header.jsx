import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Header extends React.Component {
    static propTypes = {
        messageCount: PropTypes.number,
    };

    static defaultProps = {
        messageCount: 0,
        data: 'пусто'
    };

    render() {
        return (
            <div className="header">
                сообщений в корзине: { this.props.messageCount }

            </div>
        )
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);