import React from 'react'
import styles from './PacienteCard.module.css'
import { Col } from 'reactstrap';

const PacienteCard = (paciente) => (
    <Col xs="12" sm="6" md="4">
        <div className={styles.card}>
            <div>
                PACIENTE: {paciente.name}
            </div>
        </div>
    </Col>
)

export default PacienteCard