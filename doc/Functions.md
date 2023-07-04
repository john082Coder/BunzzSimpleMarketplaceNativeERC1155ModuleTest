# WRITE(main)

## transferFrom
Transfer a particular tokenId from the token owner to an certai address if the caller have the permision to transfer it

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|from|address|The token sender||N/A|
|to|address|The token receiver||N/A|
|tokenId|uint256|The id of the token that will be transfered||N/A|


## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|from|address|The token sender||N/A|
|to|address|The token receiver||N/A|
|tokenId|uint256|The id of the token that will be sent||N/A|
|_data|bytes|Optional data field||N/A|

## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the token sender|
|to|address|The id of the token that will be receiver|
|tokenId|uint256|The id of the token that will be sents|

## approve
Gives an certain address permision to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|to|address|Account to approve to spend caller balance|
|tokenId|uint256|Token id that will be approved to be user by other account|


## setApprovalForAll

Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.

|Name|Type|Description|
|--- |---|---|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|


## mint
Can only be called by the contract owner. Needs to provide the address that will receive the NFT. Needs to provide a token ID for metadata

|Name|Type|Description|
|--- |---|---|
|to|address|The tokens receiver|
|_tokenId|uint256|New token id that will be minted|

## revokeRole
Revokes role from account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be rovoked from role|

## renounceRole
Renounce role from account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will renounce the role|

## grantRole
Grants a role to account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be granted the role|


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