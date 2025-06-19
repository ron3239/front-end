
import React,{FC} from 'react';

interface HomeProps {
  // Define your props here
  children?: React.ReactNode;
  className?: string;
}

export const qwe:FC<HomeProps> = ({
  children,
  className = '',
}) => {
  return (
    <div></div>
  );
};

qwe.displayName = 'Home';
