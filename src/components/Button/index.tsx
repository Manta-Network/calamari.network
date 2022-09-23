import { FC } from 'react';

interface Props {
  type?: 'filled' | 'outline';
  className?: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  type = 'filled',
  className,
  text,
  disabled = false,
  onClick,
}) => {
  let baseClassname =
    'rounded-[9px] border-[1px] border-orange px-[12px] py-[10px] text-[17px] font-medium duration-200 hover:text-gray hover:border-gray ';
  if (type === 'filled') {
    baseClassname +=
      "bg-[url('assets/images/home/button-bg.svg')] bg-cover bg-center bg-no-repeat border-0";
  }
  if (disabled) {
    baseClassname += ' opacity-50 cursor-not-allowed';
  }
  return (
    <button className={`${baseClassname} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
