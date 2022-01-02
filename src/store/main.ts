import React from 'react';
import { createState, useState } from '@hookstate/core';
import { User } from '../types/user';
const userState = createState<User>(new User("",""));
// setInterval(() => globalState.set(p => p + 1), 3000)
// export const ExampleComponent = () => {
//     const state = useState(globalState);
//     return <>
//         <b>Counter value: {state.get()}</b> (watch +1 every 3 seconds) {' '}
//         <button onClick={() => state.set(p => p + 1)}>Increment</button>
//     </>
// }

export default userState;