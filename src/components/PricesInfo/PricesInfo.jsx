import styles from "./PricesInfo.module.css";
import PriceCard from "./PriceCard";
import PlanNameTablet from "../PlanNameTablet/PlanNameTablet"

function PricesCards() {
    return (
        <div className={styles.pricesCards}>
            <PriceCard
                lessonCount="eight"
                lessonsNum="8"
                lessonPrice="650"
                priceWithoutSale="0000"
                currentPrice="5200"
                validDaysNum="45"
            />
            <PriceCard
                lessonCount="sixteen"
                discount="-5%"
                lessonsNum="16"
                lessonPrice="618"
                priceWithoutSale="10400"
                currentPrice="9888"
                validDaysNum="60"
            />
            <PriceCard
                lessonCount="thirtytwo"
                discount="-10%"
                lessonsNum="32"
                lessonPrice="585"
                priceWithoutSale="20800"
                currentPrice="18720"
                validDaysNum="80"
            />
        </div>
    );
}

function PricesInfo() {
    return (
        <section className={styles.pricesSection}>
            <h1>Тарифи</h1>
            <PlanNameTablet planNameText="Індивідуальні"/>
            <PricesCards />
        </section>
    );
}

export default PricesInfo;
