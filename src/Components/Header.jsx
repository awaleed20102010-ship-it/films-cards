import React from 'react'
import logo from  '../images/logo2.jpg'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';




function Header({search}){
  const onsearch =(word)=>{
    search(word)

  }
  return (
    <header className="py-3 bg-dark  text-white">
      <div className="container">
        <div className="row">
          <div className="col-2">
           <Link to='/'><img src={logo} className='w-100' alt="" /></Link>  
              
              
          </div>
          {/* col-2 */}
          <div className="col-10 mt-2">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <FaSearch size={30}  />
              </span>
              <input type="text" onChange={(e)=> onsearch(e.target.value)} className="form-control form-control-lg" placeholder="اكتب اسم الفيلم او المسلسل"
              />
            </div>
            {/* input-group */}
          </div>
          {/* col-10 */}
        </div>
        {/* row */}
      </div>
    </header>
  );
}

export default Header
