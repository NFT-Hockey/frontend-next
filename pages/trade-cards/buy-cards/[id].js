import {Container, Row, Col, Button, Navbar, Form} from 'react-bootstrap';
import NFTCard from "../../../components/NFTCard";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {SModal} from "../../../components/settings";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import InfoModal from "../../../components/InfoModal";
import BidModal from "../../../components/BidModal";

const CardInfo = styled.div`
  background-color: aquamarine;
  border-radius: 20px;
  padding: 30px;
`

export default function BuyCardView(ctx) {
    const [showBuyCardOfferModal, setShowBuyCardOfferModal] = useState(false);
    const handleBuyCardOfferModalOpen = () => setShowBuyCardOfferModal(true);
    const handleBuyCardOfferModalClose = () => setShowBuyCardOfferModal(false);

    const [showBuyCardConfirmModal, setShowBuyCardConfirmModal] = useState(false);
    const handleBuyCardConfirmModalOpen = () => setShowBuyCardConfirmModal(true);
    const handleBuyCardConfirmModalClose = () => setShowBuyCardConfirmModal(false);

    return <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/trade-cards/buy-cards'>
                    <FontAwesomeIcon icon={faArrowLeft} width='25' />
                </Navbar.Brand>
                <Navbar.Brand href='/'>
                    <img alt='Logo' src='/logo.png' width='40' className='d-inline-block align-top' />
                </Navbar.Brand>
            </Container>
        </Navbar>
    <Container>
        <Row className='my-5'>
            <Col className='col-12 col-xs-12 col-sm-12 col-md-5 mb-3'>
                <NFTCard
                    imgURL='/nft.png'
                    year={2022}
                    position='LW'
                    name='Player #12'
                    number={99}
                    role='Best player ever'
                    stats={[99,88,77,66,55]}
                />
            </Col>
            <Col className='col-12 col-xs-12 col-sm-12 col-md-7'>
                        <CardInfo>
                            <h1>Card info</h1>
                            <h2>Other card info</h2>
                            <h3>Even more info</h3>
                        </CardInfo>
                <Row className='justify-content-center mt-4'>
                    <Col className='col-auto'>
                        <Button variant='secondary' onClick={handleBuyCardOfferModalOpen}>Buy for 6 Ⓝ</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
        <BidModal
            show={showBuyCardOfferModal}
            onHide={handleBuyCardOfferModalClose}
            onBtnClick={() => {
                handleBuyCardOfferModalClose();
                handleBuyCardConfirmModalOpen();
            }}
            content={[
                <h3 key='buy-card-offer-0'>Set your bid for buying a <code>Name</code></h3>,
                <h3 key='buy-card-offer-0'><code>Surname from CardHolder</code></h3>,
            ]}
        />
        <InfoModal
            show={showBuyCardConfirmModal}
            onHide={handleBuyCardConfirmModalClose}
            onBtnClick={handleBuyCardConfirmModalClose}
            content={[
                <h3 key='buy-cards-confirm-0'>You are buying a <code>Name Surname</code></h3>,
                <h3 key='buy-cards-confirm-1'>from <code>CardHolder</code> for <code>XXX</code> Ⓝ</h3>,
            ]}
            />
    </Container>
    </>
}