"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AdComponent from "../ads/adcomponent";
const Footer = () => {
  const path = usePathname();

  return (
    <>
      <div className="mt-2">
        <div className="font-serif mt-1 block text-left text-[#808080] ml-[17%] text-[55%] md:text-[80%]">
          It does consider the RCRV Results
        </div>
        <div className="font-serif mt-1 block text-left text-[#808080] ml-[17%] mb-4 text-[55%] md:text-[80%]">
          It only works above R18 Regulation
        </div>
        <center>
          <hr className="w-[64%] mt-4 mb-1 " />
        </center>
        <center>
          <hr className="w-[64%]  text-[#808080]" />
        </center>

        <span className="mt-4  text-center mx-[18%] mb-4 text-[75%] sm:text-[100%] hidden">
          Made with ❤ by &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ThilakReddyy/"
            className=" underline	underline-offset-1"
          >
            Thilak Reddy
          </a>
          <br />
          <p
          // className={` ${path == "/academicresult" ? "block" : "hidden"}`}
          >
            In collaboration with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hemanth-kotagiri/"
              className=" underline	underline-offset-1"
            >
              Hemanth kotagiri
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Syed-Ansar/"
              className=" underline	underline-offset-1"
            >
              Syed Ansar
            </a>
          </p>
        </span>
        <span className="mt-4 block text-center mx-[18%] mb-4 text-[75%] sm:text-[100%]">
          Join us on{" "}
          <Link
            href="https://t.me/s/jntuhvercel"
            className="underline underline-offset-1"
          >
            Telegram
          </Link>
          {/* Support this app by clicking{" "} */}
          {/* <Link */}
          {/*   className=" underline	underline-offset-1" */}
          {/*   href="upi://pay?pn=Thilak%20Reddy&pa=9381339131@ibl" */}
          {/* > */}
          {/*   here */}
          {/* </Link> */}, thanks!
        </span>
      </div>
      <AdComponent />
    </>
  );
};

export default Footer;
