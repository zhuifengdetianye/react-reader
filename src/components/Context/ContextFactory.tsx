import React from 'react';

export const OneContext = React.createContext({theme: 'dark', toggleTheme: () => {}});
export const TwoContext = React.createContext({avatar: 'avatar'});