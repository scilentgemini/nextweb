"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Menu = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className={`header-menu bg-white ${fixedHeader ? "fixed" : ""}`}>
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href="/">
            <Image
              src={"/images/Logo.png"}
              width={2000}
              height={1000}
              alt="logo"
              priority={true}
              className="w-[149px] max-sm:w-[132px]"
            />
          </Link>
          <div className="menu-center-block h-full">
            <ul className="menu-nav flex ietms-center xl:gap-2 h-full">
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/about"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/service" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/service"
                >
                  <span>Our Services</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/case-studies" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/case-studies"
                >
                  <span>Case Studies</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/blog" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/blog"
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/contact"
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
