import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureIcons from "../components/FeatureIcons";
import DescriptionSection from "../components/DescriptionSection";
import TodayEvent from "../components/TodayEvent";
import ReservationBanner from "../components/ReservationBanner";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureIcons />
      <DescriptionSection />
      <TodayEvent />
      <ReservationBanner />
      <Footer />
    </>
  );
}
