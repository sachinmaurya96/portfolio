"use client";
import { ScrollProgress } from "@/components/ui/scroll-progress";

import useFluidCursor from "@/hooks/useFluidCursor";
import { useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import LandingPage from "@/components/pages/LandingPage";

export default function Home() {
  useEffect(() => {
    useFluidCursor();
  }, []);
  return (
    <>
      <div className=" min-h-[100vh]   ">
        <ScrollProgress className="top-0" />
        <div className="fixed top-0 left-0 z-2 pointer-events-none">
          <canvas id="fluid" className="w-screen h-screen" />
        </div>
        <LandingPage />
        <BottomNavigation />
      </div>
    </>
  );
}
