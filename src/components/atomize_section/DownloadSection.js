import ImagePlaceholder from "./ImagePlaceholder"
import styles from "./style.module.css"

function DownloadSection(props) {
    return (
        <div>
            {props.atomizedImageUrl ?
                <img style={{width: "100%"}} src={props.atomizedImageUrl} />
            :
                <ImagePlaceholder />
            }
            <button className={`btn btn-secondary btn-lg mt-3 ${styles.fill}`}>Download Image</button>
        </div>
    )
}

export default DownloadSection