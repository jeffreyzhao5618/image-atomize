import UploadSection from "./UploadSection";
import DownloadSection from "./DownloadSection";
import SettingsSection from "./SettingsSection";
import { useState } from "react";

function AtomizeSection() {

    const [myState, setMyState] = useState(
        {
            isReady: false,
            isProcessing: false,
            isCompleted: false
        }
    );
    const [imageUrl, setImageUrl] = useState(null);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg py-5">
                    <UploadSection
                        myState={myState}
                        setMyState={setMyState}
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                    />
                </div>
                <div className="col-lg py-5">
                    <SettingsSection myState={myState} setMyState={setMyState} />
                </div>
                <div className="col-lg py-5">
                    <DownloadSection myState={myState} setMyState={setMyState} />
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default AtomizeSection;