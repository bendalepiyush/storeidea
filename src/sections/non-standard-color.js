import styled from 'styled-components'
import {BsCloudUpload} from 'react-icons/bs'
import {GrDocumentCsv} from 'react-icons/gr'

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

const Color = styled.div`
    background-color: #fff;
    height: 40px;
    display: inline-flex;
    align-items: center;
    border-radius: 50px;
    margin-right: 20px;
`

const Title = styled.span`
    color: #000;
    padding: 0 20px;
`

const NonStandardColor = () => {
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

            <div>
                <Color>
                    <Title>Ruby Rasberry</Title>
                </Color>
                <Color>
                    <Title>Scarlet</Title>
                </Color>
                <Color>
                    <Title>Emarald</Title>
                </Color>
                <Color>
                    <Title>Midnight</Title>
                </Color>
                <Color>
                    <Title>Sky</Title>
                </Color>
                <Color>
                    <Title>Ocean</Title>
                </Color>
            </div>
        </Body>
    )
}

export default NonStandardColor