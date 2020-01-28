import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({user}) => {
    return (
        <div className={styles.MenuBar}>
            <NavLink to={{
                    pathname: '/pacientes',
                    state: {user}
                }}>Pacientes</NavLink>
            <br/>
            <NavLink to={{
                    pathname: '/notificaciones',
                    state: {user}
                }}>Notificaciones</NavLink>
            <br/>
            <NavLink to={{
                    pathname: '/historico',
                    state: {user}
                }}>Historico</NavLink>
            <br/>
            <NavLink to={{
                    pathname: '/inventario',
                    state: {user}
                }}>Inventario</NavLink>
            <br/>
            <NavLink 
                to={{
                    pathname: '/',
                    state: {}
                }}
            >Salir</NavLink>
            <br/>
            <br/>
            <div>Usuario: {user.name}</div>
        </div>
    )
}

export default NavBar