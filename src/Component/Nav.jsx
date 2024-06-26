import { React, useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

const Nav = () => {
  const [open, setopen] = useState(false);
  const HandleOpen = () => {
    setopen(!open);
  };
  const HandleClick = () => {
    setopen(false);
  };

  return (
    <>
      <div className="fixed z-[999] w-full top-0 bg-[#ffffff25] backdrop-blur-md">
        <div className="container py-4 flex justify-between items-center px-4 xl:px-0">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={10}
            duration={1500}
            className="cursor-pointer"
          >
            <svg
              width="72"
              height="30"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
                fill="currentColor"
              ></path>
              <path
                d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
                fill="currentColor"
              ></path>
              <path
                d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                fill="currentColor"
              ></path>
              <path
                d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <div className="hidden md:block">
            <div className="links">
              <ul className="flex items-center gap-x-6">
                <li>
                  <Link
                    to="start"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1500}
                    relative="card"
                    data-link-alt="Services"
                    className="font-[Neue Montreal] font-normal text-base cursor-pointer"
                  >
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1500}
                    data-link-alt="Our work"
                    className="font-[Neue Montreal] font-normal text-base cursor-pointer"
                  >
                    <span>Our work</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1500}
                    data-link-alt="About us"
                    className="font-[Neue Montreal] font-normal text-base cursor-pointer"
                  >
                    <span>About us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="play"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1500}
                    data-link-alt="Insights"
                    className="font-[Neue Montreal] font-normal text-base cursor-pointer"
                  >
                    <span>Insights</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1500}
                    data-link-alt="Contact us"
                    className="ml-48 font-[Neue Montreal] font-normal text-base cursor-pointer"
                  >
                    <span>Contact us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`bg-[#212121] absolute w-full h-screen z-[999] md:hidden top-0 left-0 overflow-scroll pt-4 ${
              open
                ? "top-0 transition-all duration-[1s]"
                : "top-[-100vh] transition-all duration-[1s]"
            }`}
          >
            <div className="pb-20  pl-4 ">
              <a href="#">
                <svg
                  width="72"
                  height="30"
                  viewBox="0 0 72 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="border-t-2 border-[#363636]">
              <ul
                className={`pt-3 pl-4 ${
                  open
                    ? "opacity-[1] transition-all duration-[4.s]"
                    : "opacity-0 transition-all duration-[5s]"
                }`}
              >
                <li>
                  <a
                    href="#start"
                    className="relative font-FamiljenGrotesk font-bold  text-4xl sm:text-6xl text-white tracking-tighter"
                    onClick={HandleClick}
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="relative font-FamiljenGrotesk font-bold text-4xl sm:text-6xl text-white tracking-tighter"
                    onClick={HandleClick}
                  >
                    OUR WORK
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="relative font-FamiljenGrotesk font-bold text-4xl sm:text-6xl text-white tracking-tighter"
                    onClick={HandleClick}
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#play"
                    className="relative font-FamiljenGrotesk font-bold text-4xl sm:text-6xl text-white tracking-tighter"
                    onClick={HandleClick}
                  >
                    INSIGHTS
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="relative font-FamiljenGrotesk font-bold text-4xl sm:text-6xl text-white tracking-tighter"
                    onClick={HandleClick}
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 pt-20 pb-10">
              <ul className="flex flex-col justify-end">
                <p className=" text-white font-['Neue_Montreal'] text-base font-normal">
                  S:
                </p>
                <li>
                  {" "}
                  <a
                    href="#"
                    className=" text-white font-['Neue_Montreal'] text-base font-normal"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white font-['Neue_Montreal'] text-base font-normal"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white font-['Neue_Montreal'] text-base font-normal"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white font-['Neue_Montreal'] text-base font-normal"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
              <div>
                <ul className="pt-5">
                  <li className=" text-white font-['Neue_Montreal'] text-base font-normal">
                    L:
                  </li>
                  <ul className="flex flex-col pb-5">
                    <li>
                      <a
                        href="#"
                        className=" text-white font-['Neue_Montreal'] text-base font-normal"
                      >
                        202-1965 W 4th Ave
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-white font-['Neue_Montreal'] text-base font-normal"
                      >
                        Vancouver, Canada
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-white font-['Neue_Montreal'] text-base font-normal"
                      >
                        30 Chukarina St
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-white font-['Neue_Montreal'] text-base font-normal"
                      >
                        Lviv, Ukraine
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <ul>
                <li className=" text-white font-['Neue_Montreal'] text-base font-normal">
                  E:
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white font-['Neue_Montreal'] text-base font-normal"
                  >
                    hello@ochi.design
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="md:hidden cursor-pointer text-2xl"
            onClick={HandleOpen}
          >
            {open ? (
              <RxCross1 className="z-[999] absolute text-white right-4 rotate-180 transition-all" />
            ) : (
              <RiMenu5Line className="transition-all duration-[1s]" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
