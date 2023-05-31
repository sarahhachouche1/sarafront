import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return( <Form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup className=' flex z-[99] fixed bottom-4 left-1/2 -translate-x-1/2 gap-4' style={{width:'48%'}}>
            <FormControl className="bg-colorNav backdrop-blur-lg rounded-[3rem] py-3 px-7 "
               style={{ width: '100%' }}
               type="user" placeholder="message..."
                onChange={e => setMessage(e.target.value)} value={message} />
                <button type="submit" className="button-reset" disabled={!message}>
                   <SendIcon color="primary" />
                </button>

              
                
        </InputGroup>
    </Form>);
   
}

export default SendMessageForm;