import "./styles.sass";

export const Question = ({title}) => {
    return (
        <div className="question">
            <div className="container" />
            <div className="question-title">
                <h1>{title}</h1>
            </div>
        </div>
    )
}