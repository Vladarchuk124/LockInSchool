import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQitem({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: "1px solid #ccc", padding: "30px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                onClick={() => setIsOpen(prev => !prev)}>
                <h3 style={{fontSize: "35px", fontFamily: "Arial"}}>{question}</h3>
                {isOpen ? <Minus size={30} /> : <Plus size={30} />}
            </div>
            {isOpen && (<p style={{marginTop: "50px", color: "#555", fontSize: "25px", fontFamily: "Arial"}}>{answer}</p>)}
        </div>
    );
}

export default FAQitem;
