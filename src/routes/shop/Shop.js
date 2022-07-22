import React from 'react' 
 import {Routes,Route} from 'react-router-dom'
import Categoriespreview from '../categories-preview/Categoriespreview'
import Categorylist from '../categorylist/Categorylist.js'
import '../shop/shopstyle.scss'



export default function Shop() { 
  return (

    <Routes>
      <Route index element={<Categoriespreview/>} />
        <Route path=":category" element={<Categorylist/>} />
       </Routes>
  )
}
