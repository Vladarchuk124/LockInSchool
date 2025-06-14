import FAQitem from "./FAQitem";
import { useState, useEffect } from "react";

function FAQ() {
    const [fontSize, setFontSize] = useState("70px");
    const [padding, setPadding] = useState("30px 80px");

    useEffect(() => {
        const handleResize = () => {
            setFontSize(window.innerWidth <= 1000 ? "32px" : "70px");
            setPadding(window.innerWidth <= 650 ? "15px 40px" : "30px 80px");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const list = [
        { question: "q1", answer: "a1" },
        { question: "q2", answer: "a2" },
        { question: "q3", answer: "a3" },
        { question: "q4", answer: "a4" }
    ];

    return (
        <div style={{ minHeight: "100dvh", padding }}>
            <h1 style={{ textAlign: "center", fontSize }}>Часті питання</h1>
            {list.map((faq, index) => (
                <FAQitem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FAQ;
