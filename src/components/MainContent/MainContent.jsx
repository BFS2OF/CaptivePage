import Question from "@/components/Question";
import Answer from "@/components/Answer";
import "./styles.sass";

export const MainContent = ({question, rePickQuestion}) => {

    const authenticate = () => {
        location.href = "/nodogsplash_auth";
    }

    const correctAnswer = question.answers[0];

    const shuffle = () => {
        let array = [...question.answers];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <main>
            <div className="interface">
                <Question title={question.question} />

                <div className="answers">
                    {shuffle().map((answer, index) => (
                        <Answer key={index} answer={answer} onClick={answer === correctAnswer ? authenticate : rePickQuestion}/>
                    ))}
                </div>
            </div>
        </main>
    )
}