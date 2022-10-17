import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../../styles/secondPage.module.scss'

const SecondPage: NextPage = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <div>Back to <Link href="/"><a className={styles.link}>Home Page</a></Link></div>
      <div>Jump to <Link href="/firstPage"><a className={styles.link}>First Page</a></Link></div>
    </div>
  )
}

export default SecondPage
