import MyButton from "./MyButton"

function SettingsSection(props) {
    return (
        <div>
            <MyButton 
                className="btn btn-primary btn-lg"
                disabled={props.myState.isReady ? false : true}
            > Atomize!</MyButton>
        </div>
    )
}

export default SettingsSection