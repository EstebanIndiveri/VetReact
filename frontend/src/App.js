import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Route,Switch} from'react-router-dom';
import clienteAxios from './config/axios';

//componmentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  //state de la app:
  const [citas,guardarCitas]=useState([]);
  const [consultar,guardarConsultar]=useState(true);

  useEffect(()=>{
    if(consultar){
      const consultarAPI=()=>{
        clienteAxios.get('/pacientes')
          .then(respuesta=>{
            //mando al state el resultado
            guardarCitas(respuesta.data);
          
            //deshabilito consulta
            guardarConsultar(false);
          }).catch(error=>{
            console.log(error)
          })
      }
      consultarAPI();
    }
  },[consultar]);

  return (
    <Router>
      <Switch>
        <Route 
        exact path="/"
        component={()=><Pacientes citas={citas}/>}
        />
        <Route 
        exact path="/nueva"
        component={()=><NuevaCita  guardarConsultar={guardarConsultar} />}
        //NuevaCita={NuevaCita}
        />
        <Route 
        exact path="/cita/:id"
        render={(props)=>{
          const cita=citas.filter(cita=>cita._id===props.match.params.id)
          //console.log(cita);
          return(
            <Cita
            cita={cita[0]}
            guardarConsultar={guardarConsultar}
            />
          )
        }}
        />
      </Switch>
    </Router>
  );
}

export default App;
