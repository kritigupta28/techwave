import styles from './contact.module.css';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className={styles.header}>
        <div className="container text-center">
          <h1 className={styles.title}>Get in Touch with Our Experts</h1>
          <p className={styles.subtitle}>
            We're here to answer any questions you have about our products and services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
            {/* Contact Information & Map */}
            <div>
              <div className={styles.infoCard}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Contact Information</h3>
                <ul className={styles.infoList}>
                  <li>
                    <span className={styles.infoIcon}>📍</span>
                    <div>
                      <strong>Head Office</strong>
                      <p>123 Techwave Ave, Business District, NY 10001</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.infoIcon}>📞</span>
                    <div>
                      <strong>Phone</strong>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.infoIcon}>✉️</span>
                    <div>
                      <strong>Email</strong>
                      <p>info@techwave-elecso.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <span>Google Map Embedded Here</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formCard}>
              <h3 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+1 (555) 000-0000" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="product">Select Product of Interest</label>
                  <select id="product" required defaultValue="">
                    <option value="" disabled>Choose an option</option>
                    <option value="generators">Generators</option>
                    <option value="it">IT Networking</option>
                    <option value="ups">UPS & Batteries</option>
                    <option value="solar">Solar Solutions</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                </div>

                <Button type="submit" variant="primary" className={styles.submitBtn}>
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
