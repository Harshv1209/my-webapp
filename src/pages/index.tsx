import { Inter } from 'next/font/google'
import {Stack,Button,Typography} from '@mui/material'
import {useState} from 'react';

export default function Home() {
  const [counter,setCounter]=useState(0)
  const increment=()=>{
    setCounter(counter+1)
  }
  const decrement=()=>{
    setCounter(counter-1)
  }
  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'}>
      <Typography variant='h3'>Counter Value  : {counter}</Typography>
      <Button variant="contained" sx={{
        backgroundColor:'green',
        width:'150px'
      }}
      onClick={increment}>Inrement</Button>
       <Button variant="contained" sx={{
        backgroundColor:'',
        width:'150px'
      }}
      onClick={decrement}>Decrement</Button>
      </Stack>
  )} 