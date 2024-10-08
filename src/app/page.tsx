import Image from 'next/image'
import styles from './page.module.css'
import { Menu } from '../components/menu/Menu'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Menu />
    </main>
  )
}
