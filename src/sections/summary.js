import styled from 'styled-components'

const Body = styled.div`
    padding: 50px 0;
    width: 100%;
`

const Section = styled.div`
    margin-bottom: 20px;
`

const Label = styled.p`
    margin: 0;
    font-size: 14px;
    color: #8b9693;
`

const Content = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
`

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

const Div = styled.div`
    display: flex;
    align-items: center;
    margin 15px 0;
`

const Summary = () => {
    return (
        <Body>
            <Section>
                <Label>Title</Label>
                <Content>My personal product list</Content>
            </Section>
            <Section>
                <Label>Description</Label>
                <Content>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam</Content>
            </Section>
            <Section>
                <Label>Mappings</Label>

                <Div>
                    <Color>
                        <Circle color="#d02929" />
                        <Title>Red</Title>
                    </Color>
                    Ruby Rasberry, Scarlet
                </Div>
                <Div>
                    <Color>
                        <Circle color="#007754" />
                        <Title>Green</Title>
                    </Color>
                    Emrald
                </Div>
                <Div>
                    <Color>
                        <Circle color="#000" />
                        <Title>Black</Title>
                    </Color>
                    Twilight, Midnight
                </Div>
                <Div>
                    <Color>
                        <Circle color="#2994d0" />
                        <Title>Blue</Title>
                    </Color>
                    Sky, Ocean
                </Div>
            </Section>
        </Body>
    )
}

export default Summary