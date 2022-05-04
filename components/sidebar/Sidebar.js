// import { Navigation } from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
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




// function Sidebar() {
//     return (
//         <>
//             <Navigation
//                 // you can use your own router's api to get pathname
//                 activeItemId="/portfolio"
//                 onSelect={({ itemId }) => {
//                     // maybe push to the route
//                 }}
//                 items={[
//                     {
//                         title: 'Portfolio',
//                         itemId: '/portfolio',
//                         subNav: [
//                             {
//                                 title: 'Portraits',
//                                 itemId: '/portfolio/portraits',
//                             },
//                             {
//                                 title: 'Products',
//                                 itemId: '/portfolio/products',
//                             },
//                             {
//                                 title: 'Video',
//                                 itemId: '/portfolio/video',
//                             },
//                         ],
//                     },
//                     {
//                         title: 'Inquiry',
//                         itemId: '/inquiry',
//                     },
//                     {
//                         title: 'About',
//                         itemId: '/about',
//                     },
//                 ]}
//             />
//         </>
//     );
// }

export default Sidebar;