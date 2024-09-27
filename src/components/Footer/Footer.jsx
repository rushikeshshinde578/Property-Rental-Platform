import React from 'react'
import {Link, useLocation} from "react-router-dom"

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  return (
    <>
        <footer className={isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"}>
            <div className="container">
                <h4>PROPERTY RENTAL</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sed quae vel illo iste, amet adipisci ad dolorem voluptatem ea doloribus labore accusamus explicabo maiores minus, excepturi est dolorum ullam?</p>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>    
                    </li>
                    <li>
                        <Link to={'/termsandconditions'}>Terms And Conditions</Link>    
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>    
                    </li>    
                </ul>    
            </div> 
            <div className="container">
                <h4>Connect with us</h4>
                <p>+91 000 000 0000</p>
                <p>rs@gmail.com</p>
                <p>All Rights Reservsed By RS</p>
            </div>
        </footer>
    </>
  )
}

export default Footer