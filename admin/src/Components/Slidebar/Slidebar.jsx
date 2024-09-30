import React from 'react'
import './Slidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const Slidebar = () => {
  return (
    <div className='slidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="slidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Them san pham</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="slidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Danh sach SP</p>
        </div>
      </Link>
    </div>
  )
}
export default Slidebar
