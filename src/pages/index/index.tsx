import { FC } from 'react';
import gate from 'assets/images/home/gate.svg';
import huobi from 'assets/images/home/huobi.svg';
import kucoin from 'assets/images/home/kucoin.svg';
import mexc from 'assets/images/home/mexc.svg';
import solarbeam from 'assets/images/home/solarbeam.svg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const Index: FC = () => {
  return (
    <div>
      <div
        className="h-[60px] cursor-pointer bg-gray2 text-center text-[20px] leading-[60px] text-orange1 hover:underline"
        onClick={() => window.open('https://app.manta.network/#/calamari/stake')}
      >
        KMA Staking is Live {'>'}
      </div>
      <div className="inline-block w-full bg-[url('assets/images/home/bg.svg')] bg-cover text-center">
        <Header />
        <div className="mt-[170px] text-[50px]">The Privacy Hub for Kusama</div>
        <div className="mt-[16px] text-[25px]">Bring privacy to your web3 project</div>
        <div className="mt-[75px] mb-[106px]">
          <Button
            text="Start staking"
            className="w-[200px]"
            onClick={() => window.open('https://app.manta.network/#/calamari/stake')}
          />
          <Button
            type="outline"
            text="Learn tokenomics"
            className="ml-[57px] w-[200px] border-white py-[9px]"
            onClick={() => window.open('https://docs.manta.network/docs/calamari/KMA/Tokenomics')}
          />
        </div>
      </div>
      <div className="mt-[15px] flex justify-center gap-[50px] text-center sm:gap-[20px]">
        <div className="shrink-0 bg-black1 px-[35px] py-[40px]">
          <div className="text-[30px] sm:text-[25px]">KMA Staking</div>
          <div className="mt-[16px] mb-[33px] max-w-[320px] text-[20px] text-gray sm:max-w-[250px] sm:text-[16px]">
            KMA staking is live. Stake your KMA tokens to receive rewards by supporting Calamari
            network.
          </div>
          <Button
            text="Start staking"
            className="w-[170px]"
            onClick={() => window.open('https://app.manta.network/#/calamari/stake')}
          />
        </div>
        <div className="shrink-0 bg-black1 px-[35px] py-[40px]">
          <div className="text-[30px] sm:text-[25px]">Get KMA</div>
          <div className="mt-[5px] mb-[25px] text-[20px] text-gray sm:text-[16px]">
            KMA is now listed on
          </div>
          <div className="mb-[30px] flex gap-[30px]">
            <div
              className="flex w-[120px] cursor-pointer items-center gap-[10px] duration-200 hover:text-gray"
              onClick={() => window.open('https://gate.io/')}
            >
              <img src={gate} className="w-[24px] sm:w-[20px]" />
              <div className="text-[20px] sm:text-[16px]">Gate.io</div>
            </div>
            <div
              className="flex cursor-pointer items-center gap-[10px] duration-200 hover:text-gray"
              onClick={() => window.open('https://www.huobi.com/')}
            >
              <img src={huobi} className="w-[24px] sm:w-[20px]" />
              <div className="text-[20px] sm:text-[16px]">Huobi</div>
            </div>
          </div>
          <div className="mb-[30px] flex gap-[30px]">
            <div
              className="flex w-[120px] cursor-pointer items-center gap-[10px] duration-200 hover:text-gray"
              onClick={() => window.open('https://www.mexc.com/')}
            >
              <img src={mexc} className="w-[24px] sm:w-[20px]" />
              <div className="text-[20px] sm:text-[16px]">MEXC</div>
            </div>
            <div
              className="flex cursor-pointer items-center gap-[10px] duration-200 hover:text-gray"
              onClick={() => window.open('https://www.kucoin.com')}
            >
              <img src={kucoin} className="w-[24px] sm:w-[20px]" />
              <div className="text-[20px] sm:text-[16px]">Kucoin</div>
            </div>
          </div>
          <div
            className="flex cursor-pointer items-center justify-center gap-[10px] duration-200 hover:text-gray"
            onClick={() => window.open('https://solarbeam.io/')}
          >
            <img src={solarbeam} className="w-[24px] sm:w-[20px]" />
            <div className="text-[20px] sm:text-[16px]">Solarbeam</div>
          </div>
        </div>
        <div className="shrink-0 bg-black1 px-[35px] py-[40px]">
          <div className="text-[30px] sm:text-[25px]">MantaPay</div>
          <div className="mt-[16px] mb-[33px] max-w-[295px] text-[20px] text-gray  sm:max-w-[250px] sm:text-[16px]">
            MantaPay is coming to Calamari as the first privacy payment solution in the Kusama ecosystem.
          </div>
          <Button
            text="Try the Testnet"
            onClick={() => window.open('https://app.dolphin.manta.network')}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
