import React from 'react';

import Tabs from '@atlaskit/tabs';
import ChatIframe from './ChatIframe';
// import Chat from './Chat';


// const ChatView = () => <Chat/>;

const tabs = [
  // { label: 'Chat', content: <ChatView />},
  { label: 'Tab 1', content: 'checkview'},
  { label: 'Tab 2', content: <ChatIframe />},
];

const ChatTab = () => <Tabs tabs={tabs} />;


export default ChatTab;