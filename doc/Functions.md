# WRITE(main)

## transferOwnerShip
This function will be called by the owner if he wants to transfer the ownership of the contract to another address

|Name|Type|Description|
|--- |---|---|
|newOwner|address|The address that will become the new owner of the contract.|

## renounceOwnership
This function will be called by the owner if he wants to drop the ownership of the contract

No arguments

## buy
This function will be called by the buyers to purchase the NFT

|Name|Type|Description|
|--- |---|---|
|listingId|uint256|The listing id of the token which you want to buy|
|amount|uint256|The amount which you want to purchase|

## cancelList
This functions is for cancelling a listing.
|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token which you want to remove|

## list
This function is for listing a token for sale

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id which you want to list for sale|
|amount|uint256|The amount which you want to list|
|price|uint256|The price which you want to list for sale|



# READ(main)


## owner
Owner of the contract

No arguments


## token
Returns the address of the ERC1155 token
No arguments

## tokensListing
Returns the listing id for given token id

|Name|Type|Description|
|--- |---|---|
|id|uint256|The token id|

## listings
Returns the listing info structure

|Name|Type|Description|
|--- |---|---|
|id|uint256|Listing id|



