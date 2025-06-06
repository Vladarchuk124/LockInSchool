import FAQitem from "./FAQitem";

function FAQ() {
    const list = [
        { question: "q1", answer: "a1" },
        { question: "q2", answer: "a2" },
        { question: "q3", answer: "a3" },
        { question: "q4", answer: "a4" }
    ];

    return (
        <div style={{minHeight: "100dvh", padding: "30px 100px"}}>
            <h1 style={{textAlign: "center", fontSize: "70px"}}>Часті питання</h1>
            {list.map((faq, index) => (
                <FAQitem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FAQ;
