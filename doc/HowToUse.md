## Preparation before deployment
1. Prepare ERC1155 token which you want the marketplace to support 

## Get started(Operation)
1. Deploy the MarketplaceNativeERC1155 contract, providing the address of the ERC1155 token contract you want the marketplace to support.
2. To list a token for sale, call the 'list' function, specifying the token ID, amount, and price. Ensure you have approved the marketplace contract to manage your tokens.
3. To purchase a token, call the 'buy' function, providing the listing ID and the amount you want to purchase. Send the required amount of native currency along with the transaction.
4. To cancel a listing, call the 'cancelList' function with the token ID of the listing you want to remove. This can only be done by the token owner.
5. Monitor events emitted by the contract, such as 'NewListing', 'UpdateListing', 'Sold', and 'CancelListing', to track marketplace activity.






