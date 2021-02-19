import React from 'react';

export default () => {
    function authenticateIFrame() {
        setTimeout(() => {
          document.getElementById('rcChannel').contentWindow.postMessage(
            {
              externalCommand: 'login-with-token',
              token: 'QQhWApDFcQ0qqZQZ73hww1mxXwWWqZx33i7In5dz2hs',
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
            src="https://chat.bitpod.io/channel/rishi-live-lyxz?layout=embedded"
            width="100%"
            height="100vh"
            frameBorder="0"
            allow="camera;microphone;fullscreen"
            onLoad= {authenticateIFrame}
        ></iframe>
    </div>
)};
