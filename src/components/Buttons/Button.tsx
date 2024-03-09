import React from 'react';
import './Button.css';
import { cnButton } from './Button.classname';
import type  { FC } from 'react';

export type ButtonProps = {
  text: string;
  theme: "dark" | "light";
  state: "normal" | "hover" | "disabled";
  order: "primary" | "secondary";
};

const Button: FC<ButtonProps> = ({ text, theme, state, order }) => {
  return (
    <button className={cnButton({theme: theme, state: state, order: order})}>{text}</button>
  );
}

export { Button };
