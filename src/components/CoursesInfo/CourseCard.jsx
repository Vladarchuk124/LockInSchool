import styles from "./CourseCard.module.css";

function CourseCard({planName, imgSource, planNameText, titleText, item1, item2, item3, item4, durationTime}) {
    return (
        <div className={`${styles.courseCard} ${styles[planName]}`}>
            <div className={styles.courseName}>
                <img src={imgSource} alt="emoji"></img>
                <h1>{planNameText}</h1>
            </div>
            <h3>{titleText}</h3>
            <nav>
                <ul>
                    <li>{item1}</li>
                    <li>{item2}</li>
                    <li>{item3}</li>
                    {item4 && <li>{item4}</li>}
                </ul>
            </nav>
            <div className={styles.durationSection}>
                <img src="LockInSchool/emoji/clock.png" alt="emoji" className={styles.emojiClock}></img>
                <div className={styles.durationText}>
                    <h3>Тривалість</h3>
                    <p>{durationTime}</p>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
