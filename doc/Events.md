## CancelListing
Emitted when a token listing is canceled.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token which was cancelled for listing|
|seller|address|The address which listed the token|
|timestamp|uint256|The timestamp for cancelled time.|

## NewListing
Event emitted when seller listed new token.

|Name|Type|Description|
|--- |---|---|
|listId|uint256|The id of the listing|
|tokenId|uint256|The id of the token|
|seller|address|The address of user which listed token|
|tokenAmount|uint256|The amount of the token which listed|
|price|uint256|The listed price for the token|
|timestamp|uint256|The listed time|

## OwnershipTransferred
Event emitted when ownership transferred to another address.

|Name|Type|Description|
|--- |---|---|
|previousOwner|uint256|The address of the previous owner of the contract|
|newOwner|address|The address of the new owner|


## Sold
Event emitted when the listed token was sold.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|
|seller|address|The address of user which listed token|
|buyer|address|The address of user which bought token|
|amount|uint256|The amount of the token which was sold|
|totalPrice|uint256|The sold price|
|timestamp|uint256|The sold time|

## UpdateListing
Event emitted when seller updated existing listing.

|Name|Type|Description|
|--- |---|---|
|listId|uint256|The id of the listing|
|tokenId|uint256|The id of the token|
|seller|address|The address of user which listed token|
|tokenAmount|uint256|The amount of the token which listed|
|price|uint256|The listed price for the token|
|timestamp|uint256|The updated time|