import {Container, Row, Col, Button} from "react-bootstrap";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowUp, faArrowDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {AcceptButton, CancelButton, CircleBtn, PlayingCard} from "../../components/styled-components";




const SContainer = styled(Container)`
    svg[data-prefix="fas"] {
      width: 25px;
    }

     width: 1440px;

`
const CircleButtons = styled(Col)`
   
   max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
`

const TopSelectedCard = styled(Col)`
    max-width: 900px
`

const SelectedPlayingCard = styled(Col)`
    width:500px;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
`

const ActionButton = styled(Button)`
  width: 100px;
`

const  RightSideItems = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 0;
    padding-bottom: 100px
    
`

const  ButtonsGroup = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const  SRow = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1440px
    max-height: 900px;
`

export default function SetLineup() {
    return <SContainer fluid className='p-3'>
        <Row style={{width: "1440px", display: 'flex', justifyContent: "space-between", alignItems: "center"}} >
            <Col className='col-auto'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </Col>
            <Col className='col-auto'>
                <FontAwesomeIcon icon={faTimes}/>
            </Col>
        </Row>
        <SRow>
            <CircleButtons xs={1}>
                <CircleBtn className='mb-2 ' variant='outline-primary'>1</CircleBtn>
                <CircleBtn className='mb-2'>2</CircleBtn>
                <CircleBtn className='mb-2'>3</CircleBtn>
                <CircleBtn className='mb-2'>4</CircleBtn>
            </CircleButtons>
            <TopSelectedCard xs={8}>
                <SelectedPlayingCard style={{width: "500px", margin: "0 auto"}}>
                    <Col className='col-auto'>
                        <PlayingCard/>
                    </Col>
                    <Col className='col-auto'>
                        <PlayingCard/>
                    </Col>
                    <Col className='col-auto'>
                        <PlayingCard/>
                    </Col>
                </SelectedPlayingCard>
                <SelectedPlayingCard className='mt-3 mb-5 justify-content-around'>
                    <Col className='col-auto'>
                        <PlayingCard className='bottom-left'/>
                    </Col>
                    <Col className='col-auto'>
                        <PlayingCard className='bottom-right'/>
                    </Col>
                </SelectedPlayingCard>
                <Row>
                    <Col xs={11}>
                        <Row>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                            <Col className='m-0' xs={1}><PlayingCard className='border'/></Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <FontAwesomeIcon icon={faArrowUp} className='mt-3'/>
                        <h4>1/3</h4>
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </Col>
                </Row>
            </TopSelectedCard>
            <RightSideItems xs={3}>
                <PlayingCard className='goalie'/>
                <ActionButton variant='warning' className='mt-4 mb-2'>Auto</ActionButton>
                <ButtonsGroup>
                    <CancelButton variant='danger' className='mt-5 mb-2'>Cancel</CancelButton>
                    <AcceptButton variant='success' className='mt-5 mb-2'>Apply</AcceptButton>
                </ButtonsGroup>
            </RightSideItems>
        </SRow>
    </SContainer>
}