import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { HashRouter, Switch, Route, Redirect } from "react-router-dom";


class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        console.log('aaaaa', this.props.location);
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <>

            </>
        )
    }
}
export default withRouter(ScrollToTop)