import userContext from "./UseContext";

const NoteState=(props)=>{
    const state={
        "name":"abc",
        "age":23
    }
    return(
        <div>
            <NoteState.provider value={state}>
                {props.children}
            </NoteState.provider>
        </div>
    )
}
export default NoteState