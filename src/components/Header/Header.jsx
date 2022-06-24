import './Header.css'
import foto from '../../img/finnCopy.png'
import { FaTh } from 'react-icons/fa'

export default function Header() {

  function MudarImagem() {
    return(
     alert('Mudar a foto de perfil') 
    )
  }
  
  return (
    <div className='caixa'>
        <div className='botao-itens'>
          <button ><a href='https://mail.google.com/' target='_blank'>Gmail</a> </button>
          <button > <a href='https://images.google.com/' target='_blank'>Imagens</a></button>
          <button className='iconBtn'><FaTh className='icon'  onClick={(e => console.log('icon'))} /></button>
          
        </div>

        <div className='imagem'>
          <img src={foto} alt='foto de usuario' onClick={(e => MudarImagem('Mudar foto'))} />
        </div>
    </div>
  )
}
