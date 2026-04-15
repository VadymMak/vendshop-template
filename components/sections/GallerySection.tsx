import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import { t } from '@/lib/get-ui-text';
import styles from './GallerySection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function GallerySection() {
  const ui = t();
  return (
    <section id="gallery" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">{ui.gallery.title}</h2>
            <p className="section-subtitle">{ui.gallery.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {IMAGES.gallery.map((src, i) => (
            <ScrollReveal
              key={i}
              delay={i * 80}
              className={`${styles.item} ${i === 0 ? styles.featured : ''}`}
            >
              <Image
                src={src}
                alt={`Galéria ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
