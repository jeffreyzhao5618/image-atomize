import MyButton from "./MyButton"
import ImagePlaceholder from "./ImagePlaceholder"

function UploadSection() {
    return (
        <div>
            <ImagePlaceholder />
            <MyButton className="btn btn-secondary btn-lg mt-3">Upload Image</MyButton>
        </div>
    )
}

export default UploadSection