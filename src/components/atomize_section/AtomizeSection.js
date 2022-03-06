import UploadSection from "./UploadSection";
import DownloadSection from "./DownloadSection";

function AtomizeSection() {
    return (
        <div className="container">
            <div className="row pb-5">
                <div className="col-lg">
                    <UploadSection buttonText="Upload Image" buttonDisabled={false} />
                </div>
                <div className="col-lg">
                Column
                </div>
                <div className="col-lg">
                    <DownloadSection buttonText="Download Image" buttonDisabled={true}/>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default AtomizeSection;