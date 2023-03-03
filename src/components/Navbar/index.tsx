import { FC, useEffect, useState } from 'react';
import arrowRight from 'assets/images/navbar/arrowRight.svg';
import { giantSquidTimeDuring } from 'utils/timeFunc';
enum NAVBAR_TYPE {
  GIANT_SQUID = 'GIANT_SQUID',
  DEFAULT = 'DEFAULT',
}
export const Navbar: FC = () => {
  const [navbarType, setNavbarType] = useState(NAVBAR_TYPE.DEFAULT);
  const defaultNav = (
    <div
      className="h-[60px] cursor-pointer bg-gray2 text-center text-[20px] leading-[60px] text-orange1 hover:underline"
      onClick={() => window.open('https://app.manta.network/#/calamari/stake')}
    >
      KMA Staking is Live {'>'}
    </div>
  );
  const giantSquidNav = (
    <div
      className={`flex h-[68px] cursor-pointer items-center justify-center bg-giant-squid font-red-hat text-[14px] font-semibold leading-[19px] text-gs-black`}
      onClick={() => window.open('https://galxe.com/')}
    >
      <div className="mr-[16px]">
        KMA holders can participate with the Giant Squid Program on Galxe.com now!
      </div>
      <div className="mr-[16px]">Find more details here</div>
      <img src={arrowRight} className="w-[24px]" />
    </div>
  );

  useEffect(() => {
    if (giantSquidTimeDuring()) {
      setNavbarType(NAVBAR_TYPE.GIANT_SQUID);
    } else {
      setNavbarType(NAVBAR_TYPE.DEFAULT);
    }
  }, []);
  return {
    [NAVBAR_TYPE.GIANT_SQUID]: giantSquidNav,
    [NAVBAR_TYPE.DEFAULT]: defaultNav,
  }[navbarType];
};
