import React from 'react';

const chatChannel = interfaceConfig.CHAT_CHANNEL
const chatToken = interfaceConfig.CHAT_TOKEN
console.log("chatChannel",chatChannel)


export default () => {
    function authenticateIFrame() {
      console.log("chatChannel",chatChannel)
        setTimeout(() => {
          document.getElementById('rcChannel').contentWindow.postMessage(
            {
              externalCommand: 'login-with-token',
              // token: 'QQhWApDFcQ0qqZQZ73hww1mxXwWWqZx33i7In5dz2hs',
              token: interfaceConfig.CHAT_TOKEN,
            },
            '*'
          )
        }, 2000)
      }
    return (
    <div className="iframe-view">
        <iframe
            id="rcChannel"
            name="rcChannel"
            className="boxview live-iframe"
            src={"https://chat.bitpod.io/channel/"+interfaceConfig.CHAT_CHANNEL+"?layout=embedded"}
            width="100%"
            height="100vh"
            frameBorder="0"
            allow="camera;microphone;fullscreen"
            onLoad= {authenticateIFrame}
        ></iframe>
    </div>
)};
