import Link from 'next/link'
import styles from './button.module.css';

interface IButtonProps {
  text: string; url: string;
}

const Button = ({ text, url }: IButtonProps) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button
