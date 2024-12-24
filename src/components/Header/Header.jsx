import React from "react";

export const Header = () => {
  return (
    <nav className="py-4 md:py-4 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <h1 className="h-[45px] text-2xl text-white">Task Management</h1>
        </a>
      </div>
    </nav>
  );
};
