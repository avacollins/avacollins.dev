"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Hero } from "../stories/modules/Hero";
import { Footer } from "../stories/modules/Footer";
import { Grid } from "../stories/modules/Grid";
import { Card } from '../stories/components/Card';
import { worklist } from './constants'

export default function Home() {
  const router = useRouter();

  function navResume() {
    router.push("/resume");
  }

  function navConnect() {
    window.location.href = "https://www.linkedin.com/in/avacollins-dev/";
  }

  const work = worklist.map(((exp, i) => {
    const link = `/work#${exp.name.toLowerCase()}`
    if (i === 0) {
      return (
        <Card title="work" name={exp.name} description={exp.description} image={exp.image} link={link} key={exp.name} />
      )
    }
    return (
      <Card name={exp.name} description={exp.description} image={exp.image} link={link} key={exp.name} />
    )
  }))


  return (
    <React.Fragment>
      <main className="main">
        <Hero
          abouttext="Ambitious pixel pusher with a long history of bringing to life
              interactive experiences for retail, education and games. Skilled
              in prototype to MVP launches, frontend architecture, automated testing, web accessibility,
              user experience, performance monitoring, documentation and user support."
          resume={navResume}
          connect={navConnect} />
      </main>
      <Grid style="work">
        {work}
      </Grid>
      <Footer tagline='“Trying to define yourself is like trying to bite your own teeth.”- Alan Watts' />
    </React.Fragment >
  );
}
