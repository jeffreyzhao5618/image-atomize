import styled from 'styled-components'
import faImage from './image-regular.svg'

const ImagePlaceholderDiv = styled.div`
    width: 90%;
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

function ImageSection(props) {
    return (
        <div className="container pt-5">
            <ImagePlaceholderDiv>
                <ImagePlaceholderIcon className="user-select-none" src={faImage} />
            </ImagePlaceholderDiv>
        </div>
    )
}

export default ImageSection