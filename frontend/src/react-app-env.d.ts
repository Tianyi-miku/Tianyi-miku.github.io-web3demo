/// <reference types="react-scripts" />
declare global {
  interface Window {
    ethereum: any;
  }
  interface BigIntConstructor {
    toJSON: () => BigInt;
  }
}
interface Window {
  ethereum: any
}
BigInt.toJSON = function () { return this.toString(); };