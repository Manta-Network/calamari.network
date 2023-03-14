import { FC } from 'react';
import discord from 'assets/images/home/discord.svg';
import heart from 'assets/images/home/heart.svg';
import medium from 'assets/images/home/medium.svg';
import telegram from 'assets/images/home/telegram.svg';
import twitter from 'assets/images/home/twitter.svg';

export const Footer: FC = () => {
  return (
    <div className="mt-[62px] flex justify-between gap-[90px] bg-black1 py-[42px] px-[110px]">
      <div>
        <div className="text-[25px]">Calamari Network</div>
        <div className="my-[25px] text-[20px] text-gray">
          Calamari Network is the ZK layer for the entire Kusama ecosystem. Built on the substrate
          framework, Calamari Network is natively compatible with other projects and parachain
          assets including wrapped major cryptoassets.
        </div>
        <div className="flex items-center text-[20px] text-gray">
          <span>Made with</span>
          <img src={heart} className="mx-[10px] inline w-[20px] align-middle" />
          <span>by </span>
          <span
            className="cursor-pointer text-white duration-200 hover:text-gray"
            onClick={() => window.open('https://p0xlabs.xyz/')}
          >
            &nbsp;p0x labs
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div
          className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[9px] bg-gray1"
          onClick={() => window.open('https://twitter.com/CalamariNetwork')}
        >
          <img src={twitter} className="w-[25px] duration-200 hover:scale-[1.2]" />
        </div>
        <div
          className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[9px] bg-gray1"
          onClick={() => window.open('https://discord.gg/PRDBTChSsF')}
        >
          <img src={discord} className="w-[25px] duration-200 hover:scale-[1.2]" />
        </div>
        <div
          className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[9px] bg-gray1"
          onClick={() => window.open('https://t.me/mantanetworkofficial')}
        >
          <img src={telegram} className="w-[25px] duration-200 hover:scale-[1.2]" />
        </div>
        <div
          className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[9px] bg-gray1"
          onClick={() => window.open('https://mantanetwork.medium.com/')}
        >
          <img src={medium} className="w-[25px] duration-200 hover:scale-[1.2]" />
        </div>
      </div>
    </div>
  );
};
