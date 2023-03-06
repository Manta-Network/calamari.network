import { FC } from 'react';

const DefaultNav: FC = () => {
  return (
    <div
      className="h-[60px] cursor-pointer bg-gray2 text-center text-[20px] leading-[60px] text-orange1 hover:underline"
      onClick={() => window.open('https://app.manta.network/#/calamari/stake')}
    >
      KMA Staking is Live {'>'}
    </div>
  );
};
export default DefaultNav;
