import React from 'react';

import Tabs from '@atlaskit/tabs';
import ChatIframe from './ChatIframe';
import Chat from './Chat';


const ChatView = () => <Chat/>;

const tabs = [
  { label: 'Backstage', content: <ChatView />},
  { label: 'Live', content: <ChatIframe />},
];

const ChatTab = () => <Tabs tabs={tabs} />;


export default ChatTab;