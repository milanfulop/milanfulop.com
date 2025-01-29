import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './page.module.css';
import ImageBox from '@/components/boxes/ImageBox';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="center">
        <h3 className="title">Milan Fulop</h3>
        <h1 className="description">web developer student</h1>
      </div>
      <ImageBox 
        imageUrl="/childhood-photo.webp"
        alt="My younger self" 
        loadingType="eager"
        marginTop='25px'
        marginBottom='25px'
      />
      <div className={styles.svgContainer}>
        <a 
          href="https://github.com/milanfulop" 
          className={styles.svgLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub size={36} color="#C5C5C5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/milan-fulop/" 
          className={styles.svgLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin size={36} color="#C5C5C5" />
        </a>
        <a 
          href="mailto:fulopmilan170@gmail.com" 
          className={styles.svgLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MdEmail size={36} color="#C5C5C5" />
        </a>
      </div>
    </div>
  );
}
