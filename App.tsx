
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import GeminiDemo from './components/GeminiDemo';
import LoginView from './views/LoginView';
import OnboardingView from './views/OnboardingView';
import DashboardView from './views/DashboardView';
import MenuView from './views/MenuView';
import CheckoutView from './views/CheckoutView';
import SuperAdminView from './views/SuperAdminView';

export type ViewState = 'landing' | 'login' | 'onboarding' | 'dashboard' | 'menu' | 'checkout' | 'superadmin';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  const [restaurantData, setRestaurantData] = useState({
    name: 'Sabor de Casa',
    color: '#13ec13',
    deliveryRadius: 7,
    items: [
      { id: 1, name: 'Marmita Frango Grelhado', price: 22.90, description: 'Arroz integral, feijão e legumes.' },
      { id: 2, name: 'Feijoada Completa', price: 29.90, description: 'Acompanha couve e farofa.' }
    ]
  });

  const [allCustomers, setAllCustomers] = useState([
    { id: 1, name: 'Sabor de Casa', plan: 'Basico', status: 'Ativo', orders: 124, revenue: 2450.00 },
    { id: 2, name: 'Marmita Fit Pro', plan: 'Premium', status: 'Ativo', orders: 450, revenue: 12900.00 },
    { id: 3, name: 'Cozinha da Maria', plan: 'Basico', status: 'Pendente', orders: 0, revenue: 0 },
  ]);

  const navigate = (newView: ViewState) => {
    window.scrollTo(0, 0);
    setView(newView);
  };

  const handleUpdateConfig = (config: any) => {
    setRestaurantData(prev => ({ ...prev, ...config }));
  };

  switch (view) {
    case 'login': 
      return <LoginView onBack={() => navigate('landing')} onLogin={() => navigate('dashboard')} />;
    case 'onboarding': 
      return <OnboardingView onComplete={(data) => { setRestaurantData(prev => ({...prev, ...data})); navigate('dashboard'); }} />;
    case 'checkout':
      return <CheckoutView onCancel={() => navigate('landing')} onConfirm={() => navigate('onboarding')} />;
    case 'dashboard': 
      return <DashboardView onLogout={() => navigate('landing')} onViewMenu={() => navigate('menu')} restaurantName={restaurantData.name} deliveryRadius={restaurantData.deliveryRadius} onUpdateConfig={handleUpdateConfig} />;
    case 'menu': 
      return <MenuView onBack={() => navigate('dashboard')} restaurant={restaurantData} />;
    case 'superadmin':
      return <SuperAdminView onLogout={() => navigate('landing')} customers={allCustomers} />;
    default:
      return (
        <div className="min-h-screen bg-background-light">
          <Navbar onNavigate={navigate} />
          <main>
            <Hero onOpenDemo={() => setIsDemoOpen(true)} onStart={() => navigate('checkout')} />
            <SocialProof />
            <Features />
            <HowItWorks />
            <Pricing onSelectPlan={() => navigate('checkout')} />
            <FAQ />
            <FooterCTA onStart={() => navigate('checkout')} />
          </main>
          <Footer onNavigate={navigate} />
          
          {isDemoOpen && (
            <GeminiDemo 
              onClose={() => setIsDemoOpen(false)} 
              deliveryRadius={restaurantData.deliveryRadius}
              restaurantName={restaurantData.name}
            />
          )}
        </div>
      );
  }
};

export default App;
