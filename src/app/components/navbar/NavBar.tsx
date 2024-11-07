'use client';
import Link from "next/link"
import styles from './navBar.module.css'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>home</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(({ id, url, title }) => <Link key={id} href={url} className={styles.link}>{title}</Link>)}
        <button className={styles.logout} onClick={() => console.log('logged out')}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
