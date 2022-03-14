import styled from 'styled-components'
import faImage from './image-regular.svg'

const ImagePlaceholderDiv = styled.div`
    aspect-ratio: 1 / 1;
    border-style: dashed;
    border-color: #696969;
    margin: auto;
`

const ImagePlaceholderIcon = styled.img`
    width: 30%;
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const MySpinner = styled.div`
    width: 20%;
    height: 20%;
    margin: 0;
    position: relative;
    top: 40%;
    left: 40%;
`

function ImageSection(props) {
    return (
        <ImagePlaceholderDiv>
            {
                props.showSpinner ?
                    <MySpinner className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </MySpinner>
                :
                    <ImagePlaceholderIcon className="user-select-none" src={faImage} />
            }
        </ImagePlaceholderDiv>
    )
}

export default ImageSection