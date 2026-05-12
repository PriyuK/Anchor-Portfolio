import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaInstagram, FaEnvelope, FaPhoneAlt, FaBars, FaTimes, FaMicrophoneAlt, FaCalendarCheck, FaChevronLeft, FaChevronRight, FaMicrophone } from 'react-icons/fa';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/slidecorporate1.jpeg",
      quote: "Rekha completely transformed the energy of our corporate summit. Absolute perfection.",
      client: "TVS Apache Bike Launch"
    },
    {
      image: "/wedding1.jpeg",
      quote: "Our wedding would not have been the same without her elegant and engaging presence.",
      client: "The Sahu Family"
    },
    {
      image: "/wedding2.jpeg",
      quote: "Rekha brought so much warmth, grace, and energy to our Sangeet. She truly made our special day unforgettable!",
      client: "The Gupta Family"
    },
    {
      image: "/wedding3.jpeg",
      quote: "From the Haldi to the reception, her hosting was seamless and deeply engaging. She kept the crowd smiling the entire time!",
      client: "The Verma Family"
    },
    {
      image: "/wedding4.jpeg",
      quote: "Absolutely brilliant! She effortlessly managed all the family interactions and brought such a joyful vibe to our entire wedding celebration.",
      client: "The Mishra Family"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="app-container">
      {/* Ambient Background */}
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="glass-nav">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-bold">RE</span><span className="logo-bold">KHA</span><FaMicrophone className="logo-dot" />
          </div>
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#expertise" onClick={() => setIsMobileMenuOpen(false)}>Expertise</a></li>
            <li><a href="#showreel" onClick={() => setIsMobileMenuOpen(false)}>Showreel</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-section">
        <div className="hero-grid">
          <motion.div className="hero-text" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge">International Event Anchor</div>
            <h1 className="hero-title">Commanding the <span>Stage.</span></h1>
            <p className="hero-subtitle">A magnetic voice and an undeniable presence. Elevating your most prestigious events into unforgettable experiences.</p>
            <div className="glass-card hero-image-card">
              <img src="/hero.jpeg" alt="Rekha Patel" className="hero-img" />
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary"><FaCalendarCheck /> Book Rekha</a>
              <a href="#showreel" className="btn-secondary"><FaPlay /> Watch Reel</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section-padding">
        <motion.div className="glass-card about-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="about-grid">
            <div className="about-img-wrapper">
              <img src="/heartbeat.jpeg" alt="On Stage" />
            </div>
            <div className="about-content">
              <h2>The Heartbeat of the Stage</h2>
              <p>An exceptional event requires a conductor of energy. With masterful stage presence, Rekha effortlessly blends professionalism and raw charisma to bring your vision to life.</p>
              <div className="stats">
                <div className="stat-item">
                  <h3>80+</h3>
                  <p>Events Conducted</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>100K+</h3>
                  <p>Audience Engaged</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section-padding">
        <div className="section-header">
          <h2>Signature <span>Expertise</span></h2>
          <p>Mastering every stage, across every format</p>
        </div>
        <motion.div className="expertise-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[
            { title: "Luxury Weddings", desc: "Infusing your most precious day with royal elegance, warmth, and a touch of magic.", image: "/lux1wedding.jpeg" },
            { title: "Corporate Galas", desc: "Delivering absolute professionalism and a commanding presence for elite summits.", image: "/corporate1.jpeg" },
            { title: "Live Concerts", desc: "Fueling the arena with high-octane energy to keep thousands engaged and electrified.", image: "/concert.jpeg" },
            { title: "Private Gatherings", desc: "Creating intimate, elegant, and memorable experiences that feel exclusively yours.", image: "/pvtgathering.jpeg" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="expertise-image-card"
              variants={fadeUp}
              whileHover={{ y: -10 }}
            >
              <img src={item.image} alt={item.title} className="expertise-bg-img" />
              <div className="expertise-overlay">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Showreel */}
      <section id="showreel" className="section-padding">
        <div className="section-header">
          <h2>Live in <span>Action</span></h2>
          <p>Experience the energy firsthand</p>
        </div>
        <motion.div className="glass-card showreel-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <video
            src="/showreel.MOV"
            className="showreel-video"
            controls
            poster="/thumbnail.PNG"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      {/* Testimonials Slideshow */}
      <section id="gallery" className="section-padding">
        <div className="section-header">
          <h2>Client <span>Love</span></h2>
          <p>Stories from satisfied partners</p>
        </div>

        <motion.div className="slideshow-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <button className="slider-btn prev-btn" onClick={prevSlide}><FaChevronLeft /></button>

          <div className="glass-card slideshow-wrapper">
            <motion.div
              className="slideshow-track"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="slide-card">
                  <div className="slide-img-wrapper">
                    <img src={slide.image} alt={slide.client} />
                  </div>
                  <div className="slide-content">
                    <p className="quote">"{slide.quote}"</p>
                    <h4 className="client-name">- {slide.client}</h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}><FaChevronRight /></button>

          <div className="slide-dots">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="contact-container">
          <motion.div className="contact-text-area image-backed" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src="/hostfooter.jpeg" alt="Rekha Patel" className="contact-bg-img" />
            <div className="contact-overlay">
              <h2>Need a <br /><span>Host?</span></h2>
              <p>Ready to bring unmatched energy to your next event? Reach out to discuss dates and details.</p>
            </div>
          </motion.div>

          <motion.div className="contact-bento" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.a href="tel:+916264343243" className="bento-item glass-card" variants={fadeUp}>
              <div className="bento-icon"><FaPhoneAlt /></div>
              <div className="bento-content">
                <span className="bento-label">Call Directly</span>
                <span className="bento-value">+91 6264343243</span>
              </div>
              <div className="bento-arrow"><FaChevronRight /></div>
            </motion.a>

            <motion.a href="mailto:rekhavkspatel22@gmail.com" className="bento-item glass-card" variants={fadeUp}>
              <div className="bento-icon"><FaEnvelope /></div>
              <div className="bento-content">
                <span className="bento-label">Email Address</span>
                <span className="bento-value">rekhavkspatel22@gmail.com</span>
              </div>
              <div className="bento-arrow"><FaChevronRight /></div>
            </motion.a>

            <motion.a href="https://www.instagram.com/rekha_official22" target="_blank" rel="noopener noreferrer" className="bento-item glass-card" variants={fadeUp}>
              <div className="bento-icon insta-gradient"><FaInstagram /></div>
              <div className="bento-content">
                <span className="bento-label">Instagram</span>
                <span className="bento-value">@rekha_official22</span>
              </div>
              <div className="bento-arrow"><FaChevronRight /></div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rekha Patel. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
