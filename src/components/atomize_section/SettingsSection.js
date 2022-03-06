import MyButton from "./MyButton"

function SettingsSection(props) {
    return (
        <div>
            <MyButton className="btn btn-primary btn-lg" disabled={props.imageUploaded}> Atomize!</MyButton>
        </div>
    )
}

export default SettingsSection