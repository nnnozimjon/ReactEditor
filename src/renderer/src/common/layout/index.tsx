import React from 'react'
import styles from './style.module.scss'
import LayoutHeader from './components/header'
import Hierarchy from './components/Hierarchy'
import Inspector from './components/Inspector'
import Scene from './components/Scene'
import Console from './components/Console'

const Layout: React.FC<any> = () => {
  return (
    <div className={styles.container}>
      <LayoutHeader />
      <main className={styles.main}>
        <section className={styles.Scene}>
          <section className={styles.halfSection}>
            <Hierarchy />
            <Scene />
          </section>
          <Console />
        </section>
        <Inspector />
      </main>
    </div>
  )
}

export default Layout
