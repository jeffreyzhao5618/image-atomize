import MyButton from "./MyButton"
import ImagePlaceholder from "./ImagePlaceholder"

function DownloadSection() {
    return (
        <div>
            <ImagePlaceholder />
            <MyButton className="btn btn-secondary btn-lg mt-3">Download Image</MyButton>
        </div>
    )
}

export default DownloadSection