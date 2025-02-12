import React from 'react';

function Message(props){
    return<p>{props.text}</p>;
}

Message.defaultProps = {
    text: "Default Message",
};

export default Message;