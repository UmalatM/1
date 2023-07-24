import React from "react";
import cls from "./navSearch.module.scss";


const NavSearch = ({className}) => {
    return <div className = {`${cls.navSearch} ${className || ''}`}>NavSearch</div>;
    
};

export default NavSearch;