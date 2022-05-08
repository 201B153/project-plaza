import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from ".";
import { useStateContext } from "../context/StateContext";

const style = {
  //wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-[#080808] font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#050505] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#0a0a0a] hover:text-white cursor-pointer`,
  headerIcon: `text-[#030303] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={Logo} alt="" height={59} width={59} />
          <div className={style.logoText}>ProjectPlaza</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input className={style.searchInput} placeholder="Search Projects" />
      </div>
      <div className={style.headerItems}>
        <Link href="/">
          <div className={style.headerItem}> Login </div>
        </Link>
        {/* <Link href="/">
          <div className={style.headerItem}> Register </div>
        </Link> */}
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <span className="cart-item-qty">{totalQuantities}</span>
          <AiOutlineShopping />
        </button>

        {showCart && <Cart />}
        <div className={style.headerIcon}>
          <Link href="/">
            <CgProfile />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
