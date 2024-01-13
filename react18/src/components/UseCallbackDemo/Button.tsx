import { FC, memo } from "react";
type Props = {
  onClick: () => void;
};

export const Button: FC<Props> = memo(({ onClick }) => {
  console.log("Button is rendered", new Date());
  return <button onClick={onClick}>Button</button>;
});
