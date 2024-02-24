import React from 'react';
import './Button.css';
import { cnButton } from './Button.classname';
import type  { FC } from 'react';

export type ButtonProps = {
  children?: string;
  text: string;
  primary?: "dark" | "light";
  secondary?: "dark" | "light";
};

const Button: FC<ButtonProps> = ({ text, primary, secondary }) => {
  return (
    <button className={cnButton({primary: primary, secondary: secondary})}>{text}</button>
  );
}

export { Button };
