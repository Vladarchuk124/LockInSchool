import styles from "./SignToSchool.module.css";
import ContactForm from "./ContactForm";

function SignToSchool() {

    return (
        <section className={styles.signSection}>
            <img src="questionPageImage.jpg" alt="contactFormImg" />
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
                <div className={styles.textPart}>
                    <p>
                        <strong style={{ color: "#1b3eb5" }}>Ще кілька кліків </strong><strong> і буст твоєї англійської гарантовано!</strong>
                    </p>
                </div>
                <div className={styles.signForm}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default SignToSchool;
