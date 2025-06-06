import styles from "./AboutSchool.module.css"
import FeatureCard from "./FeatureCard";

function FeaturesSection() {
    return (
        <>
            <div className="left-side">
                <FeatureCard
                    cardColor="blue"
                    cardSide="left"
                    imgSource="./emoji/emoji1.png"
                    imgClass="emoji-icon1"
                    titleText="Досвідчені та кваліфіковані викладачі,"
                    defaultText="що зроблять процес навчання комфортним та максимально ефективним."
                />

                <FeatureCard
                    cardColor="darkblue"
                    cardSide="left"
                    imgSource="./emoji/emoji2.png"
                    imgClass="emoji-icon2"
                    titleText="Гнучкий онлайн формат:"
                    defaultText="завгодно, де-завгодно та з ким-завгодно."
                    extraText="коли-"
                />

                <FeatureCard
                    cardColor="grey"
                    cardSide="left"
                    imgSource="./emoji/emoji3.png"
                    imgClass="emoji-icon3"
                    titleText="Персональний менеджер,"
                    defaultText="підкаже як організувати навчальний процес та вирішить усі твої запити."
                    extraText="що підбере тобі викладача,"
                />
            </div>

            <div className="right-side">
                <FeatureCard
                    cardColor="grey"
                    cardSide="right"
                    imgSource="./emoji/emoji4.png"
                    imgClass="emoji-icon4"
                    titleText="Телеграм-бот"
                    defaultText="нагадає про уроки…"
                    extraText="що відслідковує твої оплати,"
                />

                <FeatureCard
                    cardColor="blue"
                    cardSide="right"
                    imgSource="./emoji/emoji5.png"
                    imgClass="emoji-icon5"
                    titleText="Навчання в просторі від Google:"
                    defaultText="домашки та усі матеріали в одному місці."
                    extraText="уроки,"
                />

                <FeatureCard
                    cardColor="darkblue"
                    cardSide="right"
                    imgSource="./emoji/emoji6.png"
                    imgClass="emoji-icon6"
                    titleText="Продумана програма,"
                    defaultText="і зробить твоє навчання максимально цікавим та продуктивним."
                    extraText="що гарантує результат"
                />
            </div>
        </>
    );
}

function AboutSchool() {
    return (
        <section className={styles.aboutSchool}>
            <h1>Lock in - це</h1>
            <div className={styles.description}>
                <FeaturesSection />
            </div>
        </section>
    );
}

export default AboutSchool;
