import type { NextPage } from 'next';
import {useRouter } from "next/router"
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'



const Navbar: NextPage = () => {
    const router = useRouter();
    console.log(router);
  return (
    <div className={styles.Nav}>
     
       <ul className={styles.navul}>
        <li className={styles.navli}>
            <Link className={router.asPath === "/" ? styles.active : 'red'} href="/">
                Home
            </Link>
           
        </li>
        <li className={styles.navli}>
           <Link className={router.asPath === "/jokes" ? styles.active : ''} href="/jokes">
                Jokes
            </Link>
        </li>
       
       </ul>

     
    </div>
  )
}

export default Navbar
