'use client'

import NavLogin from "./userLogin/dLogin";
import NavUser from "./userLogin/dUser";
import { useState } from "react";

const UserOrLogin = () => {
    const [user,setUser] = useState(0)
    if(user) {
        return(
            <>
                <div onClick={isUser} className="">
                <NavUser/>
                </div>
            </>
        );
    } else {
        return(
            <>
                <div onClick={isUser} className="">
                <NavLogin/>
                </div>
            </>
        );
    };
    function isUser() {
        if(user) {
            setUser(0)
        } else {
            setUser(1)
        }
    };
};

export default UserOrLogin;