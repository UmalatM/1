import React from "react";
import cls from "./navbar.module.scss";

import logo from "@/assets/Logo.png";
import NavSearch from "./NavSearch/NavSearch";
import {Button} from "@/components";

const Navbar = () => {
 return (

  <div className={cls.navbar}>
    <div className="container">
        <div className={cls.wrap}>
            <img src={logo} alt="" />   


            <NavSearch/>
             
             <Button>Войти</Button>
       
        </div>
    </div>
 </div>
 );
};

export default Navbar;