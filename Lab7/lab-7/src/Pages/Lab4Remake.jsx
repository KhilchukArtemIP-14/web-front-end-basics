import React from 'react'
import Header from '../Components/Header'
import Content from '../Components/Content'
import Image from '../Components/Image'
import { Link } from 'react-router-dom'
const Lab4Remake = () => {
  return (
    <div>
      <Link  to="/goods-gallery">Go to goods gallery</Link >
      <Header>Хільчук Артем</Header>
      <Content/>
      <Image/>
    </div>
  )
}

export default Lab4Remake