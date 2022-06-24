import './Header.css'
import foto from '../../img/finnCopy.png'
import { FaTh } from 'react-icons/fa'
import { Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export default function Header() {

  function MudarImagem() {
    return (
      alert('Mudar a foto de perfil')
    )
  }

  return (
    <div className='caixa'>
      <div className='botao-itens'>
        <Link
          mr='20px'
          href='https://mail.google.com/' target='_blank'>Gmail</Link>
        <Link
          mr='20px'
          href='https://images.google.com/' target='_blank'>Imagens</Link>
        <Button 
          ml='20px'
          _hover={{color: 'black'}}
        className='iconBtn'><FaTh className='icon' onClick={(e => console.log('icon'))} /></Button>
      </div>

      <div className='imagem'>
        <Image src={foto} alt='foto de usuario' onClick={(e => MudarImagem('Mudar foto'))} />
      </div>
    </div>
  )
}
