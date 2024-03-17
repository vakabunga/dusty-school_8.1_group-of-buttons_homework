import React from 'react';
import type  { FC } from 'react';
import './Button.css';
import { cnButton } from './Button.classname';

export type ButtonProps = {
  text: string;
  theme: 'dark' | 'light';
  state: 'normal' | 'hover' | 'disabled';
  order: 'primary' | 'secondary';
};

const Button: FC<ButtonProps> = ({ text, theme, state, order }) => {
  return (
    <button className={cnButton({theme, state, order})}>{text}</button>
  );
}

export { Button };
