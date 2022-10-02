import '../Styles/Navbar.css'
import React, {useState} from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
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
            </div >
            <div className='navToggle'>
            <BiMenuAltRight onClick={() => setshowLinks(!showLinks)}>Menu</BiMenuAltRight>
            </div>
            </div>
        </nav>
    )
}
export default Navbar