import "./App.css";
import React from "react";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message, firstMessage, lastMessage }) => {
  return (
    <div
      style={{
        background: "blue",
        marginTop: 2,
        borderTopRightRadius: firstMessage ? 8 : 0
      }}
    >
      {message}
    </div>
  );
};

interface MessageBlockProps {
  messages: string[];
  avatar?: string;
  alignment?: string;
}

const Avatar = () => {
  return <img src="/react.svg" />;
};

const dummyMessageBlocks = [
  {
    messages: ["Hello!", "How are you?"],
    avatar: "avatar1",
    alignment: "left",
  },
  {
    messages: ["I'm good, thanks!", "What about you?"],
    avatar: "avatar2",
    alignment: "right",
  },
  {
    messages: ["I'm doing well too.", "Have a great day!"],
    avatar: "avatar3",
    alignment: "left",
  },
];

const MessageBlock: React.FC<MessageBlockProps> = ({
  messages,
  avatar,
  alignment,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: alignment === "left" ? "row-reverse" : "row",
      }}
      className={`${alignment === "left" ? "someStyle" : "someOtherStyle"}`}
    >
      <Avatar id={avatar} />
      <div>
        {messages.map((message, index) => (
          <Message key={index} message={message} firstMessage={index === 0} />
        ))}
      </div>
    </div>
  );
};

const MessageThread = ({ messageBlocks }) => {
  return (
    <div style={{ width: 500 }}>
      {messageBlocks.map(({ messages, avatar, alignment }) => {
        return (
          <MessageBlock
            messages={messages}
            avatar={avatar}
            alignment={alignment}
          />
        );
      })}
    </div>
  );
};

function App() {
  return (
    <>
      <MessageThread messageBlocks={dummyMessageBlocks} />
    </>
  );
}

export {App};
