import MyButton from "./MyButton"
import ImagePlaceholder from "./ImagePlaceholder"

function DownloadSection(props) {
    return (
        <div>
            {props.atomizedImageUrl ?
                <img style={{width: "100%"}} src={props.atomizedImageUrl} />
            :
                <ImagePlaceholder />
            }
            <MyButton className="btn btn-secondary btn-lg mt-3">Download Image</MyButton>
        </div>
    )
}

export default DownloadSection