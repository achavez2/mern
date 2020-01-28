import React from 'react'
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import styles from './BasePaginas.module.css'
import { Container, Row } from 'reactstrap';

const Inventario = ({location}) => {
    const {state} = location
    const {user} = state

    if(!state) return <Redirect to={'/'}/>
    return (
        <><NavBar user={user}/>
        <div className={styles.Base}>
            <Container>
                <Row>
                    Inventario
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Inventario