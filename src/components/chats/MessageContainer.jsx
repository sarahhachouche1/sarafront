import { useEffect, useRef } from 'react';

const MessageContainer = ({ messages }) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return <div ref={messageRef} className="h-400 overflow-auto mb-1">
  
        {messages.map((m, index) =>
            <div key={index} className="ml-3 text-left ">
                <div className ='bg-colorNav w-max flex  py-3 px-7 gap-4 rounded-[3rem] backdrop-blur-lg '>{m.message}</div>
                <div className="text-xs  mr-5 text-gray-400 "style={{ fontSize: '0.65rem' }}>{m.user}</div>
            </div>
        )}
    </div>
}

export default MessageContainer;