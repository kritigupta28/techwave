import styles from './page.module.css';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Powering the Future with <span className="text-secondary">Reliability</span> & <span className="text-primary">Connectivity</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Experience uninterrupted power, seamless connectivity, and sustainable energy solutions tailored for your business and home.
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="primary">Get a Free Quote</Button>
              <Button href="/about" variant="outline">Explore Our Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section className={`section-padding bg-gray`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Our Core Solutions</h2>
            <p className="text-light">Comprehensive infrastructure for every requirement.</p>
          </div>
          <div className="grid grid-cols-4">
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Generators</h3>
              <p>Reliable backup power for all industrial and commercial needs.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌐</div>
              <h3>IT Networking</h3>
              <p>Complete IT infrastructure and networking hardware setups.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔋</div>
              <h3>UPS & Batteries</h3>
              <p>Seamless power transitions and long-lasting VRLA battery setups.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>☀️</div>
              <h3>Solar Solutions</h3>
              <p>Sustainable, green energy setups for a better tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className={`grid grid-cols-2 ${styles.whyChooseUsGrid}`}>
            <div>
              <h2>Why Choose Techwave Elecso?</h2>
              <p style={{ marginBottom: '2rem' }}>
                We are dedicated to providing top-tier solutions that keep your operations running smoothly. Our commitment to excellence sets us apart.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <div className={styles.featureCheck}>✓</div>
                  <div>
                    <h4>Expert Installation</h4>
                    <p className="text-light">Professional setup by certified technicians.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.featureCheck}>✓</div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p className="text-light">Round-the-clock assistance whenever you need it.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.featureCheck}>✓</div>
                  <div>
                    <h4>Top Quality Brands</h4>
                    <p className="text-light">We partner with industry-leading manufacturers.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.whyImageContainer}>
              <div className={styles.placeholderImage}>
                <span>Techwave Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
