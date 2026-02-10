import styles from './c.module.css'
import {useNavigate} from 'react-router'
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className={styles.navbar}>
      <p onClick={() => (navigate('/'))} className={styles.logo}></p>
      <div></div>
    </nav>
  )
}