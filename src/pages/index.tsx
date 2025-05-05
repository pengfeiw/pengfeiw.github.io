import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wang Pengfei</title>
                <meta name="description" content="王鹏飞" />
                {/* 必应网站验证 */}
                <meta name="msvalidate.01" content="4E152C9DC9228501ACC954634BDC95E1" />
                {/* 百度网站验证 */}
                <meta name="baidu-site-verification" content="code-jPEWo73erw" />
                {/* 谷歌网站验证 */}
                <meta name="google-site-verification" content="NgazI_8tIKRr-rDSLkDKSmlARRuRoRtd9GFU7Ovq7o0" />
                <link rel="icon" href="/avatar.svg" />
                <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"></link>
            </Head>
            <main className={styles.main}>
                <div className={styles.maininfo}>
                    <div>
                        <span>Hey</span>
                        <span className={styles.hi}>👋</span>
                        <span> I'm</span>
                        &nbsp;
                        <h1 className={styles.title}>Wang Pengfei</h1>,
                    </div>
                    <div>
                        a
                        &nbsp;
                        <span className={styles.profession}>developer</span>.
                    </div>
                </div>
                <div className={styles.tag}>
                    Interests.Learn.Practice.Success
                </div>
                <div className={styles.links}>
                    <a className={styles.link} href="https://pengfeixc.com/blogs" target="_blank">
                        Blog
                    </a>
                    <a className={styles.link} href="https://pengfeiw.github.io/minicode" target="_blank">
                        Projects
                    </a>
                    <a className={styles.link} href="https://github.com/pengfeiw" target="_blank">
                        Github
                    </a>
                </div>
            </main>
        </div>
    )
}

export default Home
