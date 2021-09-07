import styled from 'styled-components'
import logo from '../logo.png'

const HeaderCont = styled.div`
    height: 75px;
    background-color: #f9f7f9;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const User= styled.div`
    display: flex;
    align-items: center;
`

const UserName = styled.span`
    font-size: 14px;
    margin-right: 20px;
`

const Avatar = styled.div`
    display: inline-block;
    width: 37px;
    height: 37px;
    border-radius: 10px;
    background-color: rgba(123, 31, 162, 0.14);

    & span {
        display: block;
        text-align: center;
        margin-top: 5px;
    }
`

const RetailerName = styled.div`
    margin-left: 20px;
    border-left: 1px solid #8b9693;
    display: inline-block;
    padding: 0 30px;
    color: #8b9693;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderCont>
            <Logo>
                <img src={logo} alt="Logo" />
                <RetailerName>Retailer Name</RetailerName>
            </Logo>
            <User>
                <UserName>John Doe</UserName>
                <Avatar><span>A</span></Avatar>
            </User>
        </HeaderCont>
    )
}

export default Header