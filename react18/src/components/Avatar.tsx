import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isSelected?: boolean;
  onClick: (assignee: string) => void;
}

export const Avatar = ({ children, onClick, isSelected = false }: Props) => {
  const border = isSelected ? '3px solid orange' : '1px solid gray';
  return (
    <div
      onClick={() => onClick(`${children}`)}
      style={{ boxSizing: 'border-box', width: '100px', height: '30px', border, textAlign: 'center', lineHeight: '30px', userSelect: 'none', cursor: 'pointer' }}
    >{children}</div>
  )
}
