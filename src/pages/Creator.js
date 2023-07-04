import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getMarketplaceNativeERC1155Contract, cancelList, buy, list  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const MarketplaceNativeERC1155Contract = getMarketplaceNativeERC1155Contract(bunzz);

    const [listPrice, setListPrice] = useState(0);
    const [listAmount, setListAmount] = useState(0);
    const [tokenId, setTokenId] = useState(0);

    const [buyTokenId, setBuyTokenId] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);

    const [cancelTokenId, setCancelTokenId] = useState(0);


  

    const [pendingList, setPendingList] = useState(false);
    const [pendingBuy, setPendingBuy] = useState(false);
    const [pendingCancelList, setPendingCancelList] = useState(false)
  
  
   
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Token ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={tokenId} onChange={(val) => setTokenId(val.target.value)} />
                            <Form.Label>Input Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Id" value={listAmount} onChange={(val) => setListAmount(val.target.value)} />
                            <Form.Label>Input Price</Form.Label>
                            <Form.Control type="email" placeholder="Enter price" value={listAmount} onChange={(val) => setListPrice(val.target.value)} />
                        </Form.Group>
                            {!pendingList ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingList(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await list(
                                        MarketplaceNativeERC1155Contract,
                                        tokenId,
                                        listAmount,
                                        listPrice,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingList(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingList(false);
                                    
                                }
                            }}>
                                List
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} List
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={buyTokenId} onChange={(val) => setBuyTokenId(val.target.value)} />
                            <Form.Label>Input Token Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter token amount" value={buyAmount} onChange={(val) => setBuyAmount(val.target.value)} />
                        </Form.Group>

                        {!pendingBuy ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingBuy(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await buy(
                                        MarketplaceNativeERC1155Contract,
                                        buyTokenId,
                                        buyAmount,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    
                                    setPendingBuy(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingBuy(false);
                                    
                                }
                            }}>
                                Buy
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Buy
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={cancelTokenId} onChange={(val) => setCancelTokenId(val.target.value)} />
                        </Form.Group>

                        {!pendingCancelList ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingCancelList(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await cancelList(
                                        MarketplaceNativeERC1155Contract,
                                        cancelTokenId,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    
                                    setPendingCancelList(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingCancelList(false);
                                    
                                }
                            }}>
                                CancelList
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} CancelList
                            </Button>
                        }
                       
                        
                     
                    </Form>
                    
                   


                </Col>
            </Row>
        </Container>
    )
}

export default Creator;