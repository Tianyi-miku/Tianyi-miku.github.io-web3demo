/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  RandomNumberDirectFundingConsumerV2,
  RandomNumberDirectFundingConsumerV2Interface,
} from "../../contracts/RandomNumberDirectFundingConsumerV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_linkAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrapperAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
    ],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LinkTransferError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "RequestNotFound",
    type: "error",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfRequests",
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
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getRequestStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
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
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requestIds",
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
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "_requestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "_numWords",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_requests",
    outputs: [
      {
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200212d3803806200212d833981810160405281019062000037919062000346565b3380600084848173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200011a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011190620003ee565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620001a157620001a081620001ac60201b60201c565b5b505050505062000482565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200021e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002159062000460565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030e82620002e1565b9050919050565b620003208162000301565b81146200032c57600080fd5b50565b600081519050620003408162000315565b92915050565b6000806040838503121562000360576200035f620002dc565b5b600062000370858286016200032f565b925050602062000383858286016200032f565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620003d66018836200038d565b9150620003e3826200039e565b602082019050919050565b600060208201905081810360008301526200040981620003c7565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000620004486017836200038d565b9150620004558262000410565b602082019050919050565b600060208201905081810360008301526200047b8162000439565b9050919050565b60805160a051611c4d620004e06000396000818161022b015281816102e001528181610d5401528181610d750152610eb301526000818161038d015281816107a3015281816107e0015281816109010152610d180152611c4d6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806390e9ca7f1161007157806390e9ca7f14610152578063973884971461016e578063a168fa891461018c578063d8a4676f146101bd578063f2fde38b146101ef578063fc2a88c31461020b576100a9565b80631fe543e3146100ae5780634b494dc0146100ca57806379ba5097146100fa5780638796ba8c146101045780638da5cb5b14610134575b600080fd5b6100c860048036038101906100c39190611381565b610229565b005b6100e460048036038101906100df9190611453565b6102c5565b6040516100f191906114b5565b60405180910390f35b6101026105b5565b005b61011e600480360381019061011991906114d0565b61074a565b60405161012b91906114b5565b60405180910390f35b61013c61076e565b604051610149919061153e565b60405180910390f35b61016c60048036038101906101679190611585565b610797565b005b6101766109ea565b60405161018391906114b5565b60405180910390f35b6101a660048036038101906101a191906114d0565b6109f7565b6040516101b49291906115cd565b60405180910390f35b6101d760048036038101906101d291906114d0565b610a28565b6040516101e6939291906116b4565b60405180910390f35b61020960048036038101906102049190611585565b610b33565b005b610213610b47565b60405161022091906114b5565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ae9061174f565b60405180910390fd5b6102c18282610b4d565b5050565b60006102cf610c84565b6102da848484610d14565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634306d354866040518263ffffffff1660e01b8152600401610337919061177e565b60206040518083038186803b15801561034f57600080fd5b505afa158015610363573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038791906117ae565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103e4919061153e565b60206040518083038186803b1580156103fc57600080fd5b505afa158015610410573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043491906117ae565b90508181101561047d5780826040517f03eb8b540000000000000000000000000000000000000000000000000000000081526004016104749291906117db565b60405180910390fd5b6040518060600160405280838152602001600015158152602001600067ffffffffffffffff8111156104b2576104b161123e565b5b6040519080825280602002602001820160405280156104e05781602001602082028036833780820191505090505b50815250600260008581526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff021916908315150217905550604082015181600201908051906020019061053d92919061116a565b509050506003839080600181540180825580915050600190039060005260206000200160009091909190915055826004819055507f643b454d39972ed209afefa4a771c7a9057229bc7e6b66566f5be8441bf9b1e28385846040516105a493929190611804565b60405180910390a150509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063c90611887565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b6003818154811061075a57600080fd5b906000526020600020016000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61079f610c84565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610837919061153e565b60206040518083038186803b15801561084f57600080fd5b505afa158015610863573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088791906117ae565b6040518363ffffffff1660e01b81526004016108a49291906118a7565b602060405180830381600087803b1580156108be57600080fd5b505af11580156108d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f691906118fc565b9050806109e65733827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610958919061153e565b60206040518083038186803b15801561097057600080fd5b505afa158015610984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a891906117ae565b6040517f5def27d70000000000000000000000000000000000000000000000000000000081526004016109dd93929190611929565b60405180910390fd5b5050565b6000600380549050905090565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b6000806060600060026000868152602001908152602001600020604051806060016040529081600082015481526020016001820160009054906101000a900460ff1615151515815260200160028201805480602002602001604051908101604052809291908181526020018280548015610ac157602002820191906000526020600020905b815481526020019060010190808311610aad575b5050505050815250509050600081600001511415610b1657846040517f4ec726c7000000000000000000000000000000000000000000000000000000008152600401610b0d91906114b5565b60405180910390fd5b806000015181602001518260400151935093509350509193909250565b610b3b610c84565b610b4481610f58565b50565b60045481565b610ba981600081518110610b6457610b63611960565b5b602002602001015182600181518110610b8057610b7f611960565b5b602002602001015183600281518110610b9c57610b9b611960565b5b6020026020010151611085565b6000600260008481526020019081526020016000209050600081600001541415610c0a57826040517f4ec726c7000000000000000000000000000000000000000000000000000000008152600401610c0191906114b5565b60405180910390fd5b60018160010160006101000a81548160ff02191690831515021790555081816002019080519060200190610c3f92919061116a565b507f147eb1ff0c82f87f2b03e2c43f5a36488ff63ec6b730195fde4605f612f8db5183838360000154604051610c779392919061198f565b60405180910390a1505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0990611a19565b60405180910390fd5b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634306d354886040518263ffffffff1660e01b8152600401610dcc919061177e565b60206040518083038186803b158015610de457600080fd5b505afa158015610df8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1c91906117ae565b878787604051602001610e3193929190611a48565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401610e5e93929190611b07565b602060405180830381600087803b158015610e7857600080fd5b505af1158015610e8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb091906118fc565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc2a88c36040518163ffffffff1660e01b815260040160206040518083038186803b158015610f1757600080fd5b505afa158015610f2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4f91906117ae565b90509392505050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610fc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbe90611b91565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b61111f83838360405160240161109d93929190611bb1565b6040516020818303038152906040527fd1ed7a3c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611124565b505050565b61113b8161113361113e61115f565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6111b7819050919050565b8280548282559060005260206000209081019282156111a6579160200282015b828111156111a557825182559160200191906001019061118a565b5b5090506111b391906111c1565b5090565b6111bf611be8565b565b5b808211156111da5760008160009055506001016111c2565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611205816111f2565b811461121057600080fd5b50565b600081359050611222816111fc565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112768261122d565b810181811067ffffffffffffffff821117156112955761129461123e565b5b80604052505050565b60006112a86111de565b90506112b4828261126d565b919050565b600067ffffffffffffffff8211156112d4576112d361123e565b5b602082029050602081019050919050565b600080fd5b60006112fd6112f8846112b9565b61129e565b905080838252602082019050602084028301858111156113205761131f6112e5565b5b835b8181101561134957806113358882611213565b845260208401935050602081019050611322565b5050509392505050565b600082601f83011261136857611367611228565b5b81356113788482602086016112ea565b91505092915050565b60008060408385031215611398576113976111e8565b5b60006113a685828601611213565b925050602083013567ffffffffffffffff8111156113c7576113c66111ed565b5b6113d385828601611353565b9150509250929050565b600063ffffffff82169050919050565b6113f6816113dd565b811461140157600080fd5b50565b600081359050611413816113ed565b92915050565b600061ffff82169050919050565b61143081611419565b811461143b57600080fd5b50565b60008135905061144d81611427565b92915050565b60008060006060848603121561146c5761146b6111e8565b5b600061147a86828701611404565b935050602061148b8682870161143e565b925050604061149c86828701611404565b9150509250925092565b6114af816111f2565b82525050565b60006020820190506114ca60008301846114a6565b92915050565b6000602082840312156114e6576114e56111e8565b5b60006114f484828501611213565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611528826114fd565b9050919050565b6115388161151d565b82525050565b6000602082019050611553600083018461152f565b92915050565b6115628161151d565b811461156d57600080fd5b50565b60008135905061157f81611559565b92915050565b60006020828403121561159b5761159a6111e8565b5b60006115a984828501611570565b91505092915050565b60008115159050919050565b6115c7816115b2565b82525050565b60006040820190506115e260008301856114a6565b6115ef60208301846115be565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61162b816111f2565b82525050565b600061163d8383611622565b60208301905092915050565b6000602082019050919050565b6000611661826115f6565b61166b8185611601565b935061167683611612565b8060005b838110156116a757815161168e8882611631565b975061169983611649565b92505060018101905061167a565b5085935050505092915050565b60006060820190506116c960008301866114a6565b6116d660208301856115be565b81810360408301526116e88184611656565b9050949350505050565b600082825260208201905092915050565b7f6f6e6c792056524620563220777261707065722063616e2066756c66696c6c00600082015250565b6000611739601f836116f2565b915061174482611703565b602082019050919050565b600060208201905081810360008301526117688161172c565b9050919050565b611778816113dd565b82525050565b6000602082019050611793600083018461176f565b92915050565b6000815190506117a8816111fc565b92915050565b6000602082840312156117c4576117c36111e8565b5b60006117d284828501611799565b91505092915050565b60006040820190506117f060008301856114a6565b6117fd60208301846114a6565b9392505050565b600060608201905061181960008301866114a6565b611826602083018561176f565b61183360408301846114a6565b949350505050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006118716016836116f2565b915061187c8261183b565b602082019050919050565b600060208201905081810360008301526118a081611864565b9050919050565b60006040820190506118bc600083018561152f565b6118c960208301846114a6565b9392505050565b6118d9816115b2565b81146118e457600080fd5b50565b6000815190506118f6816118d0565b92915050565b600060208284031215611912576119116111e8565b5b6000611920848285016118e7565b91505092915050565b600060608201905061193e600083018661152f565b61194b602083018561152f565b61195860408301846114a6565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006060820190506119a460008301866114a6565b81810360208301526119b68185611656565b90506119c560408301846114a6565b949350505050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b6000611a036016836116f2565b9150611a0e826119cd565b602082019050919050565b60006020820190508181036000830152611a32816119f6565b9050919050565b611a4281611419565b82525050565b6000606082019050611a5d600083018661176f565b611a6a6020830185611a39565b611a77604083018461176f565b949350505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ab9578082015181840152602081019050611a9e565b83811115611ac8576000848401525b50505050565b6000611ad982611a7f565b611ae38185611a8a565b9350611af3818560208601611a9b565b611afc8161122d565b840191505092915050565b6000606082019050611b1c600083018661152f565b611b2960208301856114a6565b8181036040830152611b3b8184611ace565b9050949350505050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000611b7b6017836116f2565b9150611b8682611b45565b602082019050919050565b60006020820190508181036000830152611baa81611b6e565b9050919050565b6000606082019050611bc660008301866114a6565b611bd360208301856114a6565b611be060408301846114a6565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea26469706673582212200c8f96575b9bf91814597be074d52e99d118d9999cb363f3248fa5156c75fb7864736f6c63430008090033";

type RandomNumberDirectFundingConsumerV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RandomNumberDirectFundingConsumerV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RandomNumberDirectFundingConsumerV2__factory extends ContractFactory {
  constructor(...args: RandomNumberDirectFundingConsumerV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _linkAddress: AddressLike,
    _wrapperAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _linkAddress,
      _wrapperAddress,
      overrides || {}
    );
  }
  override deploy(
    _linkAddress: AddressLike,
    _wrapperAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _linkAddress,
      _wrapperAddress,
      overrides || {}
    ) as Promise<
      RandomNumberDirectFundingConsumerV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): RandomNumberDirectFundingConsumerV2__factory {
    return super.connect(
      runner
    ) as RandomNumberDirectFundingConsumerV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomNumberDirectFundingConsumerV2Interface {
    return new Interface(_abi) as RandomNumberDirectFundingConsumerV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RandomNumberDirectFundingConsumerV2 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as RandomNumberDirectFundingConsumerV2;
  }
}