import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getMarketplaceNativeERC1155Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.MarketplaceNativeERC1155;
}

export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const list = async (MarketplaceNativeERC1155Contract, tokenId, amount, price, account) => {
  return MarketplaceNativeERC1155Contract.methods.list(tokenId, amount, price).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const buy = async (MarketplaceNativeERC1155Contract, listingId, amount, account) => {
  return MarketplaceNativeERC1155Contract.methods.buy(listingId, amount).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const cancelList = async (MarketplaceNativeERC1155Contract, tokenId, account) => {
  return MarketplaceNativeERC1155Contract.methods.cancelList(tokenId).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const tokenURI = async (erc721MintRoleContract, tokenId ) => {
  
  try {
    const uri = await erc721MintRoleContract.methods.tokenURI(tokenId).call();
    
  
    return uri;
  } catch {
    console.log("error");
    return "";
  }

}

