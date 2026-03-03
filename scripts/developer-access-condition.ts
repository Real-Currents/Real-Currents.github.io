/**
 * Kavach Access Condition Template
 * Gates decryption to a specific developer wallet address using Lighthouse's BLS threshold nodes.
 * Use for Developer-Only Drafts or sensitive XR configuration files.
 *
 * Apply to a CID to make it "Developer Eyes Only":
 *   await lighthouse.applyAccessCondition(publicKey, cid, signedMessage, accessControlConditions)
 *
 * @see https://docs.lighthouse.storage/lighthouse-1/how-to/access-control
 */

export const accessControlConditions = [
  {
    id: 1,
    chain: "Polygon", // Lighthouse uses EVM chains for access logic
    method: "", // Empty method for simple address check
    standardContractType: "",
    contractAddress: "",
    returnValueTest: {
      comparator: "==",
      value: "0xYOUR_DEVELOPER_WALLET_ADDRESS",
    },
    parameters: [":userAddress"],
  },
];

// Example usage with @lighthouse-web3/sdk:
//
// import lighthouse from '@lighthouse-web3/sdk';
// import { accessControlConditions } from './developer-access-condition';
//
// const response = await lighthouse.applyAccessCondition(
//   publicKey,
//   cid,
//   signedMessage,
//   accessControlConditions
// );
