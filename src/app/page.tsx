import TabSelector from '@/components/TabSelector';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="title">Milan Fulop</h1>
      <p className="description">web developer & designer</p>
      <br/>
      <TabSelector />
      <div className="links">
        <p><a href="mailto:fulopmilan170@gmail.com">say hello!</a></p>
        <p><a href="https://github.com/milanfulop" target="_blank" rel="noopener noreferrer">github</a></p>
        <p><a href="https://www.linkedin.com/in/milan-fulop/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
      </div>
    </div>
  );
}
/* 
      <p className={styles.description}>currently working on <a href='https://github.com/devRoot-workshop' target="_blank" rel="noopener noreferrer">devRoot</a>, and <a href='https://github.com/milanfulop/milanfulop.com' target="_blank" rel="noopener noreferrer">milanfulop.com</a>.</p>

*/