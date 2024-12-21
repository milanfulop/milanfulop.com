import Header from '@/components/Header';
import styles from './page.module.css';
import About from '@/components/tabs/About';
import Projects from '@/components/tabs/Projects';
import Socials from '@/components/tabs/Socials';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Projects />
      <Socials />
    </div>
  );
}
/* 
      <p className={styles.description}>currently working on <a href='https://github.com/devRoot-workshop' target="_blank" rel="noopener noreferrer">devRoot</a>, and <a href='https://github.com/milanfulop/milanfulop.com' target="_blank" rel="noopener noreferrer">milanfulop.com</a>.</p>

*/