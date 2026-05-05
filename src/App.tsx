import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { WhyVideoVault } from "./components/WhyVideoVault";
import { Tags } from "./components/Tags";
import { ApiKeySetup } from "./components/ApiKeySetup";
import { Privacy } from "./components/Privacy";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <WhyVideoVault />
        <Tags />
        <ApiKeySetup />
        <Privacy />
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
