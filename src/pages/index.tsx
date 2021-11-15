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
                <p className={styles.starText}>
                    ************     ***** 
                    ************     *****   
                        ****         *****
                        ****         *****
                        ****         *****   
                        ****         *****   
                    ************     **************   
                    ************     **************   
                </p>
            </main>
        </div>
    )
}

export default Home
