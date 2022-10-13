import React from 'react';
import styles from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
function Contacts() {
    return (
        <div id={"contacts"} className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title text={"Contacts"}/>
                <Fade left>
                    <form className={styles.form}>
                        <input type="text" className={styles.formArea} placeholder="Name"/>
                        <input type="text" className={styles.formArea} placeholder="e-mail"/>
                        <textarea className={styles.messageArea} placeholder="Message"/>
                        <button type="submit" >Send message</button>
                    </form>
                </Fade>

            </div>
        </div>
    );
}

export default Contacts;