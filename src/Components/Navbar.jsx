import '../Styles/Navbar.css'
import React, {useState} from 'react'
const Navbar = () =>{
    const [showLinks, setshowLinks] = useState(false);

    return(
        <nav className='Navbar'>
            <div className='leftSide'>
                <img alt='logo'/>
            </div>
            <div className='rightSide'>
            <div className='links' id={showLinks ? "hidden" : ""}>
            <a>Home </a>
            <a>Contact</a>
            </div>
            <button onClick={() => setshowLinks(!showLinks)}>Menu</button>
            </div>
        </nav>
    )
}
export default Navbar