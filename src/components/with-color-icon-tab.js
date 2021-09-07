import styled from 'styled-components'

const Color = styled.div`
    background-color: #fff;
    height: 40px;
    display: inline-flex;
    align-items: center;
    border-radius: 50px;
    margin-right: 20px;
`

const Circle = styled.div`
    background-color: ${props => props.color};
    height: 30px;
    width: 30px;
    border-radius: 50px;
    margin: 0 10px;
`

const Title = styled.span`
    color: #000;
    padding-right: 20px;
`

const WithColorIconTab = () => {
    return (
        <div>
            <Color>
                <Circle color="#d02929" />
                <Title>Red</Title>
            </Color>
            <Color>
                <Circle color="#007754" />
                <Title>Green</Title>
            </Color>
            <Color>
                <Circle color="#000" />
                <Title>Black</Title>
            </Color>
            <Color>
                <Circle color="#2994d0" />
                <Title>Blue</Title>
            </Color>

        </div>
    )
}

export default WithColorIconTab