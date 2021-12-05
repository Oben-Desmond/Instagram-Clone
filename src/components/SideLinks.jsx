import React from 'react'
import { FaHome, FaSignOutAlt, FaSearch , FaFilm} from "react-icons/fa";

function SideLinks() {
    return (
        <div>
            <br />
            <SideLink active label={`Feed`} Icon={FaHome}></SideLink>
            <SideLink label={`Explore`} Icon={FaSearch}></SideLink>
            <SideLink label={`Rheels`} Icon={FaFilm}></SideLink>
            {/* <SideLink label={`Settings`} Icon={FaSet/>}></SideLink> */}
            <br/>
            <br/>
            <SideLink label={`Logout`} Icon={FaSignOutAlt}></SideLink>
        </div>
    )
}

export default SideLinks



function SideLink({ Icon, label, active }) {
    return (
        <div className={`row side-link ${!!active ? `active` : ``} `}>
            <div className="col-2 icon-col">
                <Icon classNam={`icon`} ></Icon>
            </div>
            <div className="col-10">
                {label}
            </div>
        </div>
    )
}
