import axios from 'axios'

export const contactsAPI = {
    sendForm: (props) => {
        axios.post('https://alex-betke-mail-server.herokuapp.com/sendMessage', {
            name: props.name,
            contact: props.contact,
            message: props.message
        })
    }
}
