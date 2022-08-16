import React from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/container.module.css";
import Title from "../common/components/title/Title";
export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`} >
                <Title title={"Contacts"}/>
                <form className={style.contactsForm} action="">
                    <input/>
                    <input/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={style.sendButton}>Send</button>
            </div>
        </div>
    );
};
