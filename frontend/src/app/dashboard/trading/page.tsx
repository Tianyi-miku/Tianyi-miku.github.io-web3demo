'use client'
import { Button, Form, Input, InputNumber } from 'antd'
import { Contract, ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { Erc20, Erc20_1, Trading_swap } from '../contact'
import { useEthersSigner } from '@/app/provider_ether'
import { formatEther, parseEther, parseUnits } from 'viem'

const myErc20ABI: any = require("../../../../contracts/myERC20.json").abi
const Trading: any = require("../../../../contracts/Trading_swap.json").abi
const MyTrading = () => {
  const signer = useEthersSigner()
  const myErc20 = new Contract(Erc20, myErc20ABI, signer)
  const myErc20_1 = new Contract(Erc20_1, myErc20ABI, signer)
  const swap = new Contract(Trading_swap, Trading, signer)

  const [form] = Form.useForm();
  const [form1] = Form.useForm();

  const [balance, setbalance] = useState({
    mytoken1: '',
    mytoken2: '',
    swaptoken1: '',
    swaptoken2: ''
  })

  //因为气体限制兑换最大,默认最小兑换值为0
  const onFinish1 = async (values: any) => {
    const from = values
    const data = await swap.myswap(parseEther(from.token1.toString()), Erc20, parseEther(`0`))
    await data.wait()
    getblance()
  };

  const onFinish2 = async (values: any) => {
    const from = values
    const data = await swap.myswap(parseEther(from.token2.toString()), Erc20_1, parseEther(`0`))
    await data.wait()
    getblance()
  };


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    token1?: string;
    token2?: string;
    amout1?: string;
    amout2?: string;
  };

  useEffect(() => {
    if (myErc20.runner && myErc20_1.runner && swap.runner) {
      getblance()
    }
    return () => {
    }
  }, [myErc20.runner, myErc20_1.runner, swap.runner])

  const getblance = async () => {
    const balance1 = await myErc20.balanceOf(signer?.address)
    const balance2 = await myErc20_1.balanceOf(signer?.address)

    const address = await swap.getAddress()
    const balance3 = await myErc20.balanceOf(address)
    const balance4 = await myErc20_1.balanceOf(address)

    const balance = {
      mytoken1: formatEther(balance1).toString(),
      mytoken2: formatEther(balance2).toString(),
      swaptoken1: formatEther(balance3).toString(),
      swaptoken2: formatEther(balance4).toString(),
    }
    setbalance(balance)
  }


  const getToken1Mount = async () => {
    const token1 = form.getFieldsValue().token1
    //默认最低1
    const mount = await swap.getAmountOut(parseEther(token1.toString()), parseEther(balance.mytoken1.toString()), parseEther(balance.mytoken2.toString()))
    form.setFieldsValue({ amout1: Number(formatEther(mount)).toString() })
  }

  const getToken2Mount = async () => {
    const token2 = form1.getFieldsValue().token2
    //默认最低1
    const mount = await swap.getAmountOut(parseEther(token2.toString()), parseEther(balance.mytoken2.toString()), parseEther(balance.mytoken1.toString()))
    form1.setFieldsValue({ amout2: Number(formatEther(mount)).toString() })
  }

  const approve = async () => {
    const eaddress = await swap.getAddress()
    await myErc20.approve(eaddress, parseEther('1000'))
    await myErc20_1.approve(eaddress, parseEther('1000'))
  }

  const addLiquidity = async () => {
    await swap.addLiquidity(parseEther('100'), parseEther('100'))
  }


  const getmytransfer = async () => {
    const filterTo = swap.filters.Transfer(signer?.address)

    // 在最新的10个区块内查询我发送的交易
    const logsFrom = await swap.queryFilter(filterTo, -10, "latest");
    console.log(logsFrom);
  }

  const mint = async () => {
    await myErc20.mint(parseEther('1000'))
    const rept = await myErc20_1.mint(parseEther('1000'))
    await rept.wait()
    getblance()
  }


  return (
    <div>
      <Button onClick={() => getmytransfer()}>获取10个块交易记录</Button>
      <div>
        <p>因为是测试代币,先在Sepolia上部署两个ERC20,发行两个不同的代币!,同时mint两个名为token1和token2的代币,数量暂定1000.</p>
        <p>铸造完之后,先授权给合约! 不然会报错</p>
        <p>池子如果代币为0,先转100代币到池子里</p>
        <p>现在可以开始交易了!</p>
      </div>
      <div className='flex'>
        <div className='pr-10'>
          我的
          <p>
            token1:  {balance.mytoken1}
          </p>
          <p>
            token2:  {balance.mytoken2}
          </p>
        </div>
        <div>
          池子中可交换的
          <p>
            token1:  {balance.swaptoken1}
          </p>
          <p>
            token2:  {balance.swaptoken2}
          </p>
        </div>
      </div>
      <div>
        <div>
          <Button onClick={() => mint()}>先铸造1000个token1与1000个token2!</Button>
        </div>
        <Button onClick={() => approve()}>授权</Button>

        <Button onClick={() => addLiquidity()}>各转100币到池子里</Button>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish1}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item<FieldType>
            label="token1"
            name="token1"
            rules={[{ required: true, message: 'Please input your token1!' }]}
          >
            <InputNumber className='w-80' />
          </Form.Item>

          <Form.Item<FieldType>
            label="token2"
            name="amout1"
            rules={[{ required: true, message: 'Please input your amout1!' }]}
          >
            <InputNumber className='w-80' disabled />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={() => getToken1Mount()}>
              预计兑换多少
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Form
        name="basic1"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish2}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form1}
      >
        <Form.Item<FieldType>
          label="token2"
          name="token2"
          rules={[{ required: true, message: 'Please input your token2!' }]}
        >
          <InputNumber className='w-80' />
        </Form.Item>

        <Form.Item<FieldType>
          label="token1"
          name="amout2"
          rules={[{ required: true, message: 'Please input your amout2!' }]}
        >
          <InputNumber className='w-80' disabled />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={() => getToken2Mount()}>
            预计兑换多少
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default MyTrading