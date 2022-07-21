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

export interface DaiBondContractInterface extends utils.Interface {
  functions: {
    "DAI()": FunctionFragment;
    "DAOShare()": FunctionFragment;
    "DAOWallet()": FunctionFragment;
    "OHM()": FunctionFragment;
    "bondControlVariable()": FunctionFragment;
    "calculateBondInterest(uint256)": FunctionFragment;
    "calculatePendingPayout(address)": FunctionFragment;
    "calculatePercentVested(address)": FunctionFragment;
    "calculatePremium()": FunctionFragment;
    "circulatingOHMContract()": FunctionFragment;
    "deposit(uint256,uint256,address)": FunctionFragment;
    "depositWithPermit(uint256,uint256,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "depositorInfo(address)": FunctionFragment;
    "getDepositorInfo(address)": FunctionFragment;
    "getMaxPayoutAmount()": FunctionFragment;
    "maxPayoutPercent()": FunctionFragment;
    "minPremium()": FunctionFragment;
    "owner()": FunctionFragment;
    "redeem()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBondTerms(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "stakingContract()": FunctionFragment;
    "toggleUseCircForDebtRatio()": FunctionFragment;
    "totalDebt()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "useCircForDebtRatio()": FunctionFragment;
    "vestingPeriodInBlocks()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "DAOShare", values?: undefined): string;
  encodeFunctionData(functionFragment: "DAOWallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "OHM", values?: undefined): string;
  encodeFunctionData(functionFragment: "bondControlVariable", values?: undefined): string;
  encodeFunctionData(functionFragment: "calculateBondInterest", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "calculatePendingPayout", values: [string]): string;
  encodeFunctionData(functionFragment: "calculatePercentVested", values: [string]): string;
  encodeFunctionData(functionFragment: "calculatePremium", values?: undefined): string;
  encodeFunctionData(functionFragment: "circulatingOHMContract", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, BigNumberish, string]): string;
  encodeFunctionData(
    functionFragment: "depositWithPermit",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: "depositorInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "getDepositorInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "getMaxPayoutAmount", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxPayoutPercent", values?: undefined): string;
  encodeFunctionData(functionFragment: "minPremium", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "redeem", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBondTerms",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "stakingContract", values?: undefined): string;
  encodeFunctionData(functionFragment: "toggleUseCircForDebtRatio", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "useCircForDebtRatio", values?: undefined): string;
  encodeFunctionData(functionFragment: "vestingPeriodInBlocks", values?: undefined): string;

  decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DAOShare", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DAOWallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OHM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bondControlVariable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calculateBondInterest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calculatePendingPayout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calculatePercentVested", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calculatePremium", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "circulatingOHMContract", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositWithPermit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositorInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDepositorInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMaxPayoutAmount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxPayoutPercent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minPremium", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBondTerms", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakingContract", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toggleUseCircForDebtRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "useCircForDebtRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vestingPeriodInBlocks", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface DaiBondContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DaiBondContractInterface;

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
    DAI(overrides?: CallOverrides): Promise<[string]>;

    DAOShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    DAOWallet(overrides?: CallOverrides): Promise<[string]>;

    OHM(overrides?: CallOverrides): Promise<[string]>;

    bondControlVariable(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateBondInterest(
      value_: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { _interestDue: BigNumber }>;

    calculatePendingPayout(depositor_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    calculatePercentVested(
      depositor_: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { _percentVested: BigNumber }>;

    calculatePremium(overrides?: CallOverrides): Promise<[BigNumber] & { _premium: BigNumber }>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    depositWithPermit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    depositorInfo(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        payoutRemaining: BigNumber;
        lastBlock: BigNumber;
        vestingPeriod: BigNumber;
      }
    >;

    getDepositorInfo(
      address_: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _value: BigNumber;
        _payoutRemaining: BigNumber;
        _lastBlock: BigNumber;
        _vestingPeriod: BigNumber;
      }
    >;

    getMaxPayoutAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    minPremium(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    redeem(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setBondTerms(
      bondControlVariable_: BigNumberish,
      vestingPeriodInBlocks_: BigNumberish,
      minPremium_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stakingContract(overrides?: CallOverrides): Promise<[string]>;

    toggleUseCircForDebtRatio(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    useCircForDebtRatio(overrides?: CallOverrides): Promise<[boolean]>;

    vestingPeriodInBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DAI(overrides?: CallOverrides): Promise<string>;

  DAOShare(overrides?: CallOverrides): Promise<BigNumber>;

  DAOWallet(overrides?: CallOverrides): Promise<string>;

  OHM(overrides?: CallOverrides): Promise<string>;

  bondControlVariable(overrides?: CallOverrides): Promise<BigNumber>;

  calculateBondInterest(value_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  calculatePendingPayout(depositor_: string, overrides?: CallOverrides): Promise<BigNumber>;

  calculatePercentVested(depositor_: string, overrides?: CallOverrides): Promise<BigNumber>;

  calculatePremium(overrides?: CallOverrides): Promise<BigNumber>;

  circulatingOHMContract(overrides?: CallOverrides): Promise<string>;

  deposit(
    amount_: BigNumberish,
    maxPremium_: BigNumberish,
    depositor_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  depositWithPermit(
    amount_: BigNumberish,
    maxPremium_: BigNumberish,
    depositor_: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  depositorInfo(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      value: BigNumber;
      payoutRemaining: BigNumber;
      lastBlock: BigNumber;
      vestingPeriod: BigNumber;
    }
  >;

  getDepositorInfo(
    address_: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      _value: BigNumber;
      _payoutRemaining: BigNumber;
      _lastBlock: BigNumber;
      _vestingPeriod: BigNumber;
    }
  >;

  getMaxPayoutAmount(overrides?: CallOverrides): Promise<BigNumber>;

  maxPayoutPercent(overrides?: CallOverrides): Promise<BigNumber>;

  minPremium(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  redeem(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setBondTerms(
    bondControlVariable_: BigNumberish,
    vestingPeriodInBlocks_: BigNumberish,
    minPremium_: BigNumberish,
    maxPayout_: BigNumberish,
    DAOShare_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stakingContract(overrides?: CallOverrides): Promise<string>;

  toggleUseCircForDebtRatio(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  useCircForDebtRatio(overrides?: CallOverrides): Promise<boolean>;

  vestingPeriodInBlocks(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DAI(overrides?: CallOverrides): Promise<string>;

    DAOShare(overrides?: CallOverrides): Promise<BigNumber>;

    DAOWallet(overrides?: CallOverrides): Promise<string>;

    OHM(overrides?: CallOverrides): Promise<string>;

    bondControlVariable(overrides?: CallOverrides): Promise<BigNumber>;

    calculateBondInterest(value_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePendingPayout(depositor_: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePercentVested(depositor_: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePremium(overrides?: CallOverrides): Promise<BigNumber>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<string>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    depositWithPermit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    depositorInfo(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        payoutRemaining: BigNumber;
        lastBlock: BigNumber;
        vestingPeriod: BigNumber;
      }
    >;

    getDepositorInfo(
      address_: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _value: BigNumber;
        _payoutRemaining: BigNumber;
        _lastBlock: BigNumber;
        _vestingPeriod: BigNumber;
      }
    >;

    getMaxPayoutAmount(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<BigNumber>;

    minPremium(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    redeem(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBondTerms(
      bondControlVariable_: BigNumberish,
      vestingPeriodInBlocks_: BigNumberish,
      minPremium_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    stakingContract(overrides?: CallOverrides): Promise<string>;

    toggleUseCircForDebtRatio(overrides?: CallOverrides): Promise<boolean>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner_: string, overrides?: CallOverrides): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    useCircForDebtRatio(overrides?: CallOverrides): Promise<boolean>;

    vestingPeriodInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    DAI(overrides?: CallOverrides): Promise<BigNumber>;

    DAOShare(overrides?: CallOverrides): Promise<BigNumber>;

    DAOWallet(overrides?: CallOverrides): Promise<BigNumber>;

    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    bondControlVariable(overrides?: CallOverrides): Promise<BigNumber>;

    calculateBondInterest(value_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePendingPayout(depositor_: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePercentVested(depositor_: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePremium(overrides?: CallOverrides): Promise<BigNumber>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    depositWithPermit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    depositorInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getDepositorInfo(address_: string, overrides?: CallOverrides): Promise<BigNumber>;

    getMaxPayoutAmount(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<BigNumber>;

    minPremium(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setBondTerms(
      bondControlVariable_: BigNumberish,
      vestingPeriodInBlocks_: BigNumberish,
      minPremium_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    stakingContract(overrides?: CallOverrides): Promise<BigNumber>;

    toggleUseCircForDebtRatio(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    useCircForDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    vestingPeriodInBlocks(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAOShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAOWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondControlVariable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateBondInterest(value_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePendingPayout(depositor_: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePercentVested(depositor_: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePremium(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    circulatingOHMContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    depositWithPermit(
      amount_: BigNumberish,
      maxPremium_: BigNumberish,
      depositor_: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    depositorInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDepositorInfo(address_: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxPayoutAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxPayoutPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minPremium(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setBondTerms(
      bondControlVariable_: BigNumberish,
      vestingPeriodInBlocks_: BigNumberish,
      minPremium_: BigNumberish,
      maxPayout_: BigNumberish,
      DAOShare_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stakingContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    toggleUseCircForDebtRatio(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    useCircForDebtRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingPeriodInBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
