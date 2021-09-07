import styled from 'styled-components'
import {BsCloudUpload} from 'react-icons/bs'
import {GrDocumentCsv} from 'react-icons/gr'
import WithColorIconTab from '../components/with-color-icon-tab'

const Body = styled.div`
    padding: 50px 0;
    width: 100%;
`

const UploadDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    padding: 50px 0;
    margin-bottom: 50px;
`

const PP = styled.b`
    color: var(--primary);
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Close = styled.b`
    color: #d02929;
`

const Progress = styled.div`
    border-radius: 50px;
    height: 9px;
    background-color: #fff;
    margin: 10px 0 40px;

    & div {
        width: 60%;
        background-color: var(--primary);
        height: 9px;
        border-radius: 50px;
    }
`

const StandardColor = () => {
    return (
        <Body>
            <UploadDiv>
                <BsCloudUpload size={70} color="#8b9693" />
                <p>Drag file here or <PP>browse</PP> to upload</p>
            </UploadDiv>

            <Flex>
                <div><GrDocumentCsv size={20} /> &nbsp;<span> Standard Colour Dataset.csv</span></div>
                <div><Close>X</Close></div>
            </Flex>
            <Progress><div></div></Progress>

            <WithColorIconTab />
        </Body>
    )
}

export default StandardColor