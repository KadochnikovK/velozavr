import AboutSection from "./Components/AboutSection/AboutSection";
import DescriptionSection from "./Components/DescriptionSection/DescriptionSection";
import Header from "./Components/Header/Header";
import OfferSection from "./Components/OfferSection/OfferSection";
import RentalSection from "./Components/RentalSection/RentalSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";

function App() {
  return (
    <div className="main-container">
      <Header />
      <DescriptionSection />
      <OfferSection/>
      <AboutSection />
      <ServiceSection items={[{name: 'Годовое ТО', link: '#'},{name: 'Выравнивание колес', link: '#'},{name: 'Настройка переключателей', link: '#'}]}/>
      <RentalSection />
    </div>
  );
}

export default App;
