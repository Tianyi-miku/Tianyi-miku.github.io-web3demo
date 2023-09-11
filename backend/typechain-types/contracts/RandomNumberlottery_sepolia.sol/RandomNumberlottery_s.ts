/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface RandomNumberlottery_sInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "getNumberOfRequests"
      | "getRequestStatus"
      | "getwiner"
      | "joinPlay"
      | "lastRequestId"
      | "owner"
      | "peopleTomoney"
      | "rawFulfillRandomWords"
      | "requestIds"
      | "requestRandomWords"
      | "s_requests"
      | "transferOwnership"
      | "winerdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Log"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
      | "RequestFulfilled"
      | "RequestSent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getwiner", values?: undefined): string;
  encodeFunctionData(functionFragment: "joinPlay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "peopleTomoney",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requestIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_requests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "winerdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getwiner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinPlay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peopleTomoney",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requestIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "s_requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "winerdraw", data: BytesLike): Result;
}

export namespace LogEvent {
  export type InputTuple = [
    arg0: AddressLike,
    arg1: BigNumberish,
    arg2: BigNumberish
  ];
  export type OutputTuple = [arg0: string, arg1: bigint, arg2: bigint];
  export interface OutputObject {
    arg0: string;
    arg1: bigint;
    arg2: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestFulfilledEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    winer: AddressLike
  ];
  export type OutputTuple = [
    requestId: bigint,
    randomWords: bigint[],
    winer: string
  ];
  export interface OutputObject {
    requestId: bigint;
    randomWords: bigint[];
    winer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestSentEvent {
  export type InputTuple = [requestId: BigNumberish, numWords: BigNumberish];
  export type OutputTuple = [requestId: bigint, numWords: bigint];
  export interface OutputObject {
    requestId: bigint;
    numWords: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RandomNumberlottery_s extends BaseContract {
  connect(runner?: ContractRunner | null): RandomNumberlottery_s;
  waitForDeployment(): Promise<this>;

  interface: RandomNumberlottery_sInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  getNumberOfRequests: TypedContractMethod<[], [bigint], "view">;

  getRequestStatus: TypedContractMethod<
    [_requestId: BigNumberish],
    [[boolean, bigint[]] & { fulfilled: boolean; randomWords: bigint[] }],
    "view"
  >;

  getwiner: TypedContractMethod<[], [string], "view">;

  joinPlay: TypedContractMethod<[], [void], "payable">;

  lastRequestId: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  peopleTomoney: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  rawFulfillRandomWords: TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  requestIds: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  requestRandomWords: TypedContractMethod<[], [bigint], "nonpayable">;

  s_requests: TypedContractMethod<
    [arg0: BigNumberish],
    [[boolean, boolean] & { fulfilled: boolean; exists: boolean }],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  winerdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getNumberOfRequests"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRequestStatus"
  ): TypedContractMethod<
    [_requestId: BigNumberish],
    [[boolean, bigint[]] & { fulfilled: boolean; randomWords: bigint[] }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getwiner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "joinPlay"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "lastRequestId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peopleTomoney"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rawFulfillRandomWords"
  ): TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestIds"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "requestRandomWords"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "s_requests"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[boolean, boolean] & { fulfilled: boolean; exists: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "winerdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "Log"
  ): TypedContractEvent<
    LogEvent.InputTuple,
    LogEvent.OutputTuple,
    LogEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RequestFulfilled"
  ): TypedContractEvent<
    RequestFulfilledEvent.InputTuple,
    RequestFulfilledEvent.OutputTuple,
    RequestFulfilledEvent.OutputObject
  >;
  getEvent(
    key: "RequestSent"
  ): TypedContractEvent<
    RequestSentEvent.InputTuple,
    RequestSentEvent.OutputTuple,
    RequestSentEvent.OutputObject
  >;

  filters: {
    "Log(address,uint256,uint256)": TypedContractEvent<
      LogEvent.InputTuple,
      LogEvent.OutputTuple,
      LogEvent.OutputObject
    >;
    Log: TypedContractEvent<
      LogEvent.InputTuple,
      LogEvent.OutputTuple,
      LogEvent.OutputObject
    >;

    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RequestFulfilled(uint256,uint256[],address)": TypedContractEvent<
      RequestFulfilledEvent.InputTuple,
      RequestFulfilledEvent.OutputTuple,
      RequestFulfilledEvent.OutputObject
    >;
    RequestFulfilled: TypedContractEvent<
      RequestFulfilledEvent.InputTuple,
      RequestFulfilledEvent.OutputTuple,
      RequestFulfilledEvent.OutputObject
    >;

    "RequestSent(uint256,uint32)": TypedContractEvent<
      RequestSentEvent.InputTuple,
      RequestSentEvent.OutputTuple,
      RequestSentEvent.OutputObject
    >;
    RequestSent: TypedContractEvent<
      RequestSentEvent.InputTuple,
      RequestSentEvent.OutputTuple,
      RequestSentEvent.OutputObject
    >;
  };
}