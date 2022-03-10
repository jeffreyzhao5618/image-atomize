import styles from './style.module.css'

function SettingsSection(props) {

    const getName = filename => {
        if (filename == null) return;
        const arr = filename.split('.');
        arr[0] = arr[0] + '_atomized';
        return arr.join('.');
    }

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
        props.setAtomizedImageName(getName(props.imageName));
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