import "@/styles/fonts.sass";
import "@/styles/main.sass";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Questions from "@/questions.json";
import {useEffect, useState} from "react";
import Background from "@/components/Background";

export const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const rePickQuestion = () => {
        const randomIndex = Math.floor(Math.random() * Questions.length);

        if (currentQuestion === randomIndex) return rePickQuestion();

        setCurrentQuestion(randomIndex);
    }

    useEffect(() => {
        rePickQuestion();
    }, []);

    if (currentQuestion === null) return null;

    return (
        <>
            <Header />

            <MainContent question={Questions[currentQuestion]} rePickQuestion={rePickQuestion}/>

            <Background />
        </>
    );
}