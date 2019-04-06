import React from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";


class Header extends React.Component {
    render() {
        return <div className="header" />;
    }
}

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);