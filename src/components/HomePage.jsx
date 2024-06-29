import react from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { AboutUs } from './AboutUs';

export const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs />
        </div>
    )
}