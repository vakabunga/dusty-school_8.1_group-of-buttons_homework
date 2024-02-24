import React from 'react';

import { Button, ButtonProps } from './components/Buttons/Button';

const buttonsLight: ButtonProps[] = [
  {
    text: 'Button',
    primary: 'light',
  },
  {
    text: 'Button',
    secondary: 'light',
  },
];

const buttonsDark: ButtonProps[] = [
  {
    text: 'Button',
    primary: 'dark',
  },
  {
    text: 'Button',
    secondary: 'dark',
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
