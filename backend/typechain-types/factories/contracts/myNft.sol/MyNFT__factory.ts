/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { MyNFT, MyNFTInterface } from "../../../contracts/myNft.sol/MyNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MyToken_safeMint",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526127106008553480156200001757600080fd5b506040518060400160405280600581526020017f4d794e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b000000000000000000000000000000000000000000000000000000000081525081600090805190602001906200009c929190620001ac565b508060019080519060200190620000b5929190620001ac565b505050620000d8620000cc620000de60201b60201c565b620000e660201b60201c565b620002c1565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001ba906200028b565b90600052602060002090601f016020900481019282620001de57600085556200022a565b82601f10620001f957805160ff19168380011785556200022a565b828001600101855582156200022a579182015b82811115620002295782518255916020019190600101906200020c565b5b5090506200023991906200023d565b5090565b5b80821115620002585760008160009055506001016200023e565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002a457607f821691505b60208210811415620002bb57620002ba6200025c565b5b50919050565b612d5d80620002d16000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102a4578063c87b56dd146102c0578063d204c45e146102f0578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a22cb465146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611dc2565b610358565b6040516101379190611e0a565b60405180910390f35b61014861036a565b6040516101559190611ebe565b60405180910390f35b61017860048036038101906101739190611f16565b6103fc565b6040516101859190611f84565b60405180910390f35b6101a860048036038101906101a39190611fcb565b610442565b005b6101c460048036038101906101bf919061200b565b61055a565b005b6101e060048036038101906101db919061200b565b6105ba565b005b6101fc60048036038101906101f79190611f16565b6105da565b6040516102099190611f84565b60405180910390f35b61022c6004803603810190610227919061205e565b610661565b604051610239919061209a565b60405180910390f35b61024a610719565b005b61025461072d565b6040516102619190611f84565b60405180910390f35b610272610757565b60405161027f9190611ebe565b60405180910390f35b6102a2600480360381019061029d91906120e1565b6107e9565b005b6102be60048036038101906102b99190612256565b6107ff565b005b6102da60048036038101906102d59190611f16565b610861565b6040516102e79190611ebe565b60405180910390f35b61030a6004803603810190610305919061237a565b610873565b005b610326600480360381019061032191906123d6565b6108df565b6040516103339190611e0a565b60405180910390f35b6103566004803603810190610351919061205e565b610973565b005b6000610363826109f7565b9050919050565b60606000805461037990612445565b80601f01602080910402602001604051908101604052809291908181526020018280546103a590612445565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b5050505050905090565b600061040782610a58565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061044d826105da565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b5906124e9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166104dd610aa3565b73ffffffffffffffffffffffffffffffffffffffff16148061050c575061050b81610506610aa3565b6108df565b5b61054b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105429061257b565b60405180910390fd5b6105558383610aab565b505050565b61056b610565610aa3565b82610b64565b6105aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a19061260d565b60405180910390fd5b6105b5838383610bf9565b505050565b6105d5838383604051806020016040528060008152506107ff565b505050565b6000806105e683610ef3565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064f90612679565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c99061270b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610721610f30565b61072b6000610fae565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461076690612445565b80601f016020809104026020016040519081016040528092919081815260200182805461079290612445565b80156107df5780601f106107b4576101008083540402835291602001916107df565b820191906000526020600020905b8154815290600101906020018083116107c257829003601f168201915b5050505050905090565b6107fb6107f4610aa3565b8383611074565b5050565b61081061080a610aa3565b83610b64565b61084f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108469061260d565b60405180910390fd5b61085b848484846111e1565b50505050565b606061086c8261123d565b9050919050565b600061087f6009611350565b905060085481106108bc576040517f5f466be800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108c6600961135e565b6108d08382611374565b6108da8183611392565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61097b610f30565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e29061279d565b60405180910390fd5b6109f481610fae565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a515750610a508261143d565b5b9050919050565b610a618161151f565b610aa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9790612679565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b1e836105da565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b70836105da565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610bb25750610bb181856108df565b5b80610bf057508373ffffffffffffffffffffffffffffffffffffffff16610bd8846103fc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c19826105da565b73ffffffffffffffffffffffffffffffffffffffff1614610c6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c669061282f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd6906128c1565b60405180910390fd5b610cec8383836001611560565b8273ffffffffffffffffffffffffffffffffffffffff16610d0c826105da565b73ffffffffffffffffffffffffffffffffffffffff1614610d62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d599061282f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610eee8383836001611566565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610f38610aa3565b73ffffffffffffffffffffffffffffffffffffffff16610f5661072d565b73ffffffffffffffffffffffffffffffffffffffff1614610fac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa39061292d565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110da90612999565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111d49190611e0a565b60405180910390a3505050565b6111ec848484610bf9565b6111f88484848461156c565b611237576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122e90612a2b565b60405180910390fd5b50505050565b606061124882610a58565b600060066000848152602001908152602001600020805461126890612445565b80601f016020809104026020016040519081016040528092919081815260200182805461129490612445565b80156112e15780601f106112b6576101008083540402835291602001916112e1565b820191906000526020600020905b8154815290600101906020018083116112c457829003601f168201915b5050505050905060006112f2611703565b905060008151141561130857819250505061134b565b60008251111561133d578082604051602001611325929190612a87565b6040516020818303038152906040529250505061134b565b6113468461171a565b925050505b919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b61138e828260405180602001604052806000815250611782565b5050565b61139b8261151f565b6113da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d190612b1d565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611401929190611cb3565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051611431919061209a565b60405180910390a15050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061150857507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806115185750611517826117dd565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661154183610ef3565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b600061158d8473ffffffffffffffffffffffffffffffffffffffff16611847565b156116f6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026115b6610aa3565b8786866040518563ffffffff1660e01b81526004016115d89493929190612b92565b602060405180830381600087803b1580156115f257600080fd5b505af192505050801561162357506040513d601f19601f820116820180604052508101906116209190612bf3565b60015b6116a6573d8060008114611653576040519150601f19603f3d011682016040523d82523d6000602084013e611658565b606091505b5060008151141561169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169590612a2b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116fb565b600190505b949350505050565b606060405180602001604052806000815250905090565b606061172582610a58565b600061172f611703565b9050600081511161174f576040518060200160405280600081525061177a565b806117598461186a565b60405160200161176a929190612a87565b6040516020818303038152906040525b915050919050565b61178c8383611942565b611799600084848461156c565b6117d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117cf90612a2b565b60405180910390fd5b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000600161187984611b60565b01905060008167ffffffffffffffff8111156118985761189761212b565b5b6040519080825280601f01601f1916602001820160405280156118ca5781602001600182028036833780820191505090505b509050600082602001820190505b600115611937578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161192157611920612c20565b5b049450600085141561193257611937565b6118d8565b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119a990612c9b565b60405180910390fd5b6119bb8161151f565b156119fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119f290612d07565b60405180910390fd5b611a09600083836001611560565b611a128161151f565b15611a52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a4990612d07565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611b5c600083836001611566565b5050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611bbe577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611bb457611bb3612c20565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611bfb576d04ee2d6d415b85acef81000000008381611bf157611bf0612c20565b5b0492506020810190505b662386f26fc100008310611c2a57662386f26fc100008381611c2057611c1f612c20565b5b0492506010810190505b6305f5e1008310611c53576305f5e1008381611c4957611c48612c20565b5b0492506008810190505b6127108310611c78576127108381611c6e57611c6d612c20565b5b0492506004810190505b60648310611c9b5760648381611c9157611c90612c20565b5b0492506002810190505b600a8310611caa576001810190505b80915050919050565b828054611cbf90612445565b90600052602060002090601f016020900481019282611ce15760008555611d28565b82601f10611cfa57805160ff1916838001178555611d28565b82800160010185558215611d28579182015b82811115611d27578251825591602001919060010190611d0c565b5b509050611d359190611d39565b5090565b5b80821115611d52576000816000905550600101611d3a565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d9f81611d6a565b8114611daa57600080fd5b50565b600081359050611dbc81611d96565b92915050565b600060208284031215611dd857611dd7611d60565b5b6000611de684828501611dad565b91505092915050565b60008115159050919050565b611e0481611def565b82525050565b6000602082019050611e1f6000830184611dfb565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e5f578082015181840152602081019050611e44565b83811115611e6e576000848401525b50505050565b6000601f19601f8301169050919050565b6000611e9082611e25565b611e9a8185611e30565b9350611eaa818560208601611e41565b611eb381611e74565b840191505092915050565b60006020820190508181036000830152611ed88184611e85565b905092915050565b6000819050919050565b611ef381611ee0565b8114611efe57600080fd5b50565b600081359050611f1081611eea565b92915050565b600060208284031215611f2c57611f2b611d60565b5b6000611f3a84828501611f01565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f6e82611f43565b9050919050565b611f7e81611f63565b82525050565b6000602082019050611f996000830184611f75565b92915050565b611fa881611f63565b8114611fb357600080fd5b50565b600081359050611fc581611f9f565b92915050565b60008060408385031215611fe257611fe1611d60565b5b6000611ff085828601611fb6565b925050602061200185828601611f01565b9150509250929050565b60008060006060848603121561202457612023611d60565b5b600061203286828701611fb6565b935050602061204386828701611fb6565b925050604061205486828701611f01565b9150509250925092565b60006020828403121561207457612073611d60565b5b600061208284828501611fb6565b91505092915050565b61209481611ee0565b82525050565b60006020820190506120af600083018461208b565b92915050565b6120be81611def565b81146120c957600080fd5b50565b6000813590506120db816120b5565b92915050565b600080604083850312156120f8576120f7611d60565b5b600061210685828601611fb6565b9250506020612117858286016120cc565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61216382611e74565b810181811067ffffffffffffffff821117156121825761218161212b565b5b80604052505050565b6000612195611d56565b90506121a1828261215a565b919050565b600067ffffffffffffffff8211156121c1576121c061212b565b5b6121ca82611e74565b9050602081019050919050565b82818337600083830152505050565b60006121f96121f4846121a6565b61218b565b90508281526020810184848401111561221557612214612126565b5b6122208482856121d7565b509392505050565b600082601f83011261223d5761223c612121565b5b813561224d8482602086016121e6565b91505092915050565b600080600080608085870312156122705761226f611d60565b5b600061227e87828801611fb6565b945050602061228f87828801611fb6565b93505060406122a087828801611f01565b925050606085013567ffffffffffffffff8111156122c1576122c0611d65565b5b6122cd87828801612228565b91505092959194509250565b600067ffffffffffffffff8211156122f4576122f361212b565b5b6122fd82611e74565b9050602081019050919050565b600061231d612318846122d9565b61218b565b90508281526020810184848401111561233957612338612126565b5b6123448482856121d7565b509392505050565b600082601f83011261236157612360612121565b5b813561237184826020860161230a565b91505092915050565b6000806040838503121561239157612390611d60565b5b600061239f85828601611fb6565b925050602083013567ffffffffffffffff8111156123c0576123bf611d65565b5b6123cc8582860161234c565b9150509250929050565b600080604083850312156123ed576123ec611d60565b5b60006123fb85828601611fb6565b925050602061240c85828601611fb6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061245d57607f821691505b6020821081141561247157612470612416565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006124d3602183611e30565b91506124de82612477565b604082019050919050565b60006020820190508181036000830152612502816124c6565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612565603d83611e30565b915061257082612509565b604082019050919050565b6000602082019050818103600083015261259481612558565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006125f7602d83611e30565b91506126028261259b565b604082019050919050565b60006020820190508181036000830152612626816125ea565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612663601883611e30565b915061266e8261262d565b602082019050919050565b6000602082019050818103600083015261269281612656565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006126f5602983611e30565b915061270082612699565b604082019050919050565b60006020820190508181036000830152612724816126e8565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612787602683611e30565b91506127928261272b565b604082019050919050565b600060208201905081810360008301526127b68161277a565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612819602583611e30565b9150612824826127bd565b604082019050919050565b600060208201905081810360008301526128488161280c565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006128ab602483611e30565b91506128b68261284f565b604082019050919050565b600060208201905081810360008301526128da8161289e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612917602083611e30565b9150612922826128e1565b602082019050919050565b600060208201905081810360008301526129468161290a565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612983601983611e30565b915061298e8261294d565b602082019050919050565b600060208201905081810360008301526129b281612976565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a15603283611e30565b9150612a20826129b9565b604082019050919050565b60006020820190508181036000830152612a4481612a08565b9050919050565b600081905092915050565b6000612a6182611e25565b612a6b8185612a4b565b9350612a7b818560208601611e41565b80840191505092915050565b6000612a938285612a56565b9150612a9f8284612a56565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612b07602e83611e30565b9150612b1282612aab565b604082019050919050565b60006020820190508181036000830152612b3681612afa565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612b6482612b3d565b612b6e8185612b48565b9350612b7e818560208601611e41565b612b8781611e74565b840191505092915050565b6000608082019050612ba76000830187611f75565b612bb46020830186611f75565b612bc1604083018561208b565b8181036060830152612bd38184612b59565b905095945050505050565b600081519050612bed81611d96565b92915050565b600060208284031215612c0957612c08611d60565b5b6000612c1784828501612bde565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612c85602083611e30565b9150612c9082612c4f565b602082019050919050565b60006020820190508181036000830152612cb481612c78565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612cf1601c83611e30565b9150612cfc82612cbb565b602082019050919050565b60006020820190508181036000830152612d2081612ce4565b905091905056fea26469706673582212203bbab7c831d0d522379914bf99d9f93206f9a8a34ecf1d4af782685bdad2588264736f6c63430008090033";

type MyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNFT__factory extends ContractFactory {
  constructor(...args: MyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MyNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyNFT__factory {
    return super.connect(runner) as MyNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNFTInterface {
    return new Interface(_abi) as MyNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyNFT {
    return new Contract(address, _abi, runner) as unknown as MyNFT;
  }
}