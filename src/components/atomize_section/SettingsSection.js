import MyButton from "./MyButton"

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
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <MyButton 
                className="btn btn-primary btn-lg"
                disabled={props.myState.isReady ? false : true}
                onClick={postImage}
            > Atomize!</MyButton>
        </div>
    )
}

export default SettingsSection