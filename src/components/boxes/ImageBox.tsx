import Image from 'next/image';
import styles from './ImageBox.module.css';

interface ImageBoxProps {
  imageUrl: string;
  description: string;
  alt: string;
  width?: number;
  height?: number;
  loadingType?: "lazy" | "eager" | undefined;
}

export default function ImageBox({ imageUrl, alt, description, width = 350, height = 350, loadingType = "lazy" }: ImageBoxProps) {
  return (
    <div className={styles.parentContainer}>
      <div 
        className={styles.container} 
        style={{ width: width, maxHeight: height }}
      >
        <Image
            quality={50} 
            loading={loadingType} 
            width={width} 
            height={height} 
            src={imageUrl} 
            alt={alt}
            className={styles.image}
        />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
