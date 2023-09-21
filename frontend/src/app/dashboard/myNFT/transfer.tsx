"use client";

import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { sepolia } from 'viem/chains'
import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { NFTAddress } from '../contact';

const myNFTABI: any = require("../../../../contracts/MyNFT.json").abi
const Transfer = (prop: any) => {
  const [inputValue, setInputValue] = useState('')

  const changeInput = (e: any) => {
    setInputValue(e.target.value)
  }

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum)
  })
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: custom(window.ethereum)
  })

  const suapprove = async (value: string) => {
    const [account] = await walletClient.getAddresses()
    await walletClient.writeContract({
      account,
      chain: sepolia,
      address: NFTAddress,
      abi: myNFTABI,
      functionName: 'approve',
      args: [NFTAddress, prop.tokenId]
    })
  }

  const sutransfer = async (value: string) => {
    const [account] = await walletClient.getAddresses()
    const trans = await walletClient.writeContract({
      account,
      address: NFTAddress,
      abi: myNFTABI,
      functionName: 'safeTransferFrom',
      args: [prop.from, value, prop.tokenId]
    })
    return trans
  }

  const transferTO = async (value: string) => {
    await suapprove(value)
    const rep = await sutransfer(value)
    console.log('====================================');
    console.log('转让成功');
    console.log('====================================');
    prop.sendSuccess()
  }

  return (
    <div>
      <Input value={inputValue} onChange={(e) => changeInput(e)}></Input>
      <Button key="submit" onClick={() => transferTO(inputValue)} >转让</Button>
    </div>
  )
}

export default Transfer