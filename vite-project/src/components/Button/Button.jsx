import React from "react";
import cls from  "./button.module.scss";

 const Button = ({className,variant= "solid", type, clildren}) => {
    return ( 
        <button 
        type={type} 
        className={`${cls.btn} ${cls[variant]} ${className || ""}`}
        > 
        {clildren}
        </button>

    );
 };
      
 
 export default Button;