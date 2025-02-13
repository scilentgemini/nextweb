import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const TopNav = () => {
  return (
    <>
      <div className="bg-slate-600">
        <div className="container flex items-center justify-between h-[44px]">
            {/* Email and Address */}
          <div className="left-block flex items-center">
            <div className="location flex ietms-center max-lg:hidden">
              <Icon.MapPin className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                Badegaun - 14, Lalitpur
              </span>
            </div>
            <div className="mail lg:ml-7 flex items-center">
              <Icon.Envelope className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                next@mauveine.tech
              </span>
            </div>
          </div>
          {/* Social Media Links */}
          <div className='right-block flex items-center gap-5'>
            <div className='line h-6 bg-grey max-sm:hidden'>
            <div className='list-social flex items-center gap-2.5 max-sm:hidden'>
                <Link
                  className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                  href="https://facebook.com/mauveine.tech"
                  target="_blank"
                >
                    <i className="icon-facebook text-[12px] w-7 h-7 flex items-center justify-center"></i>
                </Link>
                <Link
                  className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                  href="https://instagram.com/mauveine.tech"
                  target="_blank"
                >
                    <i className="icon-insta text-[12px] w-7 h-7 flex items-center justify-center"></i>
                </Link>
                <Link
                  className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                  href="https://mauveinetech.com/"
                  target="_blank"
                >
                    <i className="icon-in text-[12px] w-7 h-7 flex items-center justify-center"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
