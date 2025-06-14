import styles from "./MainSection.module.css";

function MainSection() {
    return (
        <section className={styles.mainSection}>
            <div className='Main-section-text'>
                <h1>Мова й культура, як стиль життя.</h1>
                <p>
                    Ми створюємо спільноту учнів та викладачів, які зростають, підтримують одне одного й розвиваються не лише мовно, а й особистісно.
                </p>
                <p>
                    Нам важливо, аби уроки проходили в комфортній атмосфері, були якісно наповнені та ефективні.
                </p>
            </div>
            <img src="LockInSchool/mainPageImage.jpg" alt="mainPageImage"/> 
        </section>
    );
}

export default MainSection;
