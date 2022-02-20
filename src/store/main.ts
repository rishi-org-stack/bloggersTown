import React from 'react';
import { createState } from '@hookstate/core';
import { User } from '../types/user';
const userState = createState<User>(new User("",""));


export default userState;