import styles from "./SignToSchool.module.css";
import ContactForm from "./ContactForm";

function SignToSchool() {
    return (
        <section className={styles.signSection}>
            <img src="./dog.jpg" alt="dogImg"/> 
            <div style={{display: "flex", flexDirection: "column", maxWidth: "900px"}}>
                <div>
                    <strong style={{color: "#1b3eb5", fontSize: "60px"}}>Ще кілька кліків</strong> 
                    <strong style={{fontSize: "60px"}}> і буст твоєї англійської гарантовано!</strong>
                </div>
                <div className={styles.signForm}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default SignToSchool;
