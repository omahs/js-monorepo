// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'PerpsV2MarketSettings';
export const address = '0xd442Dc2Ac1f3cA1C86C8329246e47Ca0C91D0471';
export const source = 'PerpsV2MarketSettings';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event LiquidationBufferRatioUpdated(uint256 bps)',
  'event LiquidationFeeRatioUpdated(uint256 bps)',
  'event MinInitialMarginUpdated(uint256 minMargin)',
  'event MinKeeperFeeUpdated(uint256 sUSD)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event ParameterUpdated(bytes32 indexed marketKey, bytes32 indexed parameter, uint256 value)',
  'event ParameterUpdatedBytes32(bytes32 indexed marketKey, bytes32 indexed parameter, bytes32 value)',
  'function acceptOwnership()',
  'function delayedOrderConfirmWindow(bytes32 _marketKey) view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function liquidationBufferRatio() view returns (uint256)',
  'function liquidationFeeRatio() view returns (uint256)',
  'function makerFee(bytes32 _marketKey) view returns (uint256)',
  'function makerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)',
  'function makerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)',
  'function maxDelayTimeDelta(bytes32 _marketKey) view returns (uint256)',
  'function maxFundingVelocity(bytes32 _marketKey) view returns (uint256)',
  'function maxLeverage(bytes32 _marketKey) view returns (uint256)',
  'function maxMarketValue(bytes32 _marketKey) view returns (uint256)',
  'function minDelayTimeDelta(bytes32 _marketKey) view returns (uint256)',
  'function minInitialMargin() view returns (uint256)',
  'function minKeeperFee() view returns (uint256)',
  'function nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function offchainDelayedOrderMaxAge(bytes32 _marketKey) view returns (uint256)',
  'function offchainDelayedOrderMinAge(bytes32 _marketKey) view returns (uint256)',
  'function offchainMarketKey(bytes32 _marketKey) view returns (bytes32)',
  'function offchainPriceDivergence(bytes32 _marketKey) view returns (uint256)',
  'function overrideCommitFee(bytes32 _marketKey) view returns (uint256)',
  'function owner() view returns (address)',
  'function parameters(bytes32 _marketKey) view returns (tuple(uint256 takerFee, uint256 makerFee, uint256 overrideCommitFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 maxLeverage, uint256 maxMarketValue, uint256 maxFundingVelocity, uint256 skewScale, uint256 nextPriceConfirmWindow, uint256 delayedOrderConfirmWindow, uint256 minDelayTimeDelta, uint256 maxDelayTimeDelta, uint256 offchainDelayedOrderMinAge, uint256 offchainDelayedOrderMaxAge, bytes32 offchainMarketKey, uint256 offchainPriceDivergence))',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setDelayedOrderConfirmWindow(bytes32 _marketKey, uint256 _delayedOrderConfirmWindow)',
  'function setLiquidationBufferRatio(uint256 _ratio)',
  'function setLiquidationFeeRatio(uint256 _ratio)',
  'function setMakerFee(bytes32 _marketKey, uint256 _makerFee)',
  'function setMakerFeeDelayedOrder(bytes32 _marketKey, uint256 _makerFeeDelayedOrder)',
  'function setMakerFeeOffchainDelayedOrder(bytes32 _marketKey, uint256 _makerFeeOffchainDelayedOrder)',
  'function setMaxDelayTimeDelta(bytes32 _marketKey, uint256 _maxDelayTimeDelta)',
  'function setMaxFundingVelocity(bytes32 _marketKey, uint256 _maxFundingVelocity)',
  'function setMaxLeverage(bytes32 _marketKey, uint256 _maxLeverage)',
  'function setMaxMarketValue(bytes32 _marketKey, uint256 _maxMarketValue)',
  'function setMinDelayTimeDelta(bytes32 _marketKey, uint256 _minDelayTimeDelta)',
  'function setMinInitialMargin(uint256 _minMargin)',
  'function setMinKeeperFee(uint256 _sUSD)',
  'function setNextPriceConfirmWindow(bytes32 _marketKey, uint256 _nextPriceConfirmWindow)',
  'function setOffchainDelayedOrderMaxAge(bytes32 _marketKey, uint256 _offchainDelayedOrderMaxAge)',
  'function setOffchainDelayedOrderMinAge(bytes32 _marketKey, uint256 _offchainDelayedOrderMinAge)',
  'function setOffchainMarketKey(bytes32 _marketKey, bytes32 _offchainMarketKey)',
  'function setOffchainPriceDivergence(bytes32 _marketKey, uint256 _offchainPriceDivergence)',
  'function setOverrideCommitFee(bytes32 _marketKey, uint256 _overrideCommitFee)',
  'function setParameters(bytes32 _marketKey, tuple(uint256 takerFee, uint256 makerFee, uint256 overrideCommitFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 maxLeverage, uint256 maxMarketValue, uint256 maxFundingVelocity, uint256 skewScale, uint256 nextPriceConfirmWindow, uint256 delayedOrderConfirmWindow, uint256 minDelayTimeDelta, uint256 maxDelayTimeDelta, uint256 offchainDelayedOrderMinAge, uint256 offchainDelayedOrderMaxAge, bytes32 offchainMarketKey, uint256 offchainPriceDivergence) _parameters)',
  'function setSkewScale(bytes32 _marketKey, uint256 _skewScale)',
  'function setTakerFee(bytes32 _marketKey, uint256 _takerFee)',
  'function setTakerFeeDelayedOrder(bytes32 _marketKey, uint256 _takerFeeDelayedOrder)',
  'function setTakerFeeOffchainDelayedOrder(bytes32 _marketKey, uint256 _takerFeeOffchainDelayedOrder)',
  'function skewScale(bytes32 _marketKey) view returns (uint256)',
  'function takerFee(bytes32 _marketKey) view returns (uint256)',
  'function takerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)',
  'function takerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace IPerpsV2MarketSettings {
  export type ParametersStruct = {
    takerFee: PromiseOrValue<BigNumberish>;
    makerFee: PromiseOrValue<BigNumberish>;
    overrideCommitFee: PromiseOrValue<BigNumberish>;
    takerFeeDelayedOrder: PromiseOrValue<BigNumberish>;
    makerFeeDelayedOrder: PromiseOrValue<BigNumberish>;
    takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>;
    makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>;
    maxLeverage: PromiseOrValue<BigNumberish>;
    maxMarketValue: PromiseOrValue<BigNumberish>;
    maxFundingVelocity: PromiseOrValue<BigNumberish>;
    skewScale: PromiseOrValue<BigNumberish>;
    nextPriceConfirmWindow: PromiseOrValue<BigNumberish>;
    delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>;
    minDelayTimeDelta: PromiseOrValue<BigNumberish>;
    maxDelayTimeDelta: PromiseOrValue<BigNumberish>;
    offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>;
    offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>;
    offchainMarketKey: PromiseOrValue<BytesLike>;
    offchainPriceDivergence: PromiseOrValue<BigNumberish>;
  };

  export type ParametersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    takerFee: BigNumber;
    makerFee: BigNumber;
    overrideCommitFee: BigNumber;
    takerFeeDelayedOrder: BigNumber;
    makerFeeDelayedOrder: BigNumber;
    takerFeeOffchainDelayedOrder: BigNumber;
    makerFeeOffchainDelayedOrder: BigNumber;
    maxLeverage: BigNumber;
    maxMarketValue: BigNumber;
    maxFundingVelocity: BigNumber;
    skewScale: BigNumber;
    nextPriceConfirmWindow: BigNumber;
    delayedOrderConfirmWindow: BigNumber;
    minDelayTimeDelta: BigNumber;
    maxDelayTimeDelta: BigNumber;
    offchainDelayedOrderMinAge: BigNumber;
    offchainDelayedOrderMaxAge: BigNumber;
    offchainMarketKey: string;
    offchainPriceDivergence: BigNumber;
  };
}

export interface PerpsV2MarketSettingsInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'delayedOrderConfirmWindow(bytes32)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'liquidationBufferRatio()': FunctionFragment;
    'liquidationFeeRatio()': FunctionFragment;
    'makerFee(bytes32)': FunctionFragment;
    'makerFeeDelayedOrder(bytes32)': FunctionFragment;
    'makerFeeOffchainDelayedOrder(bytes32)': FunctionFragment;
    'maxDelayTimeDelta(bytes32)': FunctionFragment;
    'maxFundingVelocity(bytes32)': FunctionFragment;
    'maxLeverage(bytes32)': FunctionFragment;
    'maxMarketValue(bytes32)': FunctionFragment;
    'minDelayTimeDelta(bytes32)': FunctionFragment;
    'minInitialMargin()': FunctionFragment;
    'minKeeperFee()': FunctionFragment;
    'nextPriceConfirmWindow(bytes32)': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'offchainDelayedOrderMaxAge(bytes32)': FunctionFragment;
    'offchainDelayedOrderMinAge(bytes32)': FunctionFragment;
    'offchainMarketKey(bytes32)': FunctionFragment;
    'offchainPriceDivergence(bytes32)': FunctionFragment;
    'overrideCommitFee(bytes32)': FunctionFragment;
    'owner()': FunctionFragment;
    'parameters(bytes32)': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'setDelayedOrderConfirmWindow(bytes32,uint256)': FunctionFragment;
    'setLiquidationBufferRatio(uint256)': FunctionFragment;
    'setLiquidationFeeRatio(uint256)': FunctionFragment;
    'setMakerFee(bytes32,uint256)': FunctionFragment;
    'setMakerFeeDelayedOrder(bytes32,uint256)': FunctionFragment;
    'setMakerFeeOffchainDelayedOrder(bytes32,uint256)': FunctionFragment;
    'setMaxDelayTimeDelta(bytes32,uint256)': FunctionFragment;
    'setMaxFundingVelocity(bytes32,uint256)': FunctionFragment;
    'setMaxLeverage(bytes32,uint256)': FunctionFragment;
    'setMaxMarketValue(bytes32,uint256)': FunctionFragment;
    'setMinDelayTimeDelta(bytes32,uint256)': FunctionFragment;
    'setMinInitialMargin(uint256)': FunctionFragment;
    'setMinKeeperFee(uint256)': FunctionFragment;
    'setNextPriceConfirmWindow(bytes32,uint256)': FunctionFragment;
    'setOffchainDelayedOrderMaxAge(bytes32,uint256)': FunctionFragment;
    'setOffchainDelayedOrderMinAge(bytes32,uint256)': FunctionFragment;
    'setOffchainMarketKey(bytes32,bytes32)': FunctionFragment;
    'setOffchainPriceDivergence(bytes32,uint256)': FunctionFragment;
    'setOverrideCommitFee(bytes32,uint256)': FunctionFragment;
    'setParameters(bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes32,uint256))': FunctionFragment;
    'setSkewScale(bytes32,uint256)': FunctionFragment;
    'setTakerFee(bytes32,uint256)': FunctionFragment;
    'setTakerFeeDelayedOrder(bytes32,uint256)': FunctionFragment;
    'setTakerFeeOffchainDelayedOrder(bytes32,uint256)': FunctionFragment;
    'skewScale(bytes32)': FunctionFragment;
    'takerFee(bytes32)': FunctionFragment;
    'takerFeeDelayedOrder(bytes32)': FunctionFragment;
    'takerFeeOffchainDelayedOrder(bytes32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'delayedOrderConfirmWindow'
      | 'isResolverCached'
      | 'liquidationBufferRatio'
      | 'liquidationFeeRatio'
      | 'makerFee'
      | 'makerFeeDelayedOrder'
      | 'makerFeeOffchainDelayedOrder'
      | 'maxDelayTimeDelta'
      | 'maxFundingVelocity'
      | 'maxLeverage'
      | 'maxMarketValue'
      | 'minDelayTimeDelta'
      | 'minInitialMargin'
      | 'minKeeperFee'
      | 'nextPriceConfirmWindow'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'offchainDelayedOrderMaxAge'
      | 'offchainDelayedOrderMinAge'
      | 'offchainMarketKey'
      | 'offchainPriceDivergence'
      | 'overrideCommitFee'
      | 'owner'
      | 'parameters'
      | 'rebuildCache'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'setDelayedOrderConfirmWindow'
      | 'setLiquidationBufferRatio'
      | 'setLiquidationFeeRatio'
      | 'setMakerFee'
      | 'setMakerFeeDelayedOrder'
      | 'setMakerFeeOffchainDelayedOrder'
      | 'setMaxDelayTimeDelta'
      | 'setMaxFundingVelocity'
      | 'setMaxLeverage'
      | 'setMaxMarketValue'
      | 'setMinDelayTimeDelta'
      | 'setMinInitialMargin'
      | 'setMinKeeperFee'
      | 'setNextPriceConfirmWindow'
      | 'setOffchainDelayedOrderMaxAge'
      | 'setOffchainDelayedOrderMinAge'
      | 'setOffchainMarketKey'
      | 'setOffchainPriceDivergence'
      | 'setOverrideCommitFee'
      | 'setParameters'
      | 'setSkewScale'
      | 'setTakerFee'
      | 'setTakerFeeDelayedOrder'
      | 'setTakerFeeOffchainDelayedOrder'
      | 'skewScale'
      | 'takerFee'
      | 'takerFeeDelayedOrder'
      | 'takerFeeOffchainDelayedOrder'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'delayedOrderConfirmWindow',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationBufferRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationFeeRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'makerFee', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'makerFeeDelayedOrder',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'makerFeeOffchainDelayedOrder',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'maxDelayTimeDelta',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'maxFundingVelocity',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'maxLeverage', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'maxMarketValue',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'minDelayTimeDelta',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'minInitialMargin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'minKeeperFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nextPriceConfirmWindow',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'offchainDelayedOrderMaxAge',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'offchainDelayedOrderMinAge',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'offchainMarketKey',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'offchainPriceDivergence',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'overrideCommitFee',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'parameters', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setDelayedOrderConfirmWindow',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidationBufferRatio',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidationFeeRatio',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMakerFee',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMakerFeeDelayedOrder',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMakerFeeOffchainDelayedOrder',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxDelayTimeDelta',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxFundingVelocity',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxLeverage',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxMarketValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMinDelayTimeDelta',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMinInitialMargin',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMinKeeperFee',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setNextPriceConfirmWindow',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setOffchainDelayedOrderMaxAge',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setOffchainDelayedOrderMinAge',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setOffchainMarketKey',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setOffchainPriceDivergence',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setOverrideCommitFee',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setParameters',
    values: [PromiseOrValue<BytesLike>, IPerpsV2MarketSettings.ParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'setSkewScale',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTakerFee',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTakerFeeDelayedOrder',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTakerFeeOffchainDelayedOrder',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'skewScale', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'takerFee', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'takerFeeDelayedOrder',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'takerFeeOffchainDelayedOrder',
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delayedOrderConfirmWindow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationBufferRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationFeeRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'makerFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'makerFeeDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'makerFeeOffchainDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxDelayTimeDelta', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxFundingVelocity', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxLeverage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxMarketValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minDelayTimeDelta', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minInitialMargin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minKeeperFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nextPriceConfirmWindow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'offchainDelayedOrderMaxAge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'offchainDelayedOrderMinAge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'offchainMarketKey', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'offchainPriceDivergence', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'overrideCommitFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'parameters', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDelayedOrderConfirmWindow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidationBufferRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidationFeeRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMakerFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMakerFeeDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setMakerFeeOffchainDelayedOrder',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setMaxDelayTimeDelta', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxFundingVelocity', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxLeverage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxMarketValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinDelayTimeDelta', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinInitialMargin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinKeeperFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setNextPriceConfirmWindow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOffchainDelayedOrderMaxAge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOffchainDelayedOrderMinAge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOffchainMarketKey', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOffchainPriceDivergence', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOverrideCommitFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setParameters', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSkewScale', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTakerFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTakerFeeDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setTakerFeeOffchainDelayedOrder',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'skewScale', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'takerFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'takerFeeDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'takerFeeOffchainDelayedOrder', data: BytesLike): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'LiquidationBufferRatioUpdated(uint256)': EventFragment;
    'LiquidationFeeRatioUpdated(uint256)': EventFragment;
    'MinInitialMarginUpdated(uint256)': EventFragment;
    'MinKeeperFeeUpdated(uint256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'ParameterUpdated(bytes32,bytes32,uint256)': EventFragment;
    'ParameterUpdatedBytes32(bytes32,bytes32,bytes32)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidationBufferRatioUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidationFeeRatioUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinInitialMarginUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinKeeperFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ParameterUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ParameterUpdatedBytes32'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface LiquidationBufferRatioUpdatedEventObject {
  bps: BigNumber;
}
export type LiquidationBufferRatioUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidationBufferRatioUpdatedEventObject
>;

export type LiquidationBufferRatioUpdatedEventFilter =
  TypedEventFilter<LiquidationBufferRatioUpdatedEvent>;

export interface LiquidationFeeRatioUpdatedEventObject {
  bps: BigNumber;
}
export type LiquidationFeeRatioUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidationFeeRatioUpdatedEventObject
>;

export type LiquidationFeeRatioUpdatedEventFilter =
  TypedEventFilter<LiquidationFeeRatioUpdatedEvent>;

export interface MinInitialMarginUpdatedEventObject {
  minMargin: BigNumber;
}
export type MinInitialMarginUpdatedEvent = TypedEvent<
  [BigNumber],
  MinInitialMarginUpdatedEventObject
>;

export type MinInitialMarginUpdatedEventFilter = TypedEventFilter<MinInitialMarginUpdatedEvent>;

export interface MinKeeperFeeUpdatedEventObject {
  sUSD: BigNumber;
}
export type MinKeeperFeeUpdatedEvent = TypedEvent<[BigNumber], MinKeeperFeeUpdatedEventObject>;

export type MinKeeperFeeUpdatedEventFilter = TypedEventFilter<MinKeeperFeeUpdatedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface ParameterUpdatedEventObject {
  marketKey: string;
  parameter: string;
  value: BigNumber;
}
export type ParameterUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  ParameterUpdatedEventObject
>;

export type ParameterUpdatedEventFilter = TypedEventFilter<ParameterUpdatedEvent>;

export interface ParameterUpdatedBytes32EventObject {
  marketKey: string;
  parameter: string;
  value: string;
}
export type ParameterUpdatedBytes32Event = TypedEvent<
  [string, string, string],
  ParameterUpdatedBytes32EventObject
>;

export type ParameterUpdatedBytes32EventFilter = TypedEventFilter<ParameterUpdatedBytes32Event>;

export interface PerpsV2MarketSettings extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpsV2MarketSettingsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    liquidationBufferRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationFeeRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    makerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    makerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    makerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    minDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    minInitialMargin(overrides?: CallOverrides): Promise<[BigNumber]>;

    minKeeperFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    offchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    offchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    offchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    offchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    overrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    parameters(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[IPerpsV2MarketSettings.ParametersStructOutput]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    setDelayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidationBufferRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidationFeeRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxFundingVelocity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxLeverage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxMarketValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _minDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinInitialMargin(
      _minMargin: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinKeeperFee(
      _sUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOffchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOffchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOffchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainMarketKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOffchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainPriceDivergence: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOverrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _overrideCommitFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setParameters(
      _marketKey: PromiseOrValue<BytesLike>,
      _parameters: IPerpsV2MarketSettings.ParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSkewScale(
      _marketKey: PromiseOrValue<BytesLike>,
      _skewScale: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    skewScale(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    takerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    takerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    takerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delayedOrderConfirmWindow(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  liquidationBufferRatio(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;

  makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  makerFeeDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  makerFeeOffchainDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxDelayTimeDelta(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxFundingVelocity(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxLeverage(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  maxMarketValue(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  minDelayTimeDelta(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  minInitialMargin(overrides?: CallOverrides): Promise<BigNumber>;

  minKeeperFee(overrides?: CallOverrides): Promise<BigNumber>;

  nextPriceConfirmWindow(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  offchainDelayedOrderMaxAge(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  offchainDelayedOrderMinAge(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  offchainMarketKey(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  offchainPriceDivergence(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  overrideCommitFee(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  parameters(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IPerpsV2MarketSettings.ParametersStructOutput>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  setDelayedOrderConfirmWindow(
    _marketKey: PromiseOrValue<BytesLike>,
    _delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidationBufferRatio(
    _ratio: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidationFeeRatio(
    _ratio: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMakerFee(
    _marketKey: PromiseOrValue<BytesLike>,
    _makerFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMakerFeeDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    _makerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMakerFeeOffchainDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    _makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxDelayTimeDelta(
    _marketKey: PromiseOrValue<BytesLike>,
    _maxDelayTimeDelta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxFundingVelocity(
    _marketKey: PromiseOrValue<BytesLike>,
    _maxFundingVelocity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxLeverage(
    _marketKey: PromiseOrValue<BytesLike>,
    _maxLeverage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxMarketValue(
    _marketKey: PromiseOrValue<BytesLike>,
    _maxMarketValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinDelayTimeDelta(
    _marketKey: PromiseOrValue<BytesLike>,
    _minDelayTimeDelta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinInitialMargin(
    _minMargin: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinKeeperFee(
    _sUSD: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNextPriceConfirmWindow(
    _marketKey: PromiseOrValue<BytesLike>,
    _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOffchainDelayedOrderMaxAge(
    _marketKey: PromiseOrValue<BytesLike>,
    _offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOffchainDelayedOrderMinAge(
    _marketKey: PromiseOrValue<BytesLike>,
    _offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOffchainMarketKey(
    _marketKey: PromiseOrValue<BytesLike>,
    _offchainMarketKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOffchainPriceDivergence(
    _marketKey: PromiseOrValue<BytesLike>,
    _offchainPriceDivergence: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOverrideCommitFee(
    _marketKey: PromiseOrValue<BytesLike>,
    _overrideCommitFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setParameters(
    _marketKey: PromiseOrValue<BytesLike>,
    _parameters: IPerpsV2MarketSettings.ParametersStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSkewScale(
    _marketKey: PromiseOrValue<BytesLike>,
    _skewScale: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTakerFee(
    _marketKey: PromiseOrValue<BytesLike>,
    _takerFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTakerFeeDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    _takerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTakerFeeOffchainDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    _takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  skewScale(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  takerFeeDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  takerFeeOffchainDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    delayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    liquidationBufferRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;

    makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    makerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minInitialMargin(overrides?: CallOverrides): Promise<BigNumber>;

    minKeeperFee(overrides?: CallOverrides): Promise<BigNumber>;

    nextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    offchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    offchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    overrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    parameters(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IPerpsV2MarketSettings.ParametersStructOutput>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    setDelayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationBufferRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationFeeRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxFundingVelocity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxLeverage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxMarketValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _minDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinInitialMargin(
      _minMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinKeeperFee(_sUSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setNextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOffchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOffchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOffchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainMarketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOffchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainPriceDivergence: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOverrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _overrideCommitFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setParameters(
      _marketKey: PromiseOrValue<BytesLike>,
      _parameters: IPerpsV2MarketSettings.ParametersStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setSkewScale(
      _marketKey: PromiseOrValue<BytesLike>,
      _skewScale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    skewScale(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    takerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    takerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'LiquidationBufferRatioUpdated(uint256)'(bps?: null): LiquidationBufferRatioUpdatedEventFilter;
    LiquidationBufferRatioUpdated(bps?: null): LiquidationBufferRatioUpdatedEventFilter;

    'LiquidationFeeRatioUpdated(uint256)'(bps?: null): LiquidationFeeRatioUpdatedEventFilter;
    LiquidationFeeRatioUpdated(bps?: null): LiquidationFeeRatioUpdatedEventFilter;

    'MinInitialMarginUpdated(uint256)'(minMargin?: null): MinInitialMarginUpdatedEventFilter;
    MinInitialMarginUpdated(minMargin?: null): MinInitialMarginUpdatedEventFilter;

    'MinKeeperFeeUpdated(uint256)'(sUSD?: null): MinKeeperFeeUpdatedEventFilter;
    MinKeeperFeeUpdated(sUSD?: null): MinKeeperFeeUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'ParameterUpdated(bytes32,bytes32,uint256)'(
      marketKey?: PromiseOrValue<BytesLike> | null,
      parameter?: PromiseOrValue<BytesLike> | null,
      value?: null
    ): ParameterUpdatedEventFilter;
    ParameterUpdated(
      marketKey?: PromiseOrValue<BytesLike> | null,
      parameter?: PromiseOrValue<BytesLike> | null,
      value?: null
    ): ParameterUpdatedEventFilter;

    'ParameterUpdatedBytes32(bytes32,bytes32,bytes32)'(
      marketKey?: PromiseOrValue<BytesLike> | null,
      parameter?: PromiseOrValue<BytesLike> | null,
      value?: null
    ): ParameterUpdatedBytes32EventFilter;
    ParameterUpdatedBytes32(
      marketKey?: PromiseOrValue<BytesLike> | null,
      parameter?: PromiseOrValue<BytesLike> | null,
      value?: null
    ): ParameterUpdatedBytes32EventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    delayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationBufferRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;

    makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    makerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minInitialMargin(overrides?: CallOverrides): Promise<BigNumber>;

    minKeeperFee(overrides?: CallOverrides): Promise<BigNumber>;

    nextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    offchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    overrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    parameters(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    setDelayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidationBufferRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidationFeeRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxFundingVelocity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxLeverage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxMarketValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _minDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinInitialMargin(
      _minMargin: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinKeeperFee(
      _sUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOffchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOffchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOffchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainMarketKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOffchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainPriceDivergence: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOverrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _overrideCommitFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setParameters(
      _marketKey: PromiseOrValue<BytesLike>,
      _parameters: IPerpsV2MarketSettings.ParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSkewScale(
      _marketKey: PromiseOrValue<BytesLike>,
      _skewScale: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    skewScale(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    takerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    takerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationBufferRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationFeeRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minInitialMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minKeeperFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    offchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    overrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parameters(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDelayedOrderConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationBufferRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationFeeRatio(
      _ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxFundingVelocity(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxFundingVelocity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxLeverage(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxLeverage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxMarketValue(
      _marketKey: PromiseOrValue<BytesLike>,
      _maxMarketValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinDelayTimeDelta(
      _marketKey: PromiseOrValue<BytesLike>,
      _minDelayTimeDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinInitialMargin(
      _minMargin: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinKeeperFee(
      _sUSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNextPriceConfirmWindow(
      _marketKey: PromiseOrValue<BytesLike>,
      _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOffchainDelayedOrderMaxAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOffchainDelayedOrderMinAge(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOffchainMarketKey(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainMarketKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOffchainPriceDivergence(
      _marketKey: PromiseOrValue<BytesLike>,
      _offchainPriceDivergence: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOverrideCommitFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _overrideCommitFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setParameters(
      _marketKey: PromiseOrValue<BytesLike>,
      _parameters: IPerpsV2MarketSettings.ParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSkewScale(
      _marketKey: PromiseOrValue<BytesLike>,
      _skewScale: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTakerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTakerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTakerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      _takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    skewScale(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    takerFee(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    takerFeeDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    takerFeeOffchainDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
