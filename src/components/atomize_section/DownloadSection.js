import ImagePlaceholder from "./ImagePlaceholder"
import styles from "./style.module.css"

function DownloadSection(props) {

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
        <div>
            {props.atomizedImageUrl ?
                <img style={{width: "100%"}} src={props.atomizedImageUrl} />
            :
                <ImagePlaceholder />
            }
            <button
                className={`btn btn-secondary btn-lg mt-3 ${styles.fill}`}
                onClick={() => download(props.atomizedImageName)}
                disabled={!props.myState.isCompleted}
            >
                Download Image
            </button>
        </div>
    )
}

export default DownloadSection