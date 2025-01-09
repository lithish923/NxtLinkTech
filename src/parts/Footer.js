/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-[#000000be] border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <Button
              className="brand-icon"
              type="link"
              href="/"
            >
                  <img src="/logo.png" alt="Logo" />
                  <p className="text-[#FFFFFF] text-4xl font-medium">
                    NxtLink
                    <span className="text-[#ffffff]">Tech</span>
                  </p>
                </Button>
            <p className="w-full text-lg text-[#ffffff] font-light">
              Expanding Your Business
              {' '}
              <br />
              Is Our Mission
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-[#FFFFFF]  pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-[#FFFFFF] font-light">
              nxtlinktech@gmail.com
            </p>
            <p className="text-lg text-[#FFFFFF] font-light">
                Sathyamangalam, Erode
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-[#FFFFFF] pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.linkedin.com/in/nxtlink-tech-383225344/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-[#FFFFFF] font-bold">
          © 2025 NxtLink tech. All rights reserved.
          </p>
        </div>
        
      </div>
    </div>
  );
}
