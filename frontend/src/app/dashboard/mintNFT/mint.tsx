import { Button } from 'antd'
import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { NFTAddress } from '../contact'

const myNFTABI = require("../../../../contracts/MyNFT.json").abi
const Mint = (prop: any) => {
  const { config } = usePrepareContractWrite({
    address: NFTAddress,
    abi: myNFTABI,
    functionName: 'safeMint',
    args: [prop.address, prop.params]
  })
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div>
      <Button className='w-full' disabled={!write || isLoading} onClick={() => write ? write() : console.log('失败')
      }>
        {isLoading ? 'Minting...' : 'Mint'}
      </Button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
        </div>
      )}
    </div>
  )
}

export default Mint
