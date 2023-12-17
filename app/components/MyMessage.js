import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function MyMessage({message}) {
  return (
    <Stack align={'flex-end'}>
    <Stack bg={'white'} width={'450px'} p={4} rounded={'xl'} shadow={'lg'}>
      <Text>{message}</Text>
    </Stack>
  </Stack>
  )
}
