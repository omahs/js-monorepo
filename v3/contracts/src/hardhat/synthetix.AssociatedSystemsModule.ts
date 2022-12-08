export const address = '0x3Aa751044372B61A46DEC9ae45da645351281a99';
export const abi = [
  'error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)',
  'error Unauthorized(address addr)',
  'event AssociatedSystemSet(bytes32 indexed kind, bytes32 indexed id, address proxy, address impl)',
  'function getAssociatedSystem(bytes32 id) view returns (address addr, bytes32 kind)',
  'function initOrUpgradeNft(bytes32 id, string name, string symbol, string uri, address impl)',
  'function initOrUpgradeToken(bytes32 id, string name, string symbol, uint8 decimals, address impl)',
  'function registerUnmanagedSystem(bytes32 id, address endpoint)',
];
