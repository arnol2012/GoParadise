import Styles from './CategoriaGrid.module.css'



export function CategoriaCard({categoria}) {
    
    return <li className={Styles.card}>
        <div className={Styles.box}>
        <img width={347}
             height={181.32}
             className={Styles.image} 
             src={categoria.img} 
             alt={categoria.name}
              />
        <h2 className={Styles.title}>{categoria.name}</h2>
        <h2 className={Styles.p}>{categoria.cantidad} {categoria.name}</h2>
        </div>
        </li>
}