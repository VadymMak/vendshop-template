import { STATS } from '@/lib/constants';
import styles from './StatsBar.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
