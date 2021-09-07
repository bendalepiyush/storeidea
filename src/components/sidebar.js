import styled from 'styled-components'
import { FaStore, FaTag, FaCog } from 'react-icons/fa'

const Body = styled.div`
    padding: 50px 0;
`

const ActiveMenuItem = styled.div`
    padding-left: 25px;
    border-left: 2px solid var(--primary);
    height: 60px;
    background-color: rgba(123, 31, 162, 0.05);
    display: flex;
    align-items: center;

    & span {
        margin-left: 15px;
        color: var(--primary);
        font-weight: 500;
    }
`

const MenuItem = styled.div`
    padding-left: 25px;
    height: 60px;
    display: flex;
    align-items: center;

    & span {
        margin-left: 15px;
        font-weight: 500;
    }
`

const Sidebar = () => {

    return (
        <Body>
            <MenuItem>
                <FaStore/> <span> Dashboard</span>
            </MenuItem>
            <ActiveMenuItem>
                <FaTag color="var(--primary)"/> <span> Products</span>
            </ActiveMenuItem>
            <MenuItem>
            <FaCog/> <span> Settings</span>
            </MenuItem>
        </Body>
    )
}

export default Sidebar