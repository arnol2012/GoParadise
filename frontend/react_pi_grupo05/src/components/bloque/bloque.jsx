import React from 'react'
import styles from './bloque.module.css'

import Search from './Search';



function bloque() {

  return (
    <div >
      <header className={styles.heading}>
      <h1>
        <p className={styles.bloque}>Busca ofertas en hoteles, casas y mucho más</p>
      </h1>
        <Search />
      </header>
    </div>
  )
}

export default bloque