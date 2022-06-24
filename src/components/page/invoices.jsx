import React from 'react'
import { useParams } from 'react-router-dom';
import './invoices.css'

import MapPage from '../MapPage/MapPage'

import finn from "../../img/finn.png"
import Img400 from "../../img/400.png"

import { FaTh } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { BiMicrophone } from 'react-icons/bi'
import { TiKeyboard } from 'react-icons/ti'
import { BiSearch } from 'react-icons/bi'
import { BiShareAlt } from 'react-icons/bi'
import {FaRegNewspaper } from 'react-icons/fa'
import { BsImage} from 'react-icons/bs'
import {RiVideoLine } from 'react-icons/ri'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {FaEllipsisV } from 'react-icons/fa'
import {MdDoubleArrow } from 'react-icons/md'


import { Link } from 'react-router-dom'

export default function Invoices() {
  const { valor } = useParams()

  return (
    <div className='main'>
      <div className='header'>
        <div className='itemHeader'>
          <div>
            <Link to='/' className='link'> <h2>Google</h2>
            </Link>
          </div>
          <div className='valor'>
            <div>
              <p> {valor} </p>
            </div>
            <div className='itemValor'>
              <TiKeyboard className='grey' />
              <BiMicrophone className='multi' />
              <BiSearch className='blue' />
            </div>

          </div>
        </div>

        <div className='itemHeader2'>
          <FiSettings className='icon' onClick={(e => console.log('icon'))} />
          <FaTh className='icon' onClick={(e => console.log('icon'))} />
          <img src={finn} className='icon finn' alt='imagem'></img>
        </div>
      </div>

      <div className='menu'>
        <div className='itemMenu'>
          <span> <BiSearch className='search' />Todas</span>
          <span><FaRegNewspaper className='search'/>Noticias</span>
          <span><RiVideoLine className='search'/>Videos</span>
          <span><FaMapMarkerAlt className='search'/>Maps</span>
          <span><BsImage className='search'/>Imagens</span>
          <span><FaEllipsisV className='search'/>Mais</span>
          <span>Ferramentas</span>
        </div>
        <div className='itemMenu'>
          <span>Aproximadamente 58.000.000 resultados (0,41 segundos) </span>
        </div>

        <div className='Body'>
          <div className='itemBody'>
            <p>https://www.{valor}.com.br</p>
            <h1>{valor}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.<br />recusandae alias dolore provident!</p>

            <div>
              <h3>Lorem {valor}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

            <div>
              <h3>Lorem {valor}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

            <div>
              <h3>Lorem {valor}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <span>mais resultado de www.{valor}.com.br<MdDoubleArrow /></span>
            </div>

            <div className='mapPage'>
              <MapPage />
            </div>

            <div className='textGoogle'>

            </div>

          </div>

          <div className='itemBody2'>
            <div className='corpo'>
              <div className='corpoText'>
                <div className='textoStrong'>
                  <strong>{valor}</strong>
                </div>
                <BiShareAlt className='itemCorpo' />
                <div>
                  <p>Lorem</p>
                </div>
              </div>
              <div className='CorpoImg'>
                <img src={Img400} alt="imagem logo"></img>
              </div>
            </div>
            <div className='text'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sequi maiores et illum ut voluptate, eaque, corporis cum,
                accusantium quidem perferendis? Facilis quo cumque hic quas impedit fugit, molestias nobis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iure porro iste earum minus debitis dignissimos. Officia tempore commodi quis, quibusdam sint consectetur consequuntur neque dolores sapiente cupiditate! Minus, accusamus.
                <h5>Wikipédia</h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}