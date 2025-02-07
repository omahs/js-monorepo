import { TransactionEventCode } from './types';

export const TRANSACTION_EVENTS: TransactionEventCode[] = [
  'txSent',
  'txConfirmed',
  'txFailed',
  'txError',
];

export const TRANSACTION_EVENTS_MAP = Object.fromEntries(
  TRANSACTION_EVENTS.map((event) => [event, event])
);
