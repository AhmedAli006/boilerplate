import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function LetterAvatars() {
const state = useSelector(state => state)
// console.log(state.obj);
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
    </Stack>
  );
}