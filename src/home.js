import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Steps from "./sections/steps"
import {useState} from 'react'
import styled from 'styled-components'
import Details from './sections/details'
import ColorMapping from './sections/color-mapping'
import NonStandardColor from './sections/non-standard-color'
import StandardColor from './sections/standard-color'
import Summary from './sections/summary'

const Body = styled.div`
    height: 100vh;
`

const PageContainer = styled.div`
    display: flex;
    height: calc(100% - 75px);

`
const LeftCont = styled.div`
    width: 254px;
    border-right: 1px solid #eaeaea;
    height: 100%;
`
const RightCont = styled.div`
    width: calc(100% - 254px);
    padding: 40px;
`

const Heading = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 0;
`

const SubHeading = styled.h1`
    font-size: 16px;
    color: #8b9693;
    font-weight: 400;
    margin-bottom: 50px;
`

const Flex = styled.div`
    display: flex;
`

const Content = styled.div`
    padding: 0 100px;
    width: calc(100% - 300px);
`

const Action = styled.div`
`

const PrevButton = styled.div`
    cursor: pointer;
    display: inline-block;
    margin-right: 20px;
    font-size; 14px;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 10px 30px;
    border-radius: 5px;
    
`

const Button = styled.div`
    cursor: pointer;
    display: inline-block;
    background-color: var(--primary);
    font-size; 14px;
    color: #fff;
    padding: 10px 30px;
    border-radius: 5px;

`

const Home = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [isLast, setIsLast] = useState(false)

    const onTapButton = (value) => {
        if(value<= 5) setCurrentStep(value)
        if(value === 5) setIsLast(true)
    }

    const list = [<Details />, <StandardColor />, <NonStandardColor />, <ColorMapping />, <Summary /> ]

  


    return (
        <Body>
            <Header />

            <PageContainer>
                <LeftCont>
                    <Sidebar />
                </LeftCont>
                <RightCont>
                    <Heading>Create a product list</Heading>
                    <SubHeading>Lorem ipsum dolor summit</SubHeading>
                    <Flex>
                        <Steps currentStep={currentStep} />
                        <Content>
                            { list[currentStep - 1] }

                            <Action>
                                <PrevButton onClick={() => onTapButton(currentStep-1)}>Prev</PrevButton>
                                <Button onClick={() => onTapButton(currentStep+1)}>
                                    { isLast ? 'Review and Confirm' : 'Next'}
                                </Button>
                            </Action>
                        </Content>
                    </Flex>
                </RightCont>
            </PageContainer>
        </Body>
    )
}


export default Home;