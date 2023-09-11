"use client";

import React, { useEffect, useState } from 'react'
import { mainnet, useContractRead, useContractWrite } from 'wagmi'
import { VRFCoordinatorV2Mock, RandomNumberlottery, VRFV2Wrapper } from '../contact'
import { Button, notification } from 'antd';
import { parseEther, parseGwei } from 'viem';
import { fetchBalance } from '@wagmi/core'
import Rimg from "../../../../public/assets/R.jpg"
import { Contract, formatEther } from 'ethers';
import { useEthersProvider, useEthersSigner } from '@/app/provider_ether';

// const myLotteryABI = require("../../../../contracts/RandomNumberlottery.json").abi
const myLotteryABI = require("../../../../contracts/RandomNumberlottery_s.json").abi
const Mock = [
  "function fulfillRandomWords(uint256 _requestId, address _consumer)"
]


export default function lottery() {

  const [balance, setBalance] = useState(Object)
  const [winer, setwiner] = useState('')
  const signer = useEthersSigner()
  // const IVRFCoordinatorV2Mock = new Contract(VRFCoordinatorV2Mock, Mock, signer)
  const RandomNumberlotterYcontract = new Contract(RandomNumberlottery, myLotteryABI, signer)

  useEffect(() => {
    getBlance()

    return () => {
    }
  }, [])

  useEffect(() => {
    if (RandomNumberlotterYcontract.runner) {
      getWiner()
    }
    return () => {
    }
  }, [RandomNumberlotterYcontract.runner])



  async function joinPlay() {
    const transaction = await RandomNumberlotterYcontract.joinPlay({ value: parseEther('0.1') })
    const receipt = await transaction.wait()
    if (receipt.status) {
      getBlance()
    }
  }

  async function start() {
    if (Number(formatEther(balance.value)) > 0.1) {
      const requset = await RandomNumberlotterYcontract.requestRandomWords()
      const receipt = await requset.wait()
      console.log(receipt);
      return;
    }
  }

  const getBlance = async () => {
    const balance = await fetchBalance({
      address: RandomNumberlottery,
    })
    setBalance(balance)
  }

  const getWiner = async () => {
    const winer = await RandomNumberlotterYcontract.getwiner()
    console.log(winer);
    setwiner(winer)
  }

  async function withdrow() {
    const requset = await RandomNumberlotterYcontract.winerdraw()
    const receipt = await requset.wait()
    if (receipt.status) {
      getBlance();
      getWiner();
    }
  }

  return (
    <div>
      <div className=''>
        <div className='text-center p-10 text-lg'>
          猫猫抽奖！（chainlink上获取随机数）
          <span className='pt-5'>(超过0.1 eth可开奖！)</span>
          <Button className='ml-10' onClick={() => joinPlay()}>参与抽奖！</Button>
          <div className='ml-10'>
            当前奖池{balance.formatted}{balance.symbol}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <img src={Rimg.src} className='h-96'></img>
      </div>

      <div className='pt-10'>
        <Button onClick={() => start()}>开奖</Button>
      </div>

      <div>
        获奖人{winer}
      </div>

      <div>如果失败，则是因为回调气体太低导致失败，可更改callbackGasLimit</div>
      <div className='pt-10'>
        <Button onClick={() => withdrow()}>提取奖金！</Button>
        提取为了测试没做限制，任何人都可以将里面的测试币提取出来！
      </div>
      <div className='pt-10'>
        此用例是sepolia上。
        如果是本地chain.link MOCK数据 部署完成之后，要手动调用fulfillRandomWords
        运行 '/backend/scripts/mock.ts' ！
      </div>
    </div >
  )
}


