import React from 'react';

import { Button, ButtonProps } from './components/Buttons/Button';
import './App.css';

const buttonsLight: ButtonProps[] = [
  {
    text: 'Hello',
    theme: 'light',
    state: 'normal',
    order: 'primary'
  },
  {
    text: 'Hello',
    theme: 'light',
    state: 'normal',
    order: 'secondary'
  },
  {
    text: 'Hello',
    theme: 'light',
    state: 'hover',
    order: 'primary'
  },
  {
    text: 'Hello',
    theme: 'light',
    state: 'hover',
    order: 'secondary'
  },
  {
    text: 'Hello',
    theme: 'light',
    state: 'disabled',
    order: 'primary'
  },
  {
    text: 'Hello',
    theme: 'light',
    state: 'disabled',
    order: 'secondary'
  },
];

const buttonsDark: ButtonProps[] = [
  {
    text: 'Hello',
    theme: 'dark',
    state: 'normal',
    order: 'primary'
  },
  {
    text: 'Hello',
    theme: 'dark',
    state: 'normal',
    order: 'secondary'
  },
  {
    text: 'Hello',
    theme: 'dark',
    state: 'hover',
    order: 'primary'
  },
  {
    text: 'Hello',
    theme: 'dark',
    state: 'hover',
    order: 'secondary'
  },
  {
    text: 'Hello',
    theme: 'dark',
    state: 'disabled',
    order: 'primary'
  },
  {
    text: 'Hello',
    theme: 'dark',
    state: 'disabled',
    order: 'secondary'
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="light-box">
        {buttonsLight.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </div>
      <div className="black-box">
        {buttonsDark.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </div>
    </div>
  );
};

export { App };
