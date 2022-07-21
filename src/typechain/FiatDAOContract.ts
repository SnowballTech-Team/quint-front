/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface FiatDAOContractInterface extends utils.Interface {
  functions: {
    "balanceOf(address,address)": FunctionFragment;
    "computeNewMultiplier(uint256,uint128,uint256,uint128)": FunctionFragment;
    "currentEpochMultiplier()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "emergencyWithdraw(address)": FunctionFragment;
    "epoch1Start()": FunctionFragment;
    "epochDuration()": FunctionFragment;
    "epochIsInitialized(address,uint128)": FunctionFragment;
    "getCurrentEpoch()": FunctionFragment;
    "getEpochPoolSize(address,uint128)": FunctionFragment;
    "getEpochUserBalance(address,address,uint128)": FunctionFragment;
    "manualEpochInit(address[],uint128)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string, string]): string;
  encodeFunctionData(
    functionFragment: "computeNewMultiplier",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "currentEpochMultiplier", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "emergencyWithdraw", values: [string]): string;
  encodeFunctionData(functionFragment: "epoch1Start", values?: undefined): string;
  encodeFunctionData(functionFragment: "epochDuration", values?: undefined): string;
  encodeFunctionData(functionFragment: "epochIsInitialized", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "getCurrentEpoch", values?: undefined): string;
  encodeFunctionData(functionFragment: "getEpochPoolSize", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "getEpochUserBalance", values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "manualEpochInit", values: [string[], BigNumberish]): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "computeNewMultiplier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "currentEpochMultiplier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epoch1Start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epochDuration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epochIsInitialized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCurrentEpoch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEpochPoolSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEpochUserBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manualEpochInit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,address,uint256)": EventFragment;
    "EmergencyWithdraw(address,address,uint256)": EventFragment;
    "ManualEpochInit(address,uint128,address[])": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ManualEpochInit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, string, BigNumber],
  { user: string; tokenAddress: string; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  { user: string; tokenAddress: string; amount: BigNumber }
>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export type ManualEpochInitEvent = TypedEvent<
  [string, BigNumber, string[]],
  { caller: string; epochId: BigNumber; tokens: string[] }
>;

export type ManualEpochInitEventFilter = TypedEventFilter<ManualEpochInitEvent>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  { user: string; tokenAddress: string; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface FiatDAOContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FiatDAOContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(user: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    epoch1Start(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochIsInitialized(token: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochPoolSize(tokenAddress: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  balanceOf(user: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;

  computeNewMultiplier(
    prevBalance: BigNumberish,
    prevMultiplier: BigNumberish,
    amount: BigNumberish,
    currentMultiplier: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  epoch1Start(overrides?: CallOverrides): Promise<BigNumber>;

  epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

  epochIsInitialized(token: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochPoolSize(tokenAddress: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getEpochUserBalance(
    user: string,
    token: string,
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  manualEpochInit(
    tokens: string[],
    epochId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(user: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(tokenAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(tokenAddress: string, overrides?: CallOverrides): Promise<void>;

    epoch1Start(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    epochIsInitialized(token: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochPoolSize(tokenAddress: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    manualEpochInit(tokens: string[], epochId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdraw(tokenAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Deposit(address,address,uint256)"(
      user?: string | null,
      tokenAddress?: string | null,
      amount?: null,
    ): DepositEventFilter;
    Deposit(user?: string | null, tokenAddress?: string | null, amount?: null): DepositEventFilter;

    "EmergencyWithdraw(address,address,uint256)"(
      user?: string | null,
      tokenAddress?: string | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(user?: string | null, tokenAddress?: string | null, amount?: null): EmergencyWithdrawEventFilter;

    "ManualEpochInit(address,uint128,address[])"(
      caller?: string | null,
      epochId?: BigNumberish | null,
      tokens?: null,
    ): ManualEpochInitEventFilter;
    ManualEpochInit(caller?: string | null, epochId?: BigNumberish | null, tokens?: null): ManualEpochInitEventFilter;

    "Withdraw(address,address,uint256)"(
      user?: string | null,
      tokenAddress?: string | null,
      amount?: null,
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, tokenAddress?: string | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    balanceOf(user: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    epoch1Start(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    epochIsInitialized(token: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochPoolSize(tokenAddress: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(user: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    epoch1Start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochIsInitialized(token: string, epochId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEpochPoolSize(
      tokenAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getEpochUserBalance(
      user: string,
      token: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    manualEpochInit(
      tokens: string[],
      epochId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
