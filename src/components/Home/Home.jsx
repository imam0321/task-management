import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { HeroSection } from "../HeroSection/HeroSection";
import { TaskBoard } from "../TaskBoard/TaskBoard";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
};
