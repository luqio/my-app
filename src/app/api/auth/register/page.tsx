import styles from './page.module.css';

const Register = () => {
  return (
    <div>
      <form>
        <input type='text' name='username' className={styles.input}/>
        <input type='text' name='email' className={styles.input}/>
        <input type='text' name='password' className={styles.input}/>
      </form>
    </div>
  )
}

export default Register
