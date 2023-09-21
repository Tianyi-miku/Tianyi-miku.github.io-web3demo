'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import "./layout.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const items: MenuProps['items'] = [
  {
    key: 'mint',
    label: (
      <Link href="/dashboard/mintNFT">
        铸造NFT Sepolia
      </Link>
    ),
  },
  {
    key: 'myNFT',
    label: (
      <Link href="/dashboard/myNFT">
        MYNFT
      </Link>
    ),
  },
  {
    label: (
      <Link href="/dashboard/lottery">
        lottery(抽奖)
      </Link>
    ),
    key: 'lottery',
  },
  {
    label: (
      <Link href="/dashboard/trading">
        (交易)trading
      </Link>
    ),
    key: 'trading',
  },
  {
    label:
      (<Link href="/dashboard/stride">
        CrossBridge(链桥)
      </Link>)
    ,
    key: 'stride',
  },
];


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState('mint');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const router = useRouter()
  const params = usePathname();
  useEffect(() => {
    if (params === '/') {
      router.push('/dashboard/mintNFT')
    }
    return () => {
    }
  }, [])

  return (
    <html lang="en">
      <body className='App pb-20'>
        <Providers>
          <div className='content'>
            <div className='flex justify-between pt-5'>
              <Menu onClick={onClick} style={{ minWidth: '60%', flex: "auto" }} selectedKeys={[current]} mode="horizontal" items={items} />
              <div>
                <ConnectButton label='连接' />
              </div>
            </div>
            <div className='cards-wrapper pt-5'>
              {children}
            </div>
            <div className='flex justify-around pt-10 pb-5 font-serif '>
              <div>欢迎查看 UI库： antd</div>
              <div>技术库：ethersjs wagmi alchemy viem</div>
            </div>
          </div>

        </Providers>

      </body>

    </html >
  );
}