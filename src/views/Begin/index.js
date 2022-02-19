function Begin(props) {

    const {beginValue} = props

    return(
        <div>
            <h1>Quiz To Begin</h1>
            <button onClick={() => beginValue(true)}>Start</button>
        </div>
    )
}

export default Begin