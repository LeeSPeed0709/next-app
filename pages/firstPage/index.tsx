import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../../styles/firstPage.module.scss'

const FirstPage: NextPage = () => {
  return (
    <div>
      <h1>First Page</h1>
      <div>Back to <Link href="/"><a className={styles.link}>Home Page</a></Link></div>
      <div>Jump to <Link href="/secondPage"><a className={styles.link}>Second Page</a></Link></div>
    </div>
  )
}

export default FirstPage
