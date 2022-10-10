import './App.css'
import { Login } from './page/login/Login';
import { Flex } from '@chakra-ui/react';
import Home from './page/Dashboard/Home';
import { Route, Routes } from 'react-router-dom';
import  ForgotPassword  from './page/login/ForgotPassword'

export default function App() {

  return (
    <Flex className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </Flex>
  )


  // const [list, setList] = useState([])

  // function handleSaveUser(user) {
  //   let newList = [...list] //1: peganos os dados ja passado porem teremos que salvar outro dados novos nestas lista então  pegamos atraves do paramentro (user) 
  //   newList.push(user) //2: Pegamos nossa lista(newlist) e puxamos/add as novas informações que receberemos
  //   setList(newList)  //3: aqui atualizamos os novos dados pelo setList(usestate)
  // }

}


// <SaveUser onAddUser={handleSaveUser}/> : // aqui é onde sera a fonte para passar as informações para os outros componentes
// <TableUsers list={list}/> : // a gnt cria um 'list' ele que irá repassar a propria informações atualizada pela tabela 