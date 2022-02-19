function Finish(props) {

    const {data} = props
    console.log(data)

    return(
        <div>
            <h1>Quiz Ended</h1>
            <p>Total Score is {data}</p>
        </div>
    )
}

export default Finish