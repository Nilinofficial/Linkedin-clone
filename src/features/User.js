import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './userSlice';


export function User() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  return (
    <div>
      
    </div>
  );
}
