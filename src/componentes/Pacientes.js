import React from 'react'
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import styles from './BasePaginas.module.css'
import { Container, Row } from 'reactstrap'
import PacienteCard from './PacienteCard'

const pacientes = [
    {
        paciente: 'Leonardo Moya',
        edad: '25',
        habitaciom: '',
        estado: 'Zona de espera',
        area: 'Gastrointereologia',
        medico: 'Dr. Ramirez',
        id: 1
    },
    {
        paciente: 'Leonardo Moya',
        edad: '25',
        habitaciom: '',
        estado: 'Zona de espera',
        area: 'Gastrointereologia',
        medico: 'Dr. Ramirez',
        id: 2
    },
    {
        paciente: 'Leonardo Moya',
        edad: '25',
        habitaciom: '',
        estado: 'Zona de espera',
        area: 'Gastrointereologia',
        medico: 'Dr. Ramirez',
        id: 3
    },
    {
        paciente: 'Leonardo Moya',
        edad: '25',
        habitaciom: '',
        estado: 'Zona de espera',
        area: 'Gastrointereologia',
        medico: 'Dr. Ramirez',
        id: 4
    },
    {
        paciente: 'Leonardo Moya',
        edad: '25',
        habitaciom: '',
        estado: 'Zona de espera',
        area: 'Gastrointereologia',
        medico: 'Dr. Ramirez',
        id: 5
    }
]


const Pacientes = ({location}) => {
    const {state} = location
    const {user} = state

    if(!state) return <Redirect to={'/'}/>
    return (
        <><NavBar user={user}/>
        <div className={styles.Base}>
            <Container>
                <Row>
                    {pacientes.map(paciente => (
                        <PacienteCard 
                            paciente={paciente} 
                            key={paciente.id}
                        />
                    ))}
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Pacientes