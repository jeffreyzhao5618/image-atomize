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

    const getName = filename => {
        if (filename == null) return;
        const arr = filename.split('.');
        arr[0] = arr[0] + '_atomized';
        return arr.join('.');
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
                onClick={() => download(getName(props.imageName))}
            >
                Download Image
            </button>
        </div>
    )
}

export default DownloadSection