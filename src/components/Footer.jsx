import React from "react";

const Footer = () => {
  const data = new Date();
  const Hour = data.getHours();
  const Minute = data.getMinutes();
  const Second = data.getSeconds();
  const date = data.getDate();
  const Month = data.getMonth();
  const Year = data.getFullYear();
  const currentDate =
    date +
    "/" +
    Month +
    "/" +
    Year +
    " - " +
    Hour +
    ":" +
    Minute +
    ":" +
    Second;
  return (
    <div className="w-full h-24 bg-blue-500 dark:bg-gray-900 px-11 flex justify-between items-center flex-wrap">
      <div className="flex flex-col gap-2">
        <a
          className="text-white hover:text-blue-700 duration-300 font-semibold text-lg"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=@miltonvinciline08@gmial.com"
        >
          @miltonvinciline08@gmail.com
        </a>
        <p className="text-sm text-white">createdat:30/11/2024</p>
      </div>
      <div>
        <p className="text-white">{currentDate}</p>
      </div>
    </div>
  );
};

export default Footer;
