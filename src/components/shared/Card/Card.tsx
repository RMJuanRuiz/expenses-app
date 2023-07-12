import { ReactNode } from 'react';
import './Card.scss';

export const Card = (props: { className: string; children: ReactNode }) => {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};
