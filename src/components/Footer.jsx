import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/Logo-footer.svg"

const Footer = () => {
  return (
    <footer className="bg-grayPrimary">
      <main className="flex flex-row justify-between py-10 px-24">
        <ul className="flex items-center">
          <li><Link to="/"><img src={Logo} alt="StudentHouse Logo" /></Link></li>
        </ul>
        <ul>
          <li className="font-bold my-3">Asosiy</li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/about">
              {" "}
              Biz haqimizda
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/houses">
              {" "}
              Uylar
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/universities">
              {" "}
              Hamkor universitetlar
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/">
              {" "}
              Bog’lanish
            </Link>
          </li>
        </ul>
        <ul>
          <li className="font-bold my-3">Foydalanuchilar uchun shartlar</li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/for-owners">
              Ijaraga beruvchi uchun
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/for-students">
              Talabalar uchun
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/for-staff">
              {" "}
              Universitet ma’sul xodimlari uchun
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/">
              Umumiy shartlar va qoidalar
            </Link>
          </li>
        </ul>
        <ul>
          <li className="font-bold my-3">Biz bilan bog’lanish</li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/">
              Xabar yuborish
            </Link>
          </li>
          <li className="my-2">
            <Link className="text-gray-600 hover:text-gray-900 transition" to="/">
              Qo’ng’iroq qilish
            </Link>
          </li>
          <li className="my-2 flex flex-row">
            <a className="mr-2" href="/">
              <FaTelegramPlane className="text-primary transition hover:text-secondary w-6 h-6" />
            </a>
            <a className="mx-2" href="/">
              <IoLogoInstagram className="text-primary transition hover:text-secondary w-6 h-6" />
            </a>
            <a className="mx-2" href="/">
              <RiFacebookCircleFill className="text-primary transition hover:text-secondary w-6 h-6" />
            </a>
          </li>
        </ul>
      </main>
      <p className="py-4 text-center">Xizmatlar litsenziyalangan. StudentHouse 2021.</p>
    </footer>
  );
};

export default Footer;
