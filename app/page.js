'use client'
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import MyMessage from './components/MyMessage'

export default function Home() {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
      message: 'hi',
    },
    {
      message: 'hi how r u',
    },
    {
      message: 'hi',
    },
  ]);

  const submitBtn = () => {
    if (messageInput.trim() !== '') {
      setMessages([...messages, { message: messageInput }]);
      setMessageInput('');
    }
  };
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    // Scroll to the end of the messages container
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === 'Enter') {
      submitBtn();
    }
  };

  return (
    <Stack
      h={'100vh'}
    flex={1}
    >
      <Stack
        flex={1}
        height={'100vh'}
        p={4}
        // justify={'end'}
        // bg={'green'}
        bgImage={'/bg.jpg'}
        overflowY={'scroll'}
        ref={messagesContainerRef}
      >
        {messages.map((item, index) => (
          <MyMessage message={item.message} key={index} />
        ))}
      </Stack>
      <Stack
        flexDir={'row'}
        bg={'white'}
        p={2}
        // flex={1}
      >
        <Input
          placeholder='Enter your message'
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={handleKeyPress}
          // border={'none'}
          // variant={'unstyled'}
        />
        <Button colorScheme={'green'} onClick={() => submitBtn()}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
