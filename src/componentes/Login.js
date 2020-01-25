import React from 'react';
import styles from './Login.module.css'
import LoginBox from './LoginBox'

class Login extends React.Component {
    render () {
        return (
            <div className={styles}>
                <LoginBox/>
            </div>
        )
    }
}

export default Login