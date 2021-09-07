import styled, {css} from 'styled-components'
import {FaCheck} from 'react-icons/fa'

const Body = styled.div`
    padding: 25px 0;
    position: relative;
    width: 300px;
`

const Item = styled.div`
    padding: 25px 0;
    display: flex;
    justify-content: flex-end;
`

const Title = styled.span`
    display: block;
    font-size: 16px;
    text-align: right;
`

const SubTitle = styled.span`
    font-size: 14px;
    color: #8b9693;
    text-align: right;
    display: block;
`

const Status = styled.div`
    margin-left: 30px;
    border-radius: 100px;
    width: 42px;
    height: 42px;
    border: 1px solid var(--primary);
    font-weight: 700;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
    z-index: 999;
    & span {
        margin: 10px 0;
        display: block;
        color: var(--primary);
    }

    ${props => props.done && css`
        border-color: #007754;

        & .icon {
            margin-top: 13px;
        }
    `}

    ${props => props.active && css`
        background-color: var(--primary);
       
        & span {
            color: #fff;
        }
    `}
`

const DashedLine = styled.div`
    position: absolute;
    border-left: 1px dashed;
    height: 100%;
    width: 1px;
    top: 0;
    right: 21px;
    z-index: 0;
`


const Steps = (props) => {

    const steps = [
        {
            id: 1,
            title: 'Details',
            subtitle: 'Product list info'
        },
        {
            id: 2,
            title: 'Standard Colours',
            subtitle: 'Import or add it'
        },
        {
            id: 3,
            title: 'Custom Colours',
            subtitle: 'Import or add it'
        },
        {
            id: 4,
            title: 'Colour Mapping',
            subtitle: 'Map colours'
        },
        {
            id: 5,
            title: 'Summary',
            subtitle: 'Review and confirm'
        },
    ]

    
    return (
        <Body>

            <DashedLine />

            <div>
            {
                steps.map((item) => {

                    let done = false
                    let active = false

                    if(item.id === props.currentStep) {
                        active = true
                    }

                    if(item.id < props.currentStep) {
                        done = true
                    }

                    return (
                        <Item>
                            <div>
                                <Title>{item.title}</Title>
                                <SubTitle>{item.subtitle}</SubTitle>
                            </div>
    
                            <Status done={done} active={active}>
                                {
                                    done ? <span className="icon"><FaCheck color="#007754" /></span> : <span>{item.id}</span>
                                }
                            </Status>
                        </Item>
                    )
                })
            }
            </div>
        </Body>
    )
}

export default Steps