import React from "react";
import '../styles/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='header-wrapper'>
                <span>Header</span>
            </div>
        )
    }
}

export default Header;