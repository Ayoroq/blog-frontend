import styles from './p.module.css'
import {useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return (
    <main className={styles.Home}>
      <h1 className={styles.mainText}>Welcome to my blog. I'm Ayo and this is where I document my latest explorations, ideas and anything i find interesting.</h1>
    </main>
  );
}