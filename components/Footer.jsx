import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import Logo from "../public/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";

const style = {
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#0a0a0a] hover:text-white cursor-pointer`,
  headerIcon: `text-[#030303] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className={style.headerItems}>
        <div className={style.logoContainer}>
          <Image src={Logo} alt="" height={59} width={59} />
          <div className={style.logoText}>ProjectPlaza</div>
        </div>
        <Link href="/">
          <div className={style.headerItem}> Contact </div>
        </Link>
        <Link href="/">
          <div className={style.headerItem}> About </div>
        </Link>
        <Link href="/">
          <div className={style.headerItem}> Contribute </div>
        </Link>
        <div className={style.headerIcon}></div>
      </div>
      <p className="icons">
        <Link href="/">
          <AiFillInstagram />
        </Link>
        <Link href="/">
          <AiOutlineTwitter />
        </Link>
        <Link href="/">
          <AiOutlineGithub />
        </Link>
      </p>
      <p>
        <Link href="/"> @ProjectPlaza 2022</Link>
        <br />
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
