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
This fuunction will be called by the buyers to purchase the NFT

|Name|Type|Description|
|--- |---|---|
|listingId|uint256|The listing id of the token which you want to buy|
|amount|uint256|The amount which you want to purchase|



# READ(main)


## totalSupply
Returns the amount of tokens in existence

No arguments


## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|Id of the interface|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|owner|address|The account which you want to check the balance|


## ownerOf
Returns the owner of the NFT specified by tokenId

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## name
Retrieves collection name

No arguments

## symbol
Retrieves collection name

No arguments

## tokenURI
Returns the uri of the metadata

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## tokenOfOwnerByIndex
Returns all the tokens owned by an address and given index

|Name|Type|Description|
|--- |---|---|
|owner|address|The token owner|
|index|uint256|The index of the token|

## tokenByIndex
Return the token index based on user balance

|Name|Type|Description|
|--- |---|---|
|index|uint256|The index of the token|


## getApproved
Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id you will retrieves the approvals|

## isApprovedForAll
Tells whether an operator is approved by a given owner.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the tokens owner|
|operator|uint256|The account that will get the rights to operate over owner balance|

## hasRole
Returns true if account has been granted role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be granted the role|

## getRoleAdmin
Returns the admin role that controls roles

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|

## MINTER_ROLE
The role for minters

No arguments

## DEFAULT_ADMIN_ROLE
The starting admin for all roles

No arguments