import styles from './style.module.css'

function SettingsSection(props) {

    async function postImage() {
        const formData = new FormData();
        formData.append('file', props.selectedImage );
        const response = await fetch('http://127.0.0.1:5000/atomize',
            {
                method: 'POST',
                body: formData
            }
        );
        const data = await response.blob()
        props.setAtomizedImageUrl(URL.createObjectURL(data))
    }

    return (
        <div>
            <button 
                className={`btn btn-primary btn-lg ${styles.fill}`}
                disabled={props.myState.isReady ? false : true}
                onClick={postImage}
            > Atomize!</button>
        </div>
    )
}

export default SettingsSection