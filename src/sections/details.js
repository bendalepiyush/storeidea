import styled from 'styled-components'

const Body = styled.div`
    padding: 50px 0;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--primary);
    padding: 20px;
    margin-bottom: 20px;
`

const InputText = styled.textarea`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--primary);
    padding: 20px;
    margin-bottom: 20px;
`

const Details = () => {
    return (
        <Body>
            <Input placeholder="Title" />
            <InputText placeholder="Description" rows="5" />
        </Body>
    )
}

export default Details