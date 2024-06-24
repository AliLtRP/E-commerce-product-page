import { product1, product2, product3, product4 } from "../assets/index";
import { thumb1, thumb2, thumb3, thumb4 } from "../assets/index";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../provider/zustund";
import closeIcon from "../assets/icon-close.svg";
import nextImage from "../assets/icon-next copy.svg";
import perv from "../assets/icon-previous.svg";

const Product = () => {
  const [productNumber, setProductNumbers] = useState<number>(0);
  const { setitemsNumber } = useCart();
  const [selectImage, setSelectImage] = useState<number>(0);
  const [productImage, setProductImage] = useState<string>(product1);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleProductNumber = (number: number) => {
    if (number >= 0) {
      setProductNumbers(number);
    }
  };

  const addToCart = () => {
    setitemsNumber(productNumber);
  };

  const handleCount = (number: number) => {
    if (number >= 0 && number <= 3) {
      setCount(number);
    }
  };

  useEffect(() => {
    if (count === 0) {
      setProductImage(product1);
      setSelectImage(0);
    } else if (count === 1) {
      setProductImage(product2);
      setSelectImage(1);
    } else if (count === 2) {
      setProductImage(product3);
      setSelectImage(2);
    } else {
      setProductImage(product4);
      setSelectImage(3);
    }
  }, [count]);

  return (
    <div className="sm:w-[90%] w-full mt-16 sm:mx-auto sm:flex-row flex flex-col">
      <div className="sm:basis-[40%] w-full">
        <img
          src={productImage}
          alt="product"
          className="sm:min-w-[383px] sm:max-w-[383px] rounded-2xl transform hover:cursor-pointer"
          onClick={() => setShowImage(true)}
        />

        <div
          className={`w-full h-full absolute z-20 top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] fiadIn`}
          style={{
            display: showImage ? "block" : "none",
          }}
        >
          <div className=" absolute z-30 top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
            <div className=" absolute z-40 top-[47%] left-2/4 translate-x-[-50%] translate-y-[-50%]">
              <div className="w-[500px] flex justify-between">
                <div
                  className={`bg-white rounded-full h-12 w-12 flex justify-center items-center hover:cursor-pointer ${
                    count !== 0 ? "active:bg-gray-400" : ""
                  }`}
                  onClick={() => handleCount(count - 1)}
                >
                  <img src={perv} alt="" className="w-4 h-4 " />
                </div>
                <div
                  className={`bg-white rounded-full h-12 w-12 flex justify-center items-center hover:cursor-pointer ${
                    count !== 3 ? "active:bg-gray-400" : ""
                  }`}
                  onClick={() => handleCount(count + 1)}
                >
                  <img src={nextImage} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mb-4 mt-12">
              <img
                src={closeIcon}
                alt="close"
                className=" "
                onClick={() => setShowImage(false)}
              />
            </div>
            <img
              src={productImage}
              alt="product image"
              className="w-[450px] h-[450px] rounded-lg"
            />

            <div className="w-[383px] mx-auto flex h-20 gap-5 mt-8">
              <div className="relative">
                <img
                  src={thumb1}
                  alt="thumbnail product"
                  className={`w-full h-20 rounded-2xl`}
                  onClick={() => {
                    setSelectImage(0);
                    setProductImage(product1);
                  }}
                />
                {selectImage === 0 ? (
                  <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="relative">
                <img
                  src={thumb2}
                  alt=""
                  className={`w-full h-20 rounded-2xl ${
                    selectImage == 1
                      ? "border-2 border-[#ff7d1a] opacity-35"
                      : ""
                  } `}
                  onClick={() => {
                    setSelectImage(1);
                    setProductImage(product2);
                  }}
                />

                {selectImage === 1 ? (
                  <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="relative">
                <img
                  src={thumb3}
                  alt=""
                  className="rounded-2xl w-full h-20"
                  onClick={() => {
                    setSelectImage(2);
                    setProductImage(product3);
                  }}
                />

                {selectImage === 2 ? (
                  <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="relative">
                <img
                  src={thumb4}
                  alt=""
                  className="w-full h-20 rounded-2xl"
                  onClick={() => {
                    setSelectImage(3);
                    setProductImage(product4);
                  }}
                />

                {selectImage === 3 ? (
                  <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>

          <div className=" absolute inset-0 w-full h-full bg-black opacity-75"></div>
        </div>

        <div className="w-[383px] hidden h-20 gap-5 mt-8 sm:flex">
          <div className="relative">
            <img
              src={thumb1}
              alt="thumbnail product"
              className={`w-full h-20 rounded-2xl transition-all`}
              onClick={() => {
                setSelectImage(0);
                setProductImage(product1);
              }}
            />
            {selectImage === 0 ? (
              <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="relative">
            <img
              src={thumb2}
              alt=""
              className={`w-full h-20 rounded-2xl transition-all ${
                selectImage == 1 ? "border-2 border-[#ff7d1a] opacity-35" : ""
              } `}
              onClick={() => {
                setSelectImage(1);
                setProductImage(product2);
              }}
            />

            {selectImage === 1 ? (
              <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="relative">
            <img
              src={thumb3}
              alt=""
              className="rounded-2xl w-full h-20 transition-all"
              onClick={() => {
                setSelectImage(2);
                setProductImage(product3);
              }}
            />

            {selectImage === 2 ? (
              <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="relative">
            <img
              src={thumb4}
              alt=""
              className="w-full h-20 rounded-2xl transition-all"
              onClick={() => {
                setSelectImage(3);
                setProductImage(product4);
              }}
            />

            {selectImage === 3 ? (
              <div className="rounded-2xl border-2 border-[#ff7d1a] absolute opacity-60 top-0 bg-white w-full h-20"></div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="basis-[60%] flex flex-col gap-7 sm:gap-10 sm:justify-center justify-start text-start sm:pl-24">
        <div>
          <p className="text-[#68707d] text-sm font-bold pt-6 sm:pt-0">
            SNEAKER COMPANY
          </p>
          <p className="sm:pt-4 pt-3 sm:text-[42px] text-3xl leading-tight font-bold">
            Fall Limited Edition Sneakers
          </p>
        </div>
        <p className="text-[#68707d] font-bold text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel
          autem reprehenderit aut. Rerum provident minima neque, tempora officia
          nisi!
        </p>
        <div className="flex justify-between sm:block">
          <p className="font-bold text-3xl flex items-center gap-4">
            $125.00
            <span className="h-full bg-black text-white font-bold text-sm px-2 py-1 rounded-md">
              50%
            </span>
          </p>
          <p className=" line-through text-[#68707d] font-bold pt-2">$250.00</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full flex justify-around basis-[50%] rounded-xl py-4 bg-[#f7f8fd]">
            <img
              src={minus}
              alt="minus"
              className=" active:bg-gray-300 active:rounded-full p-2"
              onClick={() => handleProductNumber(productNumber - 1)}
            />
            <p className="font-bold">{productNumber}</p>
            <img
              src={plus}
              alt="plus"
              className=" active:bg-gray-300 active:rounded-full p-2"
              onClick={() => handleProductNumber(productNumber + 1)}
            />
          </div>
          <button
            className="bg-[#ff7d1a] text-black font-bold w-full h-16 rounded-lg flex gap-4 justify-center items-center"
            onClick={() => addToCart()}
          >
            <IoCartOutline size={25} color="black" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
