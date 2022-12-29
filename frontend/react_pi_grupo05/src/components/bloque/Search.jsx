import React from 'react'
import Select from 'react-select'
import styles from './Search.module.css'
import Date from './Date';
import ciudades from './ciudades.json'


function Search() {


    const handleSelectChange = (event) => {
        console.log(event);
      } 

  return (

    <form className={styles.form}>
        <div className={styles.input}>
            <div className={styles.select}><Select
                
                
                defaultValue={ { label: ' ¿A dónde vamos?', value: 'Default'}}
                options = {ciudades.map(sup => ({ label: sup.name, value: sup.id}))}
                onChange = { handleSelectChange }
            >
            
            </Select>
            </div>
            
            <div className={styles.date}><Date /></div>
            
            
            <button className={styles.button} type='submit'>Buscar</button>
            
            </div>
            </form>
    

)
}

export default Search












    
//         <form className={styles.form}>
//       <div className={styles.input}>
        
//       <div className={styles.icon}><BiMap /></div>
//         <div className={styles.select}><Select
            
//             className={styles.search}
//             defaultValue={ { label: ' ¿A dónde vamos?', value: 'Default'}}
//             options = {DBSuppliers.map(sup => ({ label: sup.name, value: sup.id}))}
//             onChange = { handleSelectChange }
//         >
//         </Select>
//         </div>
//         </div>
// </form>
    







