import { use, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        telegram: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Ім'я обов'язкове";
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = "Номер телефону обов'язковий";
        }
        else if (!/^\+380\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Невірний формат (наприклад +380123456789)";
        }

        if (!formData.telegram.trim()) {
            newErrors.telegram = "Telegram обов'язковий";
        }
        else if (!/^@[\w\d_]+$/.test(formData.telegram)) {
            newErrors.telegram = "Telegram нік має починатися з @";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: null }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        emailjs.send('service_a7vv4xi', 'template_tbx6u0h', {
            name: formData.name,
            phone: formData.phone,
            telegram: formData.telegram
        }, 'ZRS4qKoExWBPb64LW')
            .then(() => {
                setFormData({ name: "", phone: "", telegram: "" });
                setIsSubmitted(true);
            }).catch(err => {
                alert("Помилка надсилання форми");
                console.error(err);
            });
    };

     if (isSubmitted) {
        return <p className={styles.submittedText}>Заявку надіслано!</p>;
    }

    return (
        <form className={styles.contactForm}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                <label>
                    Ім'я:
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? styles.errorInput : ""}
                        type="text"
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                </label>
                <label>
                    Номер телефону:
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? styles.errorInput : ""}
                        type="text"
                    />
                    {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                </label>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>
                    Нік у телеграмі("@name"):
                    <input
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleChange}
                        className={errors.telegram ? styles.errorInput : ""}
                        type="text"
                    />
                    {errors.telegram && <span className={styles.errorMsg}>{errors.telegram}</span>}
                </label>
            </div>
            <button type="submit" onClick={handleSubmit}>Надіслати заявку</button>
        </form>
    );
}

export default ContactForm;
