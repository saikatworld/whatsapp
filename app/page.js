"use client"
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MyMessage from './components/MyMessage'

export default function Home() {
  const [messageInput,setMessegeInput] =useState('');
  const [messages,setMesseges] =useState([
    {
      message:'hello'
    },
    {
      message:'hello'
    },
    {
      message:'hello'
    },
    {
      message:'saikat'
    },
  ])
const onBtnClick=()=>{
  if (messageInput.trim() !=='') {
    setMesseges([...messages,{message:messageInput}])
    setMessegeInput('');
  }
  console.log(messageInput)
};
  const messagearray=[

  ]
  return (
    <Stack bg={"green"} h={'100vh'}>

      <Stack flex={1} p={4} justify={'end'}>
        {/* <Stack align={'flex-start'}>
          <Stack bg={'white'} width={'450px'} p={4} rounded={'xl'} shadow={'lg'}>
            <Text>How are you</Text>
          </Stack>
        </Stack> */}
        {messages.map((item,index)=>{
          return(
            <MyMessage message={item.message} key={index}/>
          )
        })}

      </Stack>
      <Stack flexDir={'row'} bg={'white'} p={2}>
        <Input placeholder='Enter your message' value={messageInput} onChange={(e)=>setMessegeInput(e.target.value)}/>
        <Button colorScheme={'green'} onClick={()=>onBtnClick()}> 
        Send </Button>
      </Stack>
    </Stack>
  )
}
