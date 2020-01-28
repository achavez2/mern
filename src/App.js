import React from 'react'
import Login from './componentes/Login'
import Pacientes from './componentes/Pacientes'
import Historico from './componentes/Historico'
import Notificaciones from './componentes/Notificaciones'
import Inventario from './componentes/Inventario'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


const App = () => {
    return(        
        <BrowserRouter>
            
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/pacientes' component={Pacientes}/>
                <Route path='/historico' component={Historico}/>
                <Route path='/notificaciones' component={Notificaciones}/>
                <Route path='/inventario' component={Inventario}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App