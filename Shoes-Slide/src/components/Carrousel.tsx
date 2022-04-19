import React, { useEffect, useState } from 'react'
import Logo from '../static/images/super-shoes.png'
import Icon from '../static/images/216151_right_chevron_icon.png'
import '../Carrousel.css'
import { Item } from 'framer-motion/types/components/Reorder/Item'

function Carrousel() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/src/static/shoes.json')
      .then((response) => response.json())
      .then(setData)
  }, [])

  if (!data || !data.length) return null

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="carrousel">

        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className='name'>
                  {name}
                </span>
                <span className='old-price'>
                  U$ {oldPrice}
                </span>
                <span className='price'>
                  U$ {price}
                </span>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}

export default Carrousel