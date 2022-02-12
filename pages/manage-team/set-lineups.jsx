import {Container, Row, Col, Button} from "react-bootstrap";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowUp, faArrowDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {CircleBtn, PlayingCard} from "../../components/styled-components";

const SContainer = styled(Container)`
    svg[data-prefix="fas"] {
      width: 25px;
    }
`

const ActionButton = styled(Button)`
  width: 100px;
`

export default function SetLineup() {
    return <SContainer fluid className='p-3'>
        <Row className='justify-content-between'>
            <Col className='col-auto'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Col>
            <Col className='col-auto'>
                <FontAwesomeIcon icon={faTimes} />
            </Col>
        </Row>
        <Row>
            <Col xs={1}>
                <CircleBtn className='mb-2 first' variant='outline-primary'>1</CircleBtn>
                <CircleBtn className='mb-2'>2</CircleBtn>
                <CircleBtn className='mb-2'>3</CircleBtn>
                <CircleBtn className='mb-2'>4</CircleBtn>
            </Col>
            <Col xs={8}>
                <Row className='mt-5 justify-content-around'>
                    <Col className='col-auto'>
                        <PlayingCard />
                    </Col>
                    <Col className='col-auto'>
                        <PlayingCard />
                    </Col>
                    <Col className='col-auto'>
                        <PlayingCard />
                    </Col>
                </Row>
                <Row className='mt-3 mb-5 justify-content-around'>
                    <Col className='col-auto'>
                        <PlayingCard className='bottom-left' />
                    </Col>
                    <Col className='col-auto'>
                        <PlayingCard className='bottom-right' />
                    </Col>
                </Row>
                <Row>
                    <Col xs={11}>
                        <Row>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border' /></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <FontAwesomeIcon icon={faArrowUp} className='mt-3' />
                        <h4>1/3</h4>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>
                <PlayingCard className='goalie' />
                <ActionButton variant='warning' className='mt-4 mb-2'>Auto</ActionButton>
                <ActionButton variant='danger' className='mt-5 mb-2'>Cancel</ActionButton>
                <ActionButton variant='success'>Apply</ActionButton>
            </Col>
        </Row>
    </SContainer>
}