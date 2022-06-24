import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-itens1'>
        <span>Brasil</span>
      </div>

      <div className='footer-itens2'>

        <div className='item'>
          <span>Sobre</span>
          <span>Publicidade</span>
          <span>Negócios</span>
          <span>Como funciona a Pesquisa</span>
        </div>


        <div className='item'>
          <span>Privacidade</span>
          <span>termos</span>
          <span>Configurações</span>
        </div>
      </div>
    </div>
  )

}