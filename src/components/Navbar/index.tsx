import { FC, useEffect, useState } from 'react';
import { getGiantSquidBannerIsActive } from 'utils/timeFunc';
import DefaultNav from './DefaultNav';
import GiantSquidNav from './GiantSquidNav';
enum NAVBAR_TYPE {
  GIANT_SQUID,
  DEFAULT,
}
export const Navbar: FC = () => {
  const [navbarType, setNavbarType] = useState(NAVBAR_TYPE.DEFAULT);
  let finalContent = <DefaultNav />;
  if (navbarType == NAVBAR_TYPE.GIANT_SQUID) {
    finalContent = <GiantSquidNav />;
  } else if (navbarType == NAVBAR_TYPE.DEFAULT) {
    finalContent = <DefaultNav />;
  }
  useEffect(() => {
    if (getGiantSquidBannerIsActive()) {
      setNavbarType(NAVBAR_TYPE.GIANT_SQUID);
    } else {
      setNavbarType(NAVBAR_TYPE.DEFAULT);
    }
  }, []);
  return finalContent;
};
