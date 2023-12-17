'use client'
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import MyMessage from './components/MyMessage'
import { useDataFetching } from '@/hooks';
import axios from 'axios';

export default function Home() {
  const [messageInput, setMessageInput] = useState('');
  const { data, loading, mutate } = useDataFetching('/api/getchat');

  const [messages, setMessages] = useState([]);

  const submitBtn = () => {
    if (messageInput.trim() !== '') {
      setMessages([...messages, { message: messageInput }]);
      setMessageInput('');
      submitMsg(messageInput)
    }

  };
  const submitMsg = async (msg) => {
    try {
      const response = await axios.post("/api/chat", {
        message: msg
      });
      if (!response.data) {

        return;
      }
      mutate();
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
  const messagesContainerRef = useRef(null);
  const getchat = async () => {
    // await data;
    setMessages(data)
    // if (await data) {
    // }
    // console.log(data)
  }
  useEffect(() => {
    // Scroll to the end of the messages container
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }

    const intervalId = setInterval(() => {
      // Fetch chat data every second
      getchat();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);

    // Include loading in the dependency array if you want to fetch data only when not loading
  }, [messages, loading]);
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
