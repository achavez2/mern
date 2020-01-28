import React from 'react'
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import styles from './BasePaginas.module.css'

const Notificaciones = ({location}) => {
    const {state} = location
    const {user} = state

    if(!state) return <Redirect to={'/'}/>
    return (
        <><NavBar user={user}/>
        <div className={styles.Base}>
        Notificaciones
        </div>
        </>
    )
}

export default Notificaciones