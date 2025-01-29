import Image from 'next/image';
import styles from './ImageBox.module.css';

interface ImageBoxProps {
  imageUrl: string;
  description?: string;
  alt: string;
  width?: number;
  height?: number;
  loadingType?: "lazy" | "eager" | undefined;
  marginTop?: string
  marginBottom?: string;
}

export default function ImageBox({ imageUrl, alt, description, width = 250, height = 250, loadingType = "lazy", marginTop, marginBottom }: ImageBoxProps) {
  return (
    <div className={styles.parentContainer}>
      <div 
        className={styles.container} 
        style={{ 
          width: width, 
          maxHeight: height,
          marginTop: marginTop,
          marginBottom: marginBottom, 
        }}
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
      { description == "" ? <p className={styles.description}>{description}</p> : <></>}
    </div>
  );
}
