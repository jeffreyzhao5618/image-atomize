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
    const [imageName, setImageName] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [atomizedImageUrl, setAtomizedImageUrl] = useState(null);
    const [atomizedImageName, setAtomizedImageName] = useState(null);

    return (
        <>
            <div className="row">
                <div className="col-lg py-5">
                    <UploadSection
                        myState={myState}
                        setMyState={setMyState}
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        setImageName = {setImageName}
                    />
                </div>
                <div className="col-lg py-5">
                    <SettingsSection
                        myState={myState}
                        setMyState={setMyState}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        atomizedImageUrl={atomizedImageUrl}
                        setAtomizedImageUrl={setAtomizedImageUrl}
                        imageName={imageName}
                        setAtomizedImageName={setAtomizedImageName}
                    />
                </div>
                <div className="col-lg py-5">
                    <DownloadSection
                        myState={myState}
                        setMyState={setMyState}
                        atomizedImageUrl={atomizedImageUrl}
                        setAtomizedImageUrl={setAtomizedImageUrl}
                        atomizedImageName={atomizedImageName}
                    />
                </div>
            </div>
            <hr/>
        </>
    )
}

export default AtomizeSection;