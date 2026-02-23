import { Helmet } from "react-helmet-async";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Mia Brigaderia — Doces Artesanais</title>
        <meta
          name="description"
          content="Doces artesanais com amor. Brigadeiros gourmet, brownies e delícias da Mia Brigaderia."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mia Brigaderia",
            description: "Doces artesanais com amor.",
            image: "https://i.imgur.com/ptJh8IG.png",
            telephone: "+55 99 9999-9999",
          })}
        </script>
      </Helmet>

      <NavBar onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
