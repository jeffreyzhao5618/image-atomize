import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./style.module.css";
import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";
import { useState } from "react";

function DownloadSection(props) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const download = name => {
        if (name == null) return;
        const link = document.createElement('a');
        link.href = props.atomizedImageUrl;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }

    return (
        <>
            {props.atomizedImageUrl ?
                <img style={{width: "100%"}} src={props.atomizedImageUrl} />
            :
                <ImagePlaceholder />
            }
            <button
                className={`btn btn-secondary btn-lg mt-3 ${styles.fill}`}
                onClick={onOpenModal} 
                disabled={!props.myState.isCompleted}
            >
                View Image
            </button>
            <button
                className={`btn btn-secondary btn-lg mt-3 ${styles.fill}`}
                onClick={() => download(props.atomizedImageName)}
                disabled={!props.myState.isCompleted}
            >
                Download Image
            </button>
            <Modal open={open} onClose={onCloseModal} center>
                <img 
                    src={props.atomizedImageUrl}
                    style= {{
                        width: "100%"
                    }}
                />
            </Modal> 
        </>
    )
}

export default DownloadSection