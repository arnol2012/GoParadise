import React from 'react'
import { CategoriaCard } from './CategoriaCard'
import categorias from './categorias.json'
import Styles from './CategoriaGrid.module.css'



export function CategoriaGrid() {
    return (
        <div className={Styles.grid}>
        <h2>Buscar por tipo de alojamiento</h2>
        <ul className={Styles.list}>
        
            {categorias.map((categoria) => (
                <CategoriaCard key={categoria.id} categoria={categoria}/>
            ))}
        </ul>
        
        </div>
    )
}

