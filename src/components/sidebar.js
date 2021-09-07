import styled from 'styled-components'

const MenuItem = styled.div`
    padding-left: 18px;
    border-left: 2px solid var(--primary);
    height: 60px;
    background-color: rgba(123, 31, 162, 0.05);
    display: flex;
    align-items: center;
`

const Sidebar = () => {

    return (
        <div>
            <MenuItem>
                <span>Dashboard</span>
            </MenuItem>
        </div>
    )
}

export default Sidebar