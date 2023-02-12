import styles from '@/styles';

export interface IHeroSection {}

export const HeroSection: React.FC<IHeroSection> = () => {
  return (
    <div className={`${styles.xPaddings} py-8 relative`}>
      <h1>Hero Section</h1>
    </div>
  );
};
