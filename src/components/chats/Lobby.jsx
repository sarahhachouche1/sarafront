import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();

    return <Form className="w-400 mx-auto"
        onSubmit={e => {
            console.log(user,room)
            e.preventDefault();
            joinRoom(user, room);
        }} >
        <Form.Group className="flex flex-col items-center mt-14">
            <Form.Control  className="mb-8 p-2 border border-gray-300 rounded text-2xl text-black" placeholder="name" onChange={e => setUser(e.target.value)} />
            <Form.Control  className="p-2 border border-gray-300 rounded text-2xl text-black" placeholder="room" onChange={e => setRoom(e.target.value)} />
        </Form.Group>
        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={!user || !room}
            className="mt-5  rounded text-xl"
          >
            Join
          </Button>
        </div>
     </Form>
}

export default Lobby;
