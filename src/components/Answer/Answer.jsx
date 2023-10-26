import "./styles.sass";

export const Answer = ({answer, onClick}) => {
    return (
        <div className="answer" onClick={onClick}>
            <h1>{answer}</h1>
        </div>
    );
}