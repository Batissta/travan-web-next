import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="px-8 py-2 border-b border-b-blue-700/10 z-99 w-full bg-slate-950 flex items-center font-(family-name:--font-poppins) gap-8 justify-between">
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
};

export default Header;
