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
                <img style={{width: "100%"}} src={props.imageUrl} />
            :
                <ImagePlaceholder />
            }
            
            <FileInput className="form-control mt-3" type="file" id="formFile" accept=".jpg,.png" 
                onChange={e => {
                    console.log(e)
                    if (e.target.value != "") {
                        props.setImageUrl(URL.createObjectURL(e.target.files[0]));
                    } else {
                        props.setImageUrl(null);
                    }  
                }
            }/>
        </>
    )
}

export default UploadSection