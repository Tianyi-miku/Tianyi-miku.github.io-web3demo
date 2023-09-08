'use client';

import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import * as React from 'react'
import {
  useAccount,
} from 'wagmi'
import Mint from "./mint"


const MintNFT = () => {
  const imgs = [
    {
      src: 'https://ipfs.filebase.io/ipfs/QmWAxfMg7jA7BNxBCZK2j1ExEwmwLguJyLmS9JyjibwaaB',
      mata: 'QmfVec1Yu1RBhMmnd9XxFDDZsahFK3q4r5DDnkhjHT15Y3',
      title: 'NFT',
      description: '品质：稀有'
    },
    {
      src: 'https://ipfs.filebase.io/ipfs/Qmeqvwid8nTovPTWsotDu6tbsoXaCMEQVz72RtwPZT5sUH',
      mata: 'QmVDv36REoiKxZcQkyoVnHUDgNs8euBRzhHyHeipmCwLEY',
      title: 'NFT',
      description: '品质：绝世'
    },
    {
      src: 'https://ipfs.filebase.io/ipfs/QmNQBLqqaCha7QQ79V4xuvKCQ7QupHFEG9DNyHRP7QNRmc',
      mata: 'QmYYWn6aSPdrjcaZShTbpsTjuWpgjaAMsZ8uCvAFwU3DLa',
      title: 'NFT',
      description: '品质：绝世'
    }
  ]
  const mainBgImage = "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/12/03/b37a97d3-270c-4cdc-8c83-4ee735a686e8_95895212.jpg?itok=y0459xhc&v=1638533154";

  const { address, isConnected } = useAccount()

  return (
    <div>
      <div className="main-card-wrapper" style={{ backgroundImage: `url(${mainBgImage})` }}>
        <div className="main-card__inner-wrapper">
          <h4 className="header-txt">skyMiku web3 Demo！！</h4>
        </div>
      </div>
      <div className='flex flex-wrap pt-5'>
        {imgs.map((item) => {
          return <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={item.src} alt=''></img>}
            className='ml-10'
            key={item.src}
          >
            <Meta title={item.title} description={item.description} />
            <div className='pt-5'>
              <Mint address={address} params={item.mata}></Mint>
            </div>

          </Card>
        })}
      </div>
    </div>

  )

}
export default MintNFT
