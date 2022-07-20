import React from 'react';
import style from './Nav.module.css'


export function Nav(props) {
    return (
        <div className={style.nav}>
            <a href="">Главное</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
}

