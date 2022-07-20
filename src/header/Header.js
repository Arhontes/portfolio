import React from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";

export function Header(props) {
    return (
        <div className={style.header}>
            <Nav />
        </div>
    );
}

