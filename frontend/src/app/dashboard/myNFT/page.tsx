'use client';

import { Alchemy, Network } from 'alchemy-sdk';
import { Button, Card, Input, Modal, Spin } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useState } from 'react'
import { useAccount, useNetwork } from 'wagmi';
import Transfer from "./transfer"

export default function myNft() {
  const { address, isConnected } = useAccount()
  const [NFTs, setNFTs] = useState([])
  const { chain } = useNetwork()
  const [tokenId, settokenId] = useState('')
  const [loading, setloading] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendSuccess = () => {
    fetchNFTs()
    setIsModalOpen(false);
  }

  const fetchNFTs = async () => {
    setloading(true)
    let nfts: any;
    const alchemy = new Alchemy({
      apiKey: process.env.api_key,
      network: chain?.network === "sepolia" ? Network.ETH_SEPOLIA : Network.ETH_SEPOLIA
    });
    
    nfts = await alchemy.nft.getNftsForOwner((address || '').toString())
    if (nfts) {
      setNFTs(nfts.ownedNfts)
    }
    setloading(false)
  }

  useEffect(() => {
    if (address) {
      fetchNFTs()
    }
    return () => {
    }
  }, [address])

  const openMoal = (item: any) => {
    settokenId(item.tokenId)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className='flex flex-wrap'>
        {
          loading ? <Spin className='w-full h-full' /> :
            NFTs.map((item: any) => {
              return <Card
                hoverable
                style={{ width: 240 }}
                cover={<img src={item.rawMetadata?.image} alt=''></img>}
                className='ml-10'
                key={item.tokenUri?.raw}
              >
                <div className='p-2'>
                  <Button className='w-full' onClick={() => openMoal(item)}>
                    转让
                  </Button>
                </div>
                <Meta title={item.title} description={item.description} />
              </Card>
            })
        }
      </div>
      <Modal title="转让" onCancel={() => setIsModalOpen(false)} open={isModalOpen} footer={<></>}>
        <Transfer from={address} tokenId={tokenId} sendSuccess={sendSuccess}></Transfer>
      </Modal>
    </>
  )

}
