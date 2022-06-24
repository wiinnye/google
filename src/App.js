import React, { useState } from 'react'
import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { SaveUser } from './components/SaveUser';
import { TableUsers } from './components/TableUsers';


function App() {
  
  const [list, setList] = useState([])

  function handleSaveUser(user) {
    let newList = [...list] //1: peganos os dados ja passado porem teremos que salvar outro dados novos nestas lista então  pegamos atraves do paramentro (user) 
    newList.push(user) //2: Pegamos nossa lista(newlist) e puxamos/add as novas informações que receberemos
    setList(newList)  //3: aqui atualizamos os novos dados pelo setList(usestate)
  }

  return (
    <>
      <div className='container'>
        <Header /> 
        <SaveUser onAddUser={handleSaveUser}  />
        <TableUsers list={list}  />
        <Footer />
      </div>     
    </>
  );
}

export default App;


// <SaveUser onAddUser={handleSaveUser}/> : // aqui é onde sera a fonte para passar as informações para os outros componentes
// <TableUsers list={list}/> : // a gnt cria um 'list' ele que irá repassar a propria informações atualizada pela tabela 