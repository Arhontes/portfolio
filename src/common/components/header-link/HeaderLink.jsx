import {Link} from "react-scroll";
import style from "../../../header/nav/Nav.module.scss";

export const HeaderLink = (props) =>{
    return (
        <Link key={props.id} activeClass={style.activeLink} to={props.to} spy={true} smooth={true} offset={1} duration={500} >
            {props.text}
        </Link>
    )
}