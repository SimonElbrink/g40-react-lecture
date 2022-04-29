import React from 'react';

const MenuLink = (props) =>{
    return <a style={{color: "Green" }} href={props.menu.path}>{props.menu.name}</a>
}

const MenuList = () => {


    const menus =[
        {name: "Home", path: "/home"},
        {name: "Register", path: "/register"},
        {name: "Login", path: "/login"},
        {name: "Show Profile", path: "/12345"},
        {name: "About", path: "/about"}
    ]

    return (
        <div>
            <ul>
                {
                menus.map(m => {
                    return(
                        <li>
                            <MenuLink menu={m}/>
                        </li>
                    )
                })
                }
            </ul>
            
        </div>
    );
};

export default MenuList;