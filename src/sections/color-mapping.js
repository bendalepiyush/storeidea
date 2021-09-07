import styled from 'styled-components'
import WithColorIconTab from '../components/with-color-icon-tab'

const Body = styled.div`
    padding: 50px 0;
    width: 100%;
`

const Single = styled.div`
    margin-bottom: 50px;
    width: 100%;
`

const Title = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
`

const ColorMapping = () => {
    return (
       <Body>
           <Single>
                <Title>Ruby Rasberry</Title>
               <WithColorIconTab />
           </Single>
           <Single>
                <Title>Scarlet</Title>
               <WithColorIconTab />
           </Single>

       </Body>
    )
}

export default ColorMapping