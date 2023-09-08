"use client";

import useNotication from '@/app/_util/notication'
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
    await walletClient.writeContract({
      account,
      address: NFTAddress,
      abi: myNFTABI,
      functionName: 'safeTransferFrom',
      args: [prop.from, value, prop.tokenId]
    })
  }

  // const getApprove = async () => {
  //   const data2 = await publicClient.readContract({
  //     address: NFTAddress,
  //     abi: myNFTABI,
  //     functionName: 'getApproved',
  //     args: [prop.tokenId]
  //   })
  //   console.log(data2);
  // }

  const transferTO = async (value: string) => {
    await suapprove(value)
    await sutransfer(value)
    // const r = await getApprove()

    setTimeout(() => {
      prop.sendSuccess()
    }, 10000);
  }

  return (
    <div>
      <Input value={inputValue} onChange={(e) => changeInput(e)}></Input>
      <Button key="submit" onClick={() => transferTO(inputValue)} >转让</Button>
    </div>
  )
}

export default Transfer