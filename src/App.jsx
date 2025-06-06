import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import AboutSchool from './components/AboutSchoolSection/AboutSchool';
import CoursesInfo from './components/CoursesInfo/CoursesInfo';
import PricesInfo from './components/PricesInfo/PricesInfo';
import OtherPlansPrices from './components/OtherPlansPrices/OtherPlansPrices';
import SignToSchool from './components/SignToSchool/SignToSchool';
import Reviews from './components/Reviews/Reviews'
import FAQ from './components/FAQ/FAQ'
import AskQuestion from './components/AskQuestion/AskQuestion'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <div id="about"><AboutSchool /></div>
      <div id="courses"><CoursesInfo /></div>
      <div id="prices"><PricesInfo /></div>
      <OtherPlansPrices />
      <SignToSchool />
      <div id="reviews"><Reviews /></div>
      <div id="faq"><FAQ /></div>
      <AskQuestion />
      <Footer />
    </>
  );
}

export default App;
