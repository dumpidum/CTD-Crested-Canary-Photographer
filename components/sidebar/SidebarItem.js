import { useState } from "react"

const SidebarItem = ({ item }) => {
    const [open, setOpen] = useState(false)

    if (item.children) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-subtitle">
                    {item.children.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.title}
            </a>
        )
    }
}

export default SidebarItem;