"use client"
import { useEthersSigner } from '@/app/provider_ether'
import { Contract, ethers, formatEther, parseEther } from 'ethers'
import React, { useEffect, useState } from 'react'
import { crossBridge_polygon, crossBridge_sepolia } from '../contact'
import { fetchBalance } from '@wagmi/core'
import { usePublicClient } from 'wagmi'
import { Button } from 'antd'

// 初始化两条链的provider
const providerPolygon = new ethers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/${process.env.Polygon_scan_key}`);
const providerSepolia = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.Sepolia_scan_key}`);


// 初始化两条链的signer
// privateKey填管理者钱包的私钥
const privateKey = process.env.privateKey || '';
console.log(process);

const walletPolygon = new ethers.Wallet(privateKey, providerPolygon);
const walletSepolia = new ethers.Wallet(privateKey, providerSepolia);

const crossBridgeAbi: any = require("../../../../contracts/crossBridge.json").abi
export default function page() {

  const [s_balance, sets_Balance] = useState('0')
  const [p_balance, setp_Balance1] = useState('0')

  const [loading, setloading] = useState(false)
  const [loading1, setloading1] = useState(false)
  const [mintloading, setmintloading] = useState(false)
  const [mintloading1, setmintloading1] = useState(false)
  const signer = useEthersSigner()

  const CrossBridge_s = new Contract(crossBridge_sepolia, crossBridgeAbi, walletSepolia)
  // const CrossBridge_s = new Contract(crossBridge_sepolia, crossBridgeAbi, signer)
  // const CrossBridge_p = new Contract(crossBridge_polygon, crossBridgeAbi, signer)
  const CrossBridge_p = new Contract(crossBridge_polygon, crossBridgeAbi, walletPolygon)


  useEffect(() => {
    if (CrossBridge_s.runner) {
      getBalance()
    }
    return () => {
    }
  }, [CrossBridge_s.runner])

  useEffect(() => {
    if (CrossBridge_p.runner) {
      getBalance1()
    }
    return () => {
    }
  }, [CrossBridge_p.runner])


  const s_onBrideg = () => {
    console.log('监听');
    CrossBridge_s.on("Bridge", async (user, amount) => {
      console.log('CrossBridge_s');
      let tx = await CrossBridge_p.mint(amount);
      await tx.wait();
    })
  }


  const p_onBrideg = () => {
    console.log('监听');
    CrossBridge_p.on("Bridge", async (user, amount) => {
      console.log('CrossBridge_s');
      let tx = await CrossBridge_s.mint(amount);
      await tx.wait();
    })
  }

  useEffect(() => {
    if (CrossBridge_p.runner && CrossBridge_s.runner) {
      p_onBrideg()
      s_onBrideg()
    }
    return () => {
    }
  }, [CrossBridge_p.runner, CrossBridge_s.runner])




  const getBalance = async () => {
    const balance = await CrossBridge_s.balanceOf(await walletSepolia.getAddress())
    sets_Balance(formatEther(balance).toString())
  }

  const getBalance1 = async () => {
    const balance = await CrossBridge_p.balanceOf(await walletPolygon.getAddress())
    console.log(balance);
    setp_Balance1(formatEther(balance).toString())
  }

  const Mint = async (fnc: any) => {
    setmintloading(true)
    const trans = await fnc.mint(parseEther('100'))
    await trans.wait()
    getBalance()
    setmintloading(false)
  }

  const Mint1 = async (fnc: any) => {
    setmintloading1(true)
    const trans = await fnc.mint(parseEther('100'))
    await trans.wait()
    getBalance()
    setmintloading1(false)
  }

  const bridge = async (fnc: any) => {
    setloading(true)
    const trans = await fnc.bridge(parseEther('1'))
    await trans.wait()
    getBalance()
    getBalance1()
    setloading(false)
  }

  const bridge1 = async (fnc: any) => {
    setloading1(true)
    const trans = await fnc.bridge(parseEther('1'))
    await trans.wait()
    getBalance()
    getBalance1()
    setloading1(false)
  }

  return (
    <>
      <div>两种简单的跨链桥!</div>
      <div>这里是第一种,自定义项目上用的 在两个链上分别部署合约,在前端中监听跨链操作!</div>
      <div>注意,这里没有处理监听失败交易失败的问题!所以转币的时候不要跳转其他页面!</div>
      <div>另一种使用预言机或者其他去中心化跨链桥!</div>
      <div className='flex'>
        <div className='w-1/2'>
          sepolia
          <div>
            <Button onClick={() => Mint1(CrossBridge_s)} loading={mintloading1}>mint</Button>
          </div>
          <div>
            {s_balance}
          </div>
          <div>
            <Button onClick={() => bridge1(CrossBridge_s)} loading={loading1}>转让1个代币</Button>
          </div>
        </div>
        <div className='w-1/2'>
          polygon
          <div>
            <Button onClick={() => Mint(CrossBridge_p)} loading={mintloading}>mint</Button>
          </div>
          <div>
            {p_balance}
          </div>
          <div>
            <Button onClick={() => bridge(CrossBridge_p)} loading={loading}>转让1个代币</Button>
          </div>
        </div>
      </div>
    </>
  )
}
