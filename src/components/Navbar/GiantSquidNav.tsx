import { FC } from 'react';
import arrowRight from 'assets/images/navbar/arrowRight.svg';

const GiantsquidNav: FC = () => {
  return (
    <div
      className={`font-red-hat-mono flex h-[68px] cursor-pointer items-center justify-center bg-giant-squid text-[14px] font-semibold leading-[19px] text-gs-black`}
      onClick={() => window.open('https://galxe.com/')}
    >
      <div className="mr-[16px]">
        KMA holders can participate with the Giant Squid Program on Galxe.com now!
      </div>
      <div className="mr-[16px]">Find more details here</div>
      <img src={arrowRight} className="w-[24px]" />
    </div>
  );
};
export default GiantsquidNav;
