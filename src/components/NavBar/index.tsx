'use client';

import styles from '@/styles';
import { navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';

export interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div className="absolute w-[50%] " />
      <div className={`${styles.innerWidth} flex gap-8 justify-center`}>
        <NavBarItem path="/" text="Work" />
        <NavBarItem path="/about" text="About" />
        <NavBarItem text="Contact" />
      </div>
    </motion.nav>
  );
};

export interface INavBarItem {
  path?: string;
  text: string;
}

const NavBarItem: React.FC<INavBarItem> = ({ path, text }) => {
  return (
    <div>
      <a href={path ? path : ''}>{text}</a>
    </div>
  );
};
