import styles from "./RegisterButton.module.css";

function RegisterButton() {
    return (
        <a href="#signpage">
            <button className={styles.registerButton}>Записатися</button>
        </a>
    );
}

export default RegisterButton;
