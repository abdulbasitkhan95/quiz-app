import { useEffect, useState } from 'react';

function Question(props) {

    const [totalOptions, setTotalOptions] = useState([])
    const { data: {correct_answer, incorrect_answers, question}, currentIndex, currentAnswer } = props
    useEffect(() => {
        incorrect_answers.push(correct_answer)
        setTotalOptions(shuffle(incorrect_answers))
    }, [currentIndex])

    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return(
        <div>
            <h4>{currentIndex}) {question}</h4>
            {
                totalOptions.map((singleOption, index) => {
                    return <div key={singleOption}><input value={singleOption} onChange={(e) => currentAnswer(e.target.value)} type="radio" name='radioOption'/>{singleOption}</div>
                })
            }
        </div>
    )
}

export default Question