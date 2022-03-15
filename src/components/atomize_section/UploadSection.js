import styled from 'styled-components'
import ImagePlaceholder from "./ImagePlaceholder"

const FileInput = styled.input`
    display: block;
    margin: auto;
    font-size: 1.25rem;
`

function UploadSection(props) {

    return (
        <>
            {props.imageUrl ?
                <img style={{width: "100%"}} src={props.imageUrl} alt="Selected" />
            :
                <ImagePlaceholder showSpinner={false} />
            }
            
            <FileInput className="form-control mt-3" type="file" id="formFile" accept=".jpg,.png,.jpeg"
                disabled={props.myState.isProcessing}
                onChange={e => 
                    {
                        if (e.target.value !== "") {
                            props.setImageName(e.target.files[0].name);
                            props.setImageUrl(URL.createObjectURL(e.target.files[0]));
                            props.setSelectedImage(e.target.files[0]);
                            props.setMyState(
                                {
                                    isReady: true,
                                    isProcessing: false,
                                    isCompleted: props.myState.isCompleted
                                }
                            );
                        } else {
                            props.setImageUrl(null);
                            props.setSelectedImage(null);
                            props.setMyState(
                                {
                                    isReady: false,
                                    isProcessing: false,
                                    isCompleted: props.myState.isCompleted
                                }
                            )
                        }  
                    }
                }
            />
        </>
    )
}

export default UploadSection