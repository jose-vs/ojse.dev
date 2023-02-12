'use client';

import styles from '@/styles';
import { navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  const router = useRouter();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div className="absolute w-[50%] " />
      <div className={`${styles.innerWidth} flex gap-8 justify-center`}>
        <NavBarItem
          onClick={() => {
            router.push('/');
          }}
          text="Work"
        />
        <NavBarItem
          onClick={() => {
            router.push('/about');
          }}
          text="About"
        />
        <NavBarItem text="Contact" />
      </div>
    </motion.nav>
  );
};

export interface INavBarItem {
  onClick?: () => void;
  text: string;
}

const NavBarItem: React.FC<INavBarItem> = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
