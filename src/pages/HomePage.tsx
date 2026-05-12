import { Hero } from '../components/home/Hero';
import { ShopSection } from '../components/home/ShopSection';
import { MechanicsSection } from '../components/home/MechanicsSection';
import { ServiceIntroSection } from '../components/home/ServiceIntroSection';
import { BookingSection } from '../components/home/BookingSection';

export function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <ShopSection />
      <MechanicsSection />
      <ServiceIntroSection />
      <BookingSection />
    </div>
  );
}
