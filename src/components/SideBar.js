import React from "react";
import '../styles/sidebar.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='sidebar-wrapper'>
                <span>SideBar</span>
            </div>
        )
    }
}

export default SideBar;