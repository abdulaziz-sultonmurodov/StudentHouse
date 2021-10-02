import React from 'react'
import {IoIosArrowDown} from "react-icons/io"
import { Link } from 'react-router-dom'
// import Logo from "../images/Logo.svg"

const Navbar = () => {
    return (
        <main>
            <section className="flex flex-row justify-evenly items-center py-4">
                <ul className="flex flex-row items-center">
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/">BOSH SAHIFA</Link></li>
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/about">BIZ HAQIMIZDA</Link></li>
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/houses">UYLAR</Link></li>
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/post">E’LON BERISH</Link></li>
                </ul>
                {/* <Link tp="/">
                <img src={Logo} alt="StudentHouse Logo" />
                </Link> */}
                <h1 className="text-2xl text-primary font-bold"><Link to="/">STUDENT HOUSE</Link></h1>
                <ul className="flex flex-row items-center">
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/help">YORDAM</Link></li>
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/login-owner">TIZIMGA KIRISH</Link></li>
                    <li className="mx-4 text-sm"><Link className="text-gray-600 hover:text-gray-900 transition" to="/signup-owner">RO’YXATDAN O’TISH</Link></li>
                    <li className="flex flex-row items-center mx-4 text-sm">UZ <IoIosArrowDown className="ml-2" /> </li>
                </ul>
            </section>
        </main>
    )
}

export default Navbar
