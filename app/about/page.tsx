import styles from './about.module.css';

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container text-center">
          <h1 className={styles.title}>Powering Your Business, Connecting Your Future.</h1>
          <p className={styles.subtitle}>
            Your trusted partner for end-to-end power backup, network setups, and green energy solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Our Story</h2>
              <p>
                Techwave Elecso was founded with a singular vision: to provide businesses and homes with reliable, uninterrupted power and seamless connectivity. In today's fast-paced digital world, downtime is not an option. We are a trusted partner offering comprehensive solutions that span from traditional power generation to cutting-edge IT infrastructure.
              </p>
              <p>
                Over the years, we have expanded our portfolio to include sustainable solar energy solutions and robust UPS & SMF VRLA battery systems. Our commitment to quality, innovation, and customer satisfaction has made us an industry leader in both B2B and B2C markets.
              </p>
            </div>
            <div className={styles.imagePlaceholder}>
              <span>Our Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            <div className={styles.card}>
              <div className={styles.icon}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver reliable power and network infrastructure that empowers our clients to operate efficiently. We strive to reduce downtime for businesses through expert installation, 24/7 support, and top-tier product offerings.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the foremost provider of integrated energy and IT solutions, driving the transition towards sustainable solar energy while keeping the world connected and powered without interruption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
