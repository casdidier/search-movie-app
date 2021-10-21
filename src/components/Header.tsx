import React from 'react';

interface Props {
  appName: string;
}

export const Header = ({ appName }: Props) => <div>{appName}</div>;
