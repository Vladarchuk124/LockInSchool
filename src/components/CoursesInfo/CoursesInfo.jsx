import styles from "./CoursesInfo.module.css";
import CourseCard from "./CourseCard";

function CoursesCards() {
    return (
        <div className={styles.coursesCards}>
            <CourseCard 
                planName="individual"
                imgSource="./emoji/solo.png"
                planNameText="Індивідуальні"
                titleText="Навчання лише для тебе: фокус на ваші цілі, максимальна увага викадача."
                item1="Заняття один на один з викладачем, ретельно підібраним спеціально для тебе."
                item2="Персоніфікована програма, створена згідно з твоїми потребами, бажанями, інтересами та ритмом життя."
                item3="Зручний графік та темп занять, що узгоджується напряму з викладачем."
                item4=""
                durationTime="55хв"
            />

            <CourseCard 
                planName="duos"
                imgSource="./emoji/duo.png"
                planNameText="Парні"
                titleText="Ідеальний баланс між індивідуальним підходом і живим спілкуванням."
                item1="Уроки разом з твоїм другом або ж з партнером твого рівня, якого підберемо тобі ми."
                item2="Програма, адаптована під ваші спільні цілі, темп та рівень."
                item3="Зручний графік занять, що узгоджується з викладачем та study-buddy."
                item4="Підтримка та мотивація в навчанні."
                durationTime="55хв"
            />

            <CourseCard 
                planName="group"
                imgSource="./emoji/group.png"
                planNameText="Групові"
                titleText="Динамічне навчання та справжня  розмовна практика."
                item1="Навчання в невеликих групах зі студентами твого рівня."
                item2="Прокачка спікінгу у живих розмовах з різними людьми."
                item3="Збалансовані, динамічні уроки й темп навчання, щоб кожен студент відчував прогрес та увагу викладача."
                item4="Проєкти, дебати, дискусії в групах."
                durationTime="80хв / 2 заняття на тиждень"
            />
        </div>
    );
}


function CoursesInfo() {
    return (
        <section className={styles.coursesInfo}>
            <h1 className={styles.title}>Власні курси</h1>
            <CoursesCards />
        </section>
    );
}

export default CoursesInfo;
