import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardAdd from './Pages/CardAdd';


const Navbar = ({ onAddCard }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={'/cardview'} className="nav-item nav-link">View</Link>
            <button className="nav-item nav-link btn btn-link" onClick={openPopup}>Add-Card</button>
            {showPopup && <CardAdd onAddCard={onAddCard} onClose={closePopup} />}
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar;