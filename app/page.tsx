"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Hero } from "../stories/modules/Hero";
import { Footer } from "../stories/modules/Footer";

export default function Home() {
  const router = useRouter();

  function navResume() {
    router.push("/resume");
  }

  function navConnect() {
    window.location.href = "https://www.linkedin.com/in/avacollins-dev/";
  }

  return (
    <React.Fragment>
      <main className="main">
        <Hero
          abouttext="Ambitious developer with a long history of bringing to life
              interactive experiences for retail, education and games. Skilled
              in prototype to MVP launches (aka zero to one), frontend architecture, build pipelines for continous integrations, web accessibility and
              user experience requirements, third party integrations, performance and security monitoring, 
              documentation and user support."
          resume={navResume}
          connect={navConnect} />
      </main>
      <Footer />
    </React.Fragment >
  );
}
