import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wang Pengfei</title>
                <meta name="description" content="王鹏飞" />
                <link rel="icon" href="/avatar.svg" />
            </Head>

            <main className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.cardT}>
                        <img className={styles.logo} src="/avatar.svg" alt="Wang Pengfei" />
                        <div>
                            <h1>Wang Pengfei</h1>
                            <p className={styles.tag}>Interests.Learn.Practice.Success</p>
                        </div>
                    </div>
                    <div className={styles.cardD}>
                        <a href="https://github.com/pengfeiw" target="_blank">
                            <img className={styles.icon} src="/github.svg" alt="https://github.com/pengfeiw" />
                        </a>
                        <a href="mailto:pengfeixc@sina.com" target="_blank">
                            <img className={styles.icon} src="/email.svg" alt="mailto:pengfeixc@sina.com" />
                        </a>
                        <a href="https://pengfeixc.com" target="_blank">
                            <img className={styles.icon} src="/site.svg" alt="https://pengfeixc.com" />
                        </a>
                        <a href="https://mini.pengfeixc.com" target="_blank">
                            <img className={styles.icon} src="/m.svg" alt="https://mini.pengfeixc.com" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
