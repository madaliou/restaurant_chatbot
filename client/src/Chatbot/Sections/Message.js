import React from 'react'
import { List, Icon, Avatar } from 'antd';

function Message(props) {

    const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
    const backgroundSrc = props.who ==='bot' ? "#660000"  : "#000066"  

    return (
        <List.Item style={{ 
        /* ,
        display : 'inline-block',*/
        marginBottom: '1em',
        clear: 'both',
        float: props.who ==='bot' ? "left" : "right", 
        backgroundColor:props.who ==='bot' ? "#b3ffb3"  : "#e6b3cc",
        padding: '1rem' }}>
            <List.Item.Meta 
                avatar={<Avatar icon={AvatarSrc} style={{ backgroundColor: backgroundSrc }}/>}
                title={props.who}
                description={props.text}
            />
        </List.Item>
    )
}

export default Message
