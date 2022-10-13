import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import hamburgerMenu from '../../assets/images/burgerMenuSVG.svg';
import {HeaderLink} from "../../common/components/header-link/HeaderLink";

function BurgerNav(props) {

    const [isOpen,setIsOpen] = useState(false)

    return (
        <div className={style.burgerNav}>
                <div className={isOpen? (`${style.burgerNavItems} ${style.show}`):style.burgerNavItems}>
                    {props.linkList.map(el=><HeaderLink key={el.id} text={el.text} to={el.to}/>)}
                </div>
            <div onClick={()=>setIsOpen(!isOpen)} className={style.burgerBtn}>
                <img src={hamburgerMenu} alt=""/>
            </div>
        </div>
    );
}

export default BurgerNav;