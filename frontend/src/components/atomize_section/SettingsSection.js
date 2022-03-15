import { useState } from 'react';
import styles from './style.module.css'

function SettingsSection(props) {

    const getName = filename => {
        if (filename == null) return;
        const arr = filename.split('.');
        arr[0] = arr[0] + '_atomized';
        return arr.join('.');
    }

    async function postImage() {
        props.setMyState(
            {
                isReady: false,
                isProcessing: true,
                isCompleted: false
            }
        )
        const formData = new FormData();
        formData.append('file', props.selectedImage );
        formData.append('border', rangeVal);
        try {
            const response = await fetch('/api/atomize',
                {
                    method: 'POST',
                    body: formData
                }
            );
            const data = await response.blob()
            props.setAtomizedImageUrl(URL.createObjectURL(data))
            props.setAtomizedImageName(getName(props.imageName));
            props.setMyState(
                {
                    isReady: false,
                    isProcessing: false,
                    isCompleted: true
                }
            )
        } catch (err) {
            alert("Something went wrong...")
            props.setMyState(
                {
                    isReady: true,
                    isProcessing: false,
                    isCompleted: false
                }
            )
        }
    }

    const [rangeVal, setRangeVal] = useState(50);

    return (
        <div>
            <label className="form-label">Dimension ({rangeVal} x {rangeVal})</label>
            <input
                type="range"
                className="form-range mb-3"
                id="dimensionRange"
                min="2"
                max="100"
                onChange={
                    e => {
                        setRangeVal(e.target.value)
                        if (props.selectedImage != null && !props.myState.isProcessing) {
                            props.setMyState(
                                {
                                    isReady: true,
                                    isProcessing: false,
                                    isCompleted: props.myState.isCompleted
                                }
                            )
                        }

                    }
                }
            />
            <button 
                className={`btn btn-primary btn-lg ${styles.fill}`}
                disabled={!props.myState.isReady}
                onClick={postImage}
            > Atomize!</button>
        </div>
    )
}

export default SettingsSection