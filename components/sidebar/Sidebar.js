import items from '../../data/sidebar.json'
import SidebarItem from "./SidebarItem";
import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            {items.map((item, index) => <SidebarItem key={index} item={item} />)}
        </div>
    )
}

export default Sidebar;