import React, {useState} from 'react';
import styles from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {useFormik} from 'formik';
import {contactsAPI} from "./contactsAPI";
import okIco from '../assets/images/okIco.svg'

const getValidate = values => {

        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length < 3) {
            errors.name = 'Name must be 3 characters or more';
        }
        if (!values.message) {
            errors.message = 'Required';
        } else if (values.message.length < 10) {
            errors.message = 'Message must be 10 characters or more';
        }
        if (!values.contact) {
            errors.contact = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contact)) {
            errors.contact = 'Invalid email address';
        }
        return errors;
}

function Contacts() {

    const [isDone, setIsDone] = useState(false)



    const formik = useFormik({
        initialValues: {
            name: '',
            contact: "",
            message: "",
        },
        validate: getValidate,
        onSubmit: async (values, {resetForm}) => {
            try {
                await contactsAPI.sendForm({
                    name: values.name,
                    contact: values.contact,
                    message: values.message,
                })
                resetForm();
                setIsDone(true)
                setTimeout(() => {
                    setIsDone(false)
                }, 2000)
            } catch (err) {
                console.log(err)
            }
        },
    });

    return (
        <div id={"contacts"} className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title text={"Contacts"}/>
                <Fade left>

                    <form onSubmit={formik.handleSubmit} className={styles.form} id="contactForm">

                        {formik.errors.name && formik.touched.name ? (
                            <div style={{color:"red"}}>{formik.errors.name}</div>
                        ) : null}
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            type="text"
                            className={styles.formArea}
                            id="name"
                            name="name"
                            placeholder="Name"/>

                        {formik.errors.contact && formik.touched.contact ? (
                            <div style={{color:"red"}}>{formik.errors.contact}</div>
                        ) : null}
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.contact}
                            type="text"
                            className={styles.formArea}
                            id="contact"
                            name="contact"
                            placeholder="e-mail"/>
                        {formik.errors.message && formik.touched.message ? (
                            <div style={{color:"red"}}>{formik.errors.message}</div>
                        ) : null}

                        <textarea
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            className={styles.messageArea}
                            id="message"
                            name="message"
                            placeholder="Message"/>
                        <button type="submit">Send message {isDone && <img src={okIco} alt=""/>}</button>

                    </form>
                </Fade>

            </div>
        </div>
    );
}

export default Contacts;