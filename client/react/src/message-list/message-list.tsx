type Message = {
    content: string,
    id: string,
}

type MessageListProp = {
    messages: Message[];
}

export function MessageList({ messages }: MessageListProp) {
    return (
        <div>
            {messages.map(message => 
                <p key={message.id}>{message.content}</p>
            )}
        </div>
    );
}