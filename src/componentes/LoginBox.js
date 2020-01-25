import React from 'react';
import styles from './LoginBox.module.css'

class LoginBox extends React.Component {
    render () {
        return (
            <div className={styles.Card}>
                <div className={styles.CardTitle}>
                    <h3>INICIO DE SESIÓN</h3>
                </div>
                <div className={styles.CardBody}>
                    <div>
                        <p>USUARIO</p>
                        <input type="Text"></input>
                    </div>
                    <br/><br/>
                    <div>
                        <p>CONTRASEÑA</p>
                        <input type="Password"></input>
                    </div>
                </div>
                <div className={styles.CardFooter}>
                    <button type="submit">ENTRAR</button>
                </div>
            </div>
        )
    }
}

export default LoginBox