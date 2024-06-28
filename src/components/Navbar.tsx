import logo from "../assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import avatar from "../assets/image-avatar.png";
import { useCart } from "../provider/zustund";
import { thumb1 } from "../assets";
import deleteIcon from "../assets/icon-delete.svg";
import { useState } from "react";
import menu from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";

const Navbar = () => {
  const { itemsNumber, setitemsNumber } = useCart();
  const [showCart, setShowCart] = useState<boolean>(false);
  const [catSelect, setCatSelect] = useState<number | null>(null);
  const [openMenu, setMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between gap-14">
        <div className="flex items-center gap-4">
          <img
            src={menu}
            alt="menu"
            className="pt-1 sm:hidden"
            onClick={() => setMenu(true)}
          />
          <img src={logo} alt="logo" />
        </div>

        <div>
          {openMenu ? (
            <div className=" absolute h-[100vh] w-[200vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-black opacity-50 "></div>
          ) : (
            <div></div>
          )}
          <div
            className={`absolute z-40 h-full ${
              openMenu ? "left-0" : "left-[-600px]"
            } top-0 transition-all duration-300`}
          >
            <div className=" absolute z-50 w-64 bg-white h-full flex flex-col justify-start items-start p-4 pl-8">
              <img
                src={closeIcon}
                alt=""
                onClick={() => setMenu(false)}
                className="w-4"
              />

              <ul className="w-full h-full font-bold flex flex-col gap-5 text-start pt-10">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="w-full hidden sm:flex items-center gap-6 text-sm font-normal text-[#828792]">
          <li className="hover:cursor-pointer" onClick={() => setCatSelect(0)}>
            <div className="relative h-full">
              <p>Collections</p>
              {catSelect === 0 ? (
                <div className=" absolute w-full h-1 bg-[#ff7d1a] top-[58px]"></div>
              ) : (
                <div></div>
              )}
            </div>
          </li>
          <li className="hover:cursor-pointer" onClick={() => setCatSelect(1)}>
            <div className="relative h-full">
              <p>Men</p>
              {catSelect === 1 ? (
                <div className=" absolute w-full h-1 bg-[#ff7d1a] top-[58px]"></div>
              ) : (
                <div></div>
              )}
            </div>
          </li>
          <li className="hover:cursor-pointer" onClick={() => setCatSelect(2)}>
            <div className="relative h-full">
              <p>Women</p>
              {catSelect === 2 ? (
                <div className=" absolute w-full h-1 bg-[#ff7d1a] top-[58px]"></div>
              ) : (
                <div></div>
              )}
            </div>
          </li>
          <li className="hover:cursor-pointer" onClick={() => setCatSelect(3)}>
            <div className="relative h-full">
              <p>About</p>
              {catSelect === 3 ? (
                <div className=" absolute w-full h-1 bg-[#ff7d1a] top-[58px]"></div>
              ) : (
                <div></div>
              )}
            </div>
          </li>
          <li className="hover:cursor-pointer" onClick={() => setCatSelect(4)}>
            <div className="relative h-full">
              <p>Contact</p>
              {catSelect === 4 ? (
                <div className=" absolute w-full h-1 bg-[#ff7d1a] top-[58px]"></div>
              ) : (
                <div></div>
              )}
            </div>
          </li>
        </ul>

        {/* cart */}
        <div className="flex justify-start items-center gap-6">
          <div className="w-full relative">
            {itemsNumber != 0 ? (
              <div className=" absolute bg-[#ff7d1a] rounded-full top-[-2px] right-[-2px] text-[8px] font-bold text-white px-1.5 text-center">
                {itemsNumber}
              </div>
            ) : (
              ""
            )}
            <IoCartOutline
              size={25}
              color="black"
              onClick={() => setShowCart(!showCart)}
            />
            <div
              className={`${showCart ? "block" : "hidden"} absolute z-10 
               right-[-90px] sm:right-[-130px]
               trans top-12 shadow-2xl w-[370px] ${
                 itemsNumber === 0 ? "h-56" : "h-auto"
               } bg-white rounded-2xl`}
            >
              <p className="font-bold text-sm text-start p-4">Cart</p>
              <hr />

              <div className="relative w-full h-3/4">
                {itemsNumber === 0 ? (
                  <p className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-[#828792] text-sm">
                    Your cart is empty.
                  </p>
                ) : (
                  <>
                    <div className="w-full h-20 flex items-center pl-4 gap-4 relative">
                      <img
                        src={thumb1}
                        alt="item image"
                        className="w-12 h-12 rounded-md"
                      />
                      <div className="w-full h-auto flex flex-col items-start">
                        <p className="w-full font-bold text-xs basis-[50%] text-[#828792] text-start mb-1">
                          Fall Limited Edition Sneakers
                        </p>
                        <p className="w-full font-medium text-sm basis-[50%] text-[#828792] text-start">
                          $125.00 x {itemsNumber}{" "}
                          <span className="font-bold text-sm text-black">
                            ${itemsNumber * 125}.00
                          </span>
                        </p>
                      </div>
                      <img
                        src={deleteIcon}
                        alt="delete item from cart"
                        className=" absolute right-[16px] h-4"
                        onClick={() => setitemsNumber(0)}
                      />
                    </div>

                    <div className="w-full h-full flex justify-center">
                      <button className="w-[90%] text-sm py-3 mb-6 mt-1 text-black font-bold bg-[#ff7d1a] rounded-md">
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <img
            src={avatar}
            alt="user avatar"
            className="h-10 mr-10 rounded-3xl hover:border-2 hover:border-[#ff7d1a]"
          />
        </div>
      </div>
      <hr className="mt-8" />
    </>
  );
};

export default Navbar;
