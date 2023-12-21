import { Dropdown } from 'antd';
import { FC } from 'react';
import calamari from 'assets/images/home/calamari.svg';
import dolphin from 'assets/images/home/dolphin.svg';
import logo from 'assets/images/home/logo.svg';
import manta from 'assets/images/home/manta.svg';
import { Button } from 'components/Button';

export const Header: FC = () => {
  const TechnologyMenu = () => {
    return (
      <div className="flex flex-col gap-[12px] rounded-[14px] bg-black1 p-[20px] text-[17px] text-gray">
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://github.com/Manta-Network')}
        >
          Github
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() =>
            window.open(
              'https://mantanetwork.notion.site/3b1b61e0aee8484396d674f4653e0813?v=451a4ad2105d4f9cb35fb74680359c1d',
            )
          }
        >
          Roadmap
        </div>
      </div>
    );
  };
  const NetworksMenu = () => {
    return (
      <div className="flex gap-[75px] rounded-[14px] bg-black1 p-[20px] text-gray">
        <div className="flex flex-col gap-[12px] text-[17px]">
          <img src={calamari} className="h-[30px]" />
          <div
            className="cursor-pointer duration-300 hover:text-white"
            onClick={() => window.open('https://docs.calamari.network/docs/calamari/Overview')}
          >
            What is Calamari?
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-white"
            onClick={() =>
              window.open('https://docs.calamari.network/docs/collator/CommunityCollatorProgram')
            }
          >
            Run Collator
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-white"
            onClick={() => window.open('https://app.manta.network/calamari/stake')}
          >
            Staking
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-white"
            onClick={() => window.open('https://calamari.subscan.io/')}
          >
            Block Explorer
          </div>
        </div>
        <div className="flex flex-col gap-[12px] text-[17px]">
          <div className="flex items-center gap-[7px]">
            <img src={manta} className="h-[30px]" />
            <div>Manta Network</div>
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-white"
            onClick={() => window.open('https://docs.calamari.network/docs/Introduction')}
          >
            What is Manta?
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-white"
            onClick={() => window.open('https://www.manta.network/')}
          >
            Manta Home
          </div>
        </div>
      </div>
    );
  };
  const KMAMenu = () => {
    return (
      <div className="flex flex-col gap-[12px] rounded-[14px] bg-black1 p-[20px] text-[17px] text-gray">
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://docs.calamari.network/docs/calamari/KMA/Tokenomics')}
        >
          Tokenomics
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://solarbeam.io/')}
        >
          Get KMA
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://app.manta.network/calamari/stake')}
        >
          Stake KMA
        </div>
      </div>
    );
  };
  const CommunityMenu = () => {
    return (
      <div className="flex flex-col gap-[12px] rounded-[14px] bg-black1 p-[20px] text-[17px] text-gray">
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://forum.manta.network/c/calamari-network-governance/6')}
        >
          Governance
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://twitter.com/CalamariNetwork')}
        >
          Twitter
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://discord.gg/PRDBTChSsF')}
        >
          Discord
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://t.me/mantanetworkofficial')}
        >
          Telegram
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() => window.open('https://mantanetwork.medium.com/')}
        >
          Medium
        </div>
        <div
          className="cursor-pointer duration-300 hover:text-white"
          onClick={() =>
            window.open(
              'https://github.com/Manta-Network/calamari.network/blob/main/src/assets/images/home/logo.svg',
            )
          }
        >
          MediaKits
        </div>
      </div>
    );
  };
  return (
    <div className="flex h-[80px] items-center px-[35px] sm:h-[60px] sm:px-[20px]">
      <img src={logo} className="mr-[64px] h-[33px] sm:mr-[40px] sm:h-[25px]" />
      <div className="flex items-center gap-[55px] text-[20px] sm:gap-[30px] sm:text-[16px]">
        <div
          className="cursor-pointer duration-200 hover:text-gray"
          onClick={() => window.open('https://www.manta.network/')}
        >
          Manta
        </div>
        <Dropdown overlay={<TechnologyMenu />} placement="bottom">
          <div className="cursor-pointer duration-200 hover:text-gray">Technology</div>
        </Dropdown>
        <Dropdown overlay={<NetworksMenu />} placement="bottom">
          <div className="cursor-pointer duration-200 hover:text-gray">Networks</div>
        </Dropdown>
        <Dropdown overlay={<KMAMenu />} placement="bottom">
          <div className="shrink-0 cursor-pointer duration-200 hover:text-gray">KMA Token</div>
        </Dropdown>
        <Dropdown overlay={<CommunityMenu />} placement="bottom">
          <div className="cursor-pointer duration-200 hover:text-gray">Community</div>
        </Dropdown>
      </div>
      <Button
        type="outline"
        text="Launch NPO"
        className="ml-auto shrink-0 sm:text-[16px]"
        onClick={() => window.open('https://npo.manta.network/calamari/sbt')}
      />
    </div>
  );
};
